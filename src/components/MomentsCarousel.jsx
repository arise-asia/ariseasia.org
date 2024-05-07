import { useState } from 'react';
import { momentsCards } from '../constants/momentsData';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import PropTypes from 'prop-types';

const MomentCard = ({ key, image, title, description }) => {
  return (
    <div id={key} className="carousel-item card card-compact w-full gap-4">
      <figure>
        <img src={image} alt={key} className="rounded-md" />
      </figure>

      <div className="md:hidden card-body bg-[#C16CB9] rounded-md">
        <p className="text-white italic">{title}</p>
        <p className="text-white font-bold">{description}</p>
      </div>
    </div>
  );
};

MomentCard.propTypes = {
  key: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

function MomentsCarousel() {
  const [cards, setCards] = useState(momentsCards);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDownClick = () => {
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
    setActiveIndex((prevIndex) => {
      const maxIndex = cards.length - 1;
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  };

  const handleUpClick = () => {
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
    setActiveIndex((prevIndex) => {
      const maxIndex = cards.length - 1;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  return (
    <>
      {/* Carousel: Mobile version */}
      <div className="block md:hidden w-full flex flex-col items-center gap-2">
        {/* up arrow */}
        <div
          className="btn btn-circle border-0 bg-[#C26CB9] text-white relative"
          onClick={() => handleUpClick()}
        >
          <span className="inner-circle absolute inset-1 border-2 border-white rounded-full" />
          <IoIosArrowUp />
        </div>

        <div className="carousel w-full">
          {cards
            .filter((f) => f.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
            .map((card, index) => (
              <MomentCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
        </div>

        {/* down arrow */}
        <div
          className="btn btn-circle border-0 bg-[#C26CB9] text-white relative"
          onClick={() => handleDownClick()}
        >
          <span className="inner-circle absolute inset-1 border-2 border-white rounded-full" />
          <IoIosArrowDown />
        </div>
      </div>

      {/* Carousel: Desktop version */}
      <div className="hidden md:block md:flex md:flex-row md:w-10/12 md:place-content-evenly">
        <div className="flex flex-col items-center gap-2 w-1/5">
          {/* up arrow */}
          <div
            className="btn btn-circle border-0 bg-[#C26CB9] text-white relative"
            onClick={() => handleUpClick()}
          >
            <span className="inner-circle absolute inset-1 border-2 border-white rounded-full" />
            <IoIosArrowUp />
          </div>

          <div className="carousel md:carousel-vertical md:carousel-center md:w-full md:h-full md:gap-3">
            {cards
              .filter((f) => f.active === true)
              .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
              .map((card, index) => (
                <MomentCard
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  isActive={index === activeIndex}
                />
              ))}
          </div>

          {/* down arrow */}
          <div
            className="btn btn-circle border-0 bg-[#C26CB9] text-white relative"
            onClick={() => handleDownClick()}
          >
            <span className="inner-circle absolute inset-1 border-2 border-white rounded-full" />
            <IoIosArrowDown />
          </div>
        </div>

        {/* thumbnail */}
        <div className="flex flex-col gap-4 w-3/5">
          <img
            src={cards[activeIndex].image}
            alt={cards[activeIndex].title}
            className="rounded-md"
          />
          <div className="hidden md:block bg-[#C16CB9] rounded-md p-8">
            <p className="text-white italic">{cards[activeIndex].title}</p>
            <p className="text-white font-bold">
              {cards[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MomentsCarousel;
