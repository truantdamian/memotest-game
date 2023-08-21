"use client";
import { gameModeEnum } from "enum/gameModeEnum";

import { useContext, useEffect } from "react";
import { GameContext, gameContextType } from "providers/GameContextProvider";
import { Button } from "components/ui/Button";

export const GameInfo = () => {
  const { game, newGame, addMode } = useContext<gameContextType>(GameContext);
  const { statistics } = game;

  const handleNewGame = (mode: gameModeEnum) => {
    addMode(mode);
  };

  useEffect(() => {
    newGame();
  }, [game.mode]);

  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="flex flex-row gap-3 items-center">
          <div>
            HITS:<b>{statistics.hits}</b>
          </div>
          <div>
            MISS:<b>{statistics.miss}</b>
          </div>
          <div>
            SCORE:<b>{statistics.score}</b>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-2">
        <Button
          onClick={() => handleNewGame(gameModeEnum.easy)}
          className={game.mode === gameModeEnum.easy ? "bg-slate-300" : ""}
        >
          EASY
        </Button>
        <Button
          onClick={() => handleNewGame(gameModeEnum.normal)}
          className={game.mode === gameModeEnum.normal ? "bg-slate-300" : ""}
        >
          NORMAL
        </Button>
        <Button
          onClick={() => handleNewGame(gameModeEnum.hard)}
          className={game.mode === gameModeEnum.hard ? "bg-slate-300" : ""}
        >
          HARD
        </Button>
      </div>
    </div>
  );
};
