import { useState } from 'react';
import Card from './Card';
import { momentsCards } from '../constants/momentsData';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

function MomentsCarousel() {
  const [cards, setCards] = useState(momentsCards);

  const handleUpClick = () => {
    const prevState = [...cards];
    // find first current active card - so we could make it inactive
    const firstCurrentActiveCardIdx = prevState // get the idx of the one with the highest number of pos from active cards
      .filter((ft) => ft.active === true) // get only the active cards
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx; // basically getting the idx of the one with the highest pos

    // find next inactive card - so we could make it active
    let nextInactiveCardIdx;
    if (
      prevState.filter((ft) => ft.active === true)[2].idx !== prevState.length
    ) {
      nextInactiveCardIdx =
        prevState.filter((ft) => ft.active === true)[2].idx + 1;
    } else {
      nextInactiveCardIdx = prevState.filter((ft) => ft.active === false)[0]
        .idx;
    }
    // update
    prevState.find((f) => f.idx === firstCurrentActiveCardIdx).active = false;
    prevState.find((f) => f.idx === nextInactiveCardIdx).active = true;

    // maximize pos
    prevState.find((f) => f.idx === firstCurrentActiveCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    setCards(prevState);
  };

  const handleDownClick = () => {
    const prevState = [...cards];
    const activeCards = prevState.filter((ft) => ft.active === true);
    const inactiveCards = prevState.filter((ft) => ft.active === false);

    if (activeCards.length > 0 && inactiveCards.length > 0) {
      const lastCurrentActiveCard = activeCards.sort(
        (a, b) => b.pos - a.pos
      )[0];
      const previousInactiveCard = inactiveCards[2] || inactiveCards[0];

      lastCurrentActiveCard.active = false;
      previousInactiveCard.active = true;

      const minPos = Math.min(...prevState.map((o) => o.pos));
      previousInactiveCard.pos = minPos - 1;
    }

    setCards(prevState);
  };

  return (
    <>
      <div
        className="btn btn-circle btn-outline"
        onClick={() => handleUpClick()}
      >
        <IoIosArrowUp />
      </div>
      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <Card key={index} image={card.image} />
        ))}
      <div
        className="btn btn-circle btn-outline"
        onClick={() => handleDownClick()}
      >
        <IoIosArrowDown />
      </div>
    </>
  );
}

export default MomentsCarousel;
