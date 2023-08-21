import { GameContextProvider } from "providers/GameContextProvider";
import { Board } from "./Board";

export const ContainerGame = () => {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
};
