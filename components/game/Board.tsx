"use client";
import { useContext } from "react";
import { CardList } from "./CardList";
import { GameInfo } from "./GameInfo";
import { UserInfo } from "./UserInfo";
import { GameContext, gameContextType } from "providers/GameContextProvider";
import { statusGameEnum } from "enum/statusGameEnum";
import { Finished } from "./Finished";
import { Welcome } from "./Welcome";

export const Board = () => {
  const { game } = useContext<gameContextType>(GameContext);
  const { status } = game;
  return (
    <>
      {status === statusGameEnum.init && (
        <div>
          <Welcome />
        </div>
      )}
      {status === statusGameEnum.started && (
        <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-2">
          <div className="p-6">
            <div className="mb-2">
              <UserInfo />
            </div>
            <GameInfo />
          </div>
          <div className="border p-6 h-full">
            <CardList />
          </div>
        </div>
      )}
      {status === statusGameEnum.finished && <Finished />}
    </>
  );
};
