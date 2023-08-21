"use client";
import { createContext, useEffect, useState } from "react";

import { gameModeEnum } from "enum/gameModeEnum";
import { duplicate, shuffle } from "utils/arrayUtils";
import { gameType } from "types/gameType";
import { itemType } from "types/itemType";
import { userType } from "types/userType";
import { statusGameEnum } from "enum/statusGameEnum";

export type gameContextType = {
  game: gameType;
  user: userType;
  loadingItems: boolean;
  newGame: () => void;
  addStatistics: (item1: itemType, item2: itemType) => void;
  addUser: (name: string) => void;
  addMode: (mode: gameModeEnum) => void;
  finishGame: () => void;
};

export const GameContext = createContext<gameContextType>(null);

export const GameContextProvider = ({ children }) => {
  const [loadingItems, setLoadingItems] = useState(false);

  const [user, setUser] = useState<userType>({
    name: "",
  });

  const [game, setGame] = useState<gameType>({
    status: statusGameEnum.init,
    mode: gameModeEnum.easy,
    items: [],
    statistics: {
      cards: [],
      hits: 0,
      miss: 0,
      score: 0,
    },
  });

  useEffect(() => {
    const name = localStorage.getItem("userName");

    if (!name) {
      return;
    }

    setUser({ name });
  }, []);

  useEffect(() => {
    if (!game.mode) {
      return;
    }

    const loadItems = async () => {
      setLoadingItems(true);
      const itemsApi = await getItems(game.mode);
      const items = shuffle(duplicate(itemsApi));
      setLoadingItems(false);
      setGame({
        ...game,
        items,
      });
    };

    loadItems();
  }, [game.mode]);

  const addStatistics = (item1: itemType, item2: itemType) => {
    let hits = game.statistics.hits;
    let miss = game.statistics.miss;
    let cards = game.statistics.cards;
    let score = game.statistics.score;

    if (item1.uuid === item2.uuid) {
      hits = hits + 1;
      cards = [...game.statistics.cards, item1];
      score = score + 1;
    } else {
      miss = miss + 1;
      score = score <= 0 ? 0 : score - 1;
    }

    setGame({
      ...game,
      statistics: {
        ...game.statistics,
        cards,
        hits,
        miss,
        score,
      },
    });
  };

  const newGame = () => {
    setGame({
      ...game,
      status: statusGameEnum.started,
      statistics: {
        ...game.statistics,
        cards: [],
        hits: 0,
        miss: 0,
        score: 0,
      },
    });
  };

  const finishGame = () => {
    setGame({
      ...game,
      status: statusGameEnum.finished,
    });
  };

  const addUser = (name: string) => {
    localStorage.setItem("userName", name);
    setUser({
      name,
    });
  };

  const addMode = (mode: gameModeEnum) => {
    setGame({
      ...game,
      mode,
    });
  };

  const getItemNumberByMode = (mode: gameModeEnum) => {
    switch (mode) {
      case gameModeEnum.easy:
        return 4;
      case gameModeEnum.normal:
        return 8;
      case gameModeEnum.hard:
        return 12;
    }
  };

  const getItems = async (mode: gameModeEnum) => {
    const result = await fetch(
      `/api/animals?per_page=${getItemNumberByMode(mode)}`
    );

    const itemsApi = await result.json();

    return itemsApi;
  };

  return (
    <GameContext.Provider
      value={{
        game,
        user,
        loadingItems,
        newGame,
        finishGame,
        addStatistics,
        addUser,
        addMode,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
