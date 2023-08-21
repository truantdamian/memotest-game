"use client";
import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import { GameContext, gameContextType } from "providers/GameContextProvider";
import { itemType } from "types/itemType";

export const CardList = () => {
  const { game, addStatistics, finishGame, loadingItems } =
    useContext<gameContextType>(GameContext);
  const { items, statistics } = game;

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

  return (
    <div
      className={`flex flex-row flex-wrap items-center justify-center gap-2`}
    >
      {loadingItems && <div>LOADING...</div>}
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
  );
};
