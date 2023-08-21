"use client";
import { GameContext, gameContextType } from "providers/GameContextProvider";
import { useContext } from "react";

export const UserInfo = () => {
  const { user } = useContext<gameContextType>(GameContext);

  return (
    <div className="flex flex-row items-center gap-2">
      <div>NAME:</div> <b className="text-xl">{user.name}</b>
    </div>
  );
};
