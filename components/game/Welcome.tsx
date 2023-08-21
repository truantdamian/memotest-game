"use client";
import { Button } from "components/ui/Button";
import { TextField } from "components/ui/TextField";
import { gameModeEnum } from "enum/gameModeEnum";
import { GameContext, gameContextType } from "providers/GameContextProvider";
import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";

export const Welcome = () => {
  const { game, user, addMode, newGame, addUser } =
    useContext<gameContextType>(GameContext);
  const [name, setName] = useState("");
  const [changeName, setChangeName] = useState(false);
  const [error, setError] = useState({ name: "" });
  const [step, setStep] = useState(0);

  const memoCardSteps = [
    {
      card1: false,
      card2: false,
      card3: false,
      card4: false,
    },
    {
      card1: true,
      card2: false,
      card3: false,
      card4: false,
    },
    {
      card1: true,
      card2: false,
      card3: true,
      card4: false,
    },
    {
      card1: true,
      card2: true,
      card3: true,
      card4: false,
    },
    {
      card1: true,
      card2: true,
      card3: true,
      card4: true,
    },
  ];

  useEffect(() => {
    if (!user?.name) {
      return;
    }
    setName(user.name);
  }, [user.name]);

  const validate = () => {
    const reg = new RegExp("[a-z]+", "i");

    if (!reg.test(name)) {
      setError({ name: "fill with valid name" });
      return false;
    }
    setError({ name: "" });
    return true;
  };

  const handleRequestChangeName = () => {
    setName("");
    setChangeName(true);
  };

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  const handleMode = (mode: gameModeEnum) => {
    addMode(mode);
  };

  const handleStartGame = () => {
    if (validate()) {
      addUser(name);
      newGame();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(step + 1);
    }, 500);

    if (step >= 4) {
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className="flex flex-col items-center gap-4  justify-center pt-6">
      <div className="border p-6 flex flex-col gap-5 max-w-3xl">
        <div className="flex-row gap-4 hidden md:flex">
          <Card show={memoCardSteps[step].card1}>
            <div className="h-full flex flex-col border p-2">
              <div className="text-3xl font-bold flex-1">M</div>
              <div className="text-xl font-bold justify-items-end self-end">
                T
              </div>
            </div>
          </Card>
          <Card show={memoCardSteps[step].card2}>
            <div className="h-full flex flex-col border p-2">
              <div className="text-3xl font-bold flex-1">E</div>
              <div className="text-xl font-bold justify-items-end self-end">
                E
              </div>
            </div>
          </Card>
          <Card show={memoCardSteps[step].card3}>
            <div className="h-full flex flex-col border p-2">
              <div className="text-3xl font-bold flex-1">M</div>
              <div className="text-xl font-bold justify-items-end self-end">
                S
              </div>
            </div>
          </Card>
          <Card show={memoCardSteps[step].card4}>
            <div className="h-full flex flex-col border p-2">
              <div className="text-3xl font-bold flex-1">O</div>
              <div className="text-xl font-bold justify-items-end self-end">
                T
              </div>
            </div>
          </Card>
        </div>
        {user.name !== "" && !changeName && (
          <div className="mt-8">
            <h3 className="text-3xl font-bold w-full text-center">
              👋 Welcome back{" "}
              <span className="text-slate-500">{user.name}</span>
              <span
                className="text-blue-400 cursor-pointer text-xs ml-1"
                onClick={handleRequestChangeName}
              >
                (I'm not me)
              </span>
            </h3>
          </div>
        )}
        {(user.name === "" || changeName) && (
          <div>
            <TextField
              placeholder="put your name and start game"
              value={name}
              onChange={handleChangeName}
              maxLength={20}
              error={error.name !== ""}
              errorMessage={error.name}
            />
          </div>
        )}

        <div className="flex flex-row justify-between gap-2">
          <Button
            className={game.mode === gameModeEnum.easy ? "bg-slate-300" : ""}
            onClick={() => handleMode(gameModeEnum.easy)}
          >
            EASY
          </Button>
          <Button
            className={game.mode === gameModeEnum.normal ? "bg-slate-300" : ""}
            onClick={() => handleMode(gameModeEnum.normal)}
          >
            NORMAL
          </Button>
          <Button
            className={game.mode === gameModeEnum.hard ? "bg-slate-300" : ""}
            onClick={() => handleMode(gameModeEnum.hard)}
          >
            HARD
          </Button>
        </div>
        <div className="flex flex-row gap-2 justify-end mt-4">
          <Button className="w-auto" onClick={handleStartGame}>
            START GAME
          </Button>
        </div>
      </div>
    </div>
  );
};
