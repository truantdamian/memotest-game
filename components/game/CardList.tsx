"use client";
import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import { GameContext, gameContextType } from "providers/GameContextProvider";
import { itemType } from "types/itemType";
import { Loading } from "components/icons/Loading";
import { gameModeEnum } from "enum/gameModeEnum";

export const CardList = () => {
  const { game, items, addStatistics, finishGame, loadingItems } =
    useContext<gameContextType>(GameContext);
  const { statistics } = game;

  const [flippedCards, setFlippedCard] = useState([]);

  const handleClick = (item: itemType) => {
    if (
      flippedCards.find((x) => x.id === item.id) ||
      flippedCards.length >= 2
    ) {
      return;
    }
    setFlippedCard([...flippedCards, item]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      addStatistics(flippedCards[0], flippedCards[1]);

      const timeout = setTimeout(() => {
        setFlippedCard([]);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [flippedCards]);

  useEffect(() => {
    let timeout = null;

    if (statistics.hits === 0) {
      setFlippedCard([]);
    }

    if (statistics.hits * 2 === items.length) {
      timeout = setTimeout(() => {
        finishGame();
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [statistics.hits]);

  const canShow = (item: itemType) => {
    return (
      statistics.cards.some((hit) => hit.uuid === item.uuid) ||
      flippedCards.some((flip) => flip.id === item.id)
    );
  };

  const getGridCol = () => {
    switch (game.mode) {
      case gameModeEnum.easy:
        return "grid-cols-2 md:grid-cols-4 lg:grid-cols-4";
      case gameModeEnum.normal:
        return "grid-cols-2 md:grid-cols-4 lg:grid-cols-4";
      case gameModeEnum.hard:
        return "grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6";
    }
  };

  return (
    <>
      {loadingItems && (
        <div className="flex flex-row items-center justify-center">
          LOADING...
          <Loading />
        </div>
      )}

      <div className={`grid ${getGridCol()} gap-4`}>
        {!loadingItems &&
          items.map((item: itemType) => (
            <Card
              key={item.id}
              url={item.url}
              title={item.title}
              show={canShow(item)}
              handleClick={() => handleClick(item)}
            />
          ))}
      </div>
    </>
  );
};
