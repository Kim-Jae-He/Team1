import React, { useEffect, useState } from "react";
import datas from "./data/cards";
import BusinessCard from "./components/BusinessCard";

export default function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, SetPickedCards] = useState([]);

  function draw() {
    if (pickedCards.length > 2) {
      const names = pickedCards.reduce((acc, cur) => {
        return (acc = acc.concat(`${cur.name},`));
      }, "");
      return alert(`당첨자는 ${names}입니다.`);
    }

    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    //중복제거
    setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));
    //당첨자 관리 배열이어야얌
    SetPickedCards([...pickedCards, randomItem]);
  }

  useEffect(() => {
    setCards(datas);
  }, []);

  console.log(cards);
  console.log(pickedCards);

  return (
    <>
      <div>
        {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
        {pickedCards.length > 0 && (
          <BusinessCard info={pickedCards[pickedCards.length - 1]} />
        )}
      </div>
    </>
  );
}
