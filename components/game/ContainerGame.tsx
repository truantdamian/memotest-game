import { GameContextProvider } from "providers/GameContextProvider";
import { Board } from "./Board";
import { Settings } from "./Settings";

export const ContainerGame = () => {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
};
