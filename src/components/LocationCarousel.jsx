import { useState } from 'react';
import { locationCards } from '../constants/locationData';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import PropTypes from 'prop-types';

const LocationCard = ({ key, image, title, date }) => {
  return (
    <div
      id={key}
      className="carousel-item card card-compact w-5/6 md:w-[40vw] h-60"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(42, 15, 0, 0.69) 80.4%), url("${image}") lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="card-body absolute bottom-0">
        <h2 className="card-title font-heading font-bold text-white">
          {title}
        </h2>
        <p className="text-white italic">{date}</p>
      </div>
    </div>
  );
};

LocationCard.propTypes = {
  key: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

function LocationCarousel() {
  const [cards, setCards] = useState(locationCards);

  const handleRightClick = () => {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({
      left: carousel.offsetWidth, // Scroll by the width of the carousel container
      behavior: 'smooth', // Optional: Add smooth scrolling behavior
    });

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

  const handleLeftClick = () => {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({
      left: -carousel.offsetWidth, // Scroll by the negative width of the carousel container
      behavior: 'smooth', // Optional: Add smooth scrolling behavior
    });

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
    <div className="relative w-10/12 md:ml-20 md:w-11/12">
      {/* Dark blue green box */}
      <div className="bg-[#406E7D] rounded-xl w-full md:w-4/12 p-5 pb-20 md:p-10 md:pb-80">
        <div className="text-white text-2xl md:text-4xl text-left font-bold font-heading md:leading-10">
          UPCOMING
          <br />
          MOVEMENTS
        </div>

        <div className="text-white mt-3 mb-3 text-sm md:text-md">
          Check out where Arise Asia is heading to next!
        </div>

        <a
          role="button"
          className="btn bg-[#B3ECFF] rounded-full border-4 border-black text-black"
          href="/movements"
        >
          Click to find out more
          <MdOutlineNotificationsActive className="ml-2" size={24} />
        </a>
      </div>

      {/* Location Carousel */}
      <div className="absolute -bottom-44 left-6 md:bottom-10 md:left-10 carousel carousel-center w-full md:w-11/12 gap-3 md:gap-5">
        {cards
          .filter((f) => f.active === true)
          .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
          .map((card, index) => (
            <LocationCard
              key={index}
              image={card.image}
              title={card.title}
              date={card.date}
            />
          ))}
      </div>

      {/* Carousel Arrows: Desktop version */}
      <div className="absolute hidden md:block md:top-10 md:right-28">
        <div
          className="btn btn-circle border-0 bg-[#406E7D] text-white relative"
          onClick={() => handleLeftClick()}
        >
          <span className="inner-circle absolute inset-1 border-2 border-white rounded-full" />
          <IoIosArrowBack />
        </div>

        <div
          className="btn btn-circle border-0 bg-[#406E7D] text-white relative ml-5"
          onClick={() => handleRightClick()}
        >
          <span className="inner-circle absolute inset-1 border-2 border-white rounded-full" />
          <IoIosArrowForward />
        </div>
      </div>

      {/* Carousel Arrows: Mobile version */}
      <div className="absolute -bottom-60 md:hidden">
        <div
          className="btn btn-circle border-0 bg-[#406E7D] text-white relative ml-24"
          onClick={() => handleLeftClick()}
        >
          <span className="inner-circle absolute inset-1 border-2 border-white rounded-full" />
          <IoIosArrowBack />
        </div>

        <div
          className="btn btn-circle border-0 bg-[#406E7D] text-white relative ml-10"
          onClick={() => handleRightClick()}
        >
          <span className="inner-circle absolute inset-1 border-2 border-white rounded-full" />
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default LocationCarousel;
