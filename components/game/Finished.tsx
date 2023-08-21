import { Button } from "components/ui/Button";
import { GameContext, gameContextType } from "providers/GameContextProvider";
import { useContext, useState } from "react";

export const Finished = () => {
  const { user, game, newGame } = useContext<gameContextType>(GameContext);
  const { statistics } = game;

  const handleNewGame = async () => {
    newGame();
  };

  return (
    <div className="flex flex-col items-center gap-4  justify-center pt-6">
      <div className="border p-6 flex flex-col gap-5">
        <h2 className="text-3xl font-bold w-full text-center">
          🎉 CONGRATULATION {user.name}!
        </h2>

        <div className="text-3xl font-bold w-full text-center">
          SCORE: {statistics.score}
        </div>

        <div>
          <Button onClick={handleNewGame}>NEW GAME</Button>
        </div>
      </div>
    </div>
  );
};
