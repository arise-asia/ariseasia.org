import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { momentsCards } from "../constants/momentsData";

const MomentCard = ({ key, image, title, description }) => {
  return (
    <div id={key} className="gap-4 w-full carousel-item card card-compact">
      <figure>
        <img src={image} alt={key} className="rounded-md" />
      </figure>

      <div className="md:hidden card-body bg-[#C16CB9] rounded-md">
        <p className="italic text-white">{title}</p>
        <p className="font-bold text-white">{description}</p>
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
  const [activeIndex, setActiveIndex] = useState(0);
  const len = momentsCards.length;

  const handleDown = () => {
    setActiveIndex((activeIndex + 1) % len);
  };

  const handleUp = () => {
    setActiveIndex((activeIndex - 1 + len) % len);
  };

  return (
    <>
      {/* Carousel: Mobile version */}
      <div className="flex flex-col gap-2 items-center w-full md:hidden">
        {/* up arrow */}
        <div
          className="btn btn-circle border-0 bg-[#C26CB9] text-white relative"
          onClick={handleUp}
        >
          <span className="absolute inset-1 rounded-full border-2 border-white inner-circle" />
          <IoIosArrowUp />
        </div>

        <div className="w-full carousel">
          <MomentCard
            image={momentsCards[activeIndex]["image"]}
            title={momentsCards[activeIndex]["title"]}
            description={momentsCards[activeIndex]["description"]}
          />
        </div>
        <div
          className="btn btn-circle border-0 bg-[#C26CB9] text-white relative"
          onClick={handleDown}
        >
          <span className="absolute inset-1 rounded-full border-2 border-white inner-circle" />
          <IoIosArrowDown />
        </div>
      </div>

      {/* Carousel: Desktop version */}
      <div className="hidden md:flex md:flex-row md:place-content-evenly md:w-10/12">
        <div className="flex flex-col gap-2 items-center w-1/5">
          {/* up arrow */}
          <div
            className="btn btn-circle border-0 bg-[#C26CB9] text-white relative"
            onClick={handleUp}
          >
            <span className="absolute inset-1 rounded-full border-2 border-white inner-circle" />
            <IoIosArrowUp />
          </div>

          <div className="md:gap-3 md:w-full md:h-full carousel md:carousel-vertical md:carousel-center">
            {[
              (activeIndex - 1 + len) % len,
              activeIndex,
              (activeIndex + 1) % len,
            ].map((activeIdx, idx) => (
              <MomentCard
                key={idx}
                image={momentsCards[activeIdx]["image"]}
                title={momentsCards[activeIdx]["title"]}
                description={momentsCards[activeIdx]["description"]}
              />
            ))}
          </div>

          {/* down arrow */}
          <div
            className="btn btn-circle border-0 bg-[#C26CB9] text-white relative"
            onClick={handleDown}
          >
            <span className="absolute inset-1 rounded-full border-2 border-white inner-circle" />
            <IoIosArrowDown />
          </div>
        </div>

        {/* thumbnail */}
        <div className="flex flex-col gap-4 w-3/5">
          <img
            src={momentsCards[activeIndex].image}
            alt={momentsCards[activeIndex].title}
            className="rounded-md"
          />
          <div className="relative hidden md:block bg-[#C16CB9] rounded-md p-8">
            <p className="italic text-white">
              {momentsCards[activeIndex].title}
            </p>
            <p className="font-bold text-white">
              {momentsCards[activeIndex].description}
            </p>
            <div className="absolute -bottom-2 -right-10 w-24 h-12 bg-[#FCD369] rotate-[130deg] transform" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MomentsCarousel;
