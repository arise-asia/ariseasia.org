import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";

import conferenceData from "../data/conferences.yaml";

const MovementsCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleLeft = () => setActiveIdx(activeIdx - 1);
  const handleRight = () => setActiveIdx(activeIdx + 1);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="relative">
        <div className="absolute w-full h-full bg-cyan-700 rounded-3xl sm:max-w-lg z-[-1]" />
        <div className="p-8 sm:p-10">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-y-1">
              <h2 className="text-white uppercase text-h3">
                Upcoming
                <br />
                Movements
              </h2>
              <p className="text-white text-p">
                Check out where Arise Asia is heading to next!
              </p>
              <Link
                className="flex gap-x-2 items-center py-2 px-4 mt-4 text-sm font-bold bg-cyan-100 rounded-full border-4 border-black sm:text-base w-fit"
                to="/movements"
              >
                Upcoming Events <MdOutlineNotificationsActive size={20} />
              </Link>
            </div>
            <div className="hidden gap-x-4 md:flex">
              <IoIosArrowDropleft
                className="text-white bg-cyan-700 rounded-full drop-shadow-2xl"
                onClick={handleLeft}
                size={48}
              />
              <IoIosArrowDropright
                className="text-white bg-cyan-700 rounded-full drop-shadow-2xl"
                onClick={handleRight}
                size={48}
              />
            </div>
          </div>
          <div className="flex gap-x-10 mt-10 sm:overflow-hidden sm:-mr-10 sm:bg-gradient-to-l sm:from-black justify-center sm:via-black/50 sm:via-5% sm:to-10% sm:justify-normal">
            {getElements(conferenceData.upcomingConferencesList, activeIdx).map(
              (item) => (
                <ConferenceCard key={item.title} {...item} />
              ),
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-x-20 self-center md:hidden">
        <IoIosArrowDropleft
          className="text-white bg-cyan-700 rounded-full drop-shadow-2xl"
          onClick={handleLeft}
          size={48}
        />
        <IoIosArrowDropright
          className="text-white bg-cyan-700 rounded-full drop-shadow-2xl"
          onClick={handleRight}
          size={48}
        />
      </div>
    </div>
  );
};

const ConferenceCard = ({ title, subtitle, backgroundSrc, target }) => (
  <a
    className="hidden relative flex-col justify-end p-4 w-96 bg-gradient-to-t rounded-xl sm:flex first:flex from-black/50 to-50% aspect-video sm:min-w-96"
    href={target}
    rel="noreferrer noopener"
    target="_blank"
  >
    <img
      src={backgroundSrc}
      className="object-cover absolute inset-0 rounded-xl size-full z-[-1]"
    />
    <h3 className="text-white uppercase text-h4">{title}</h3>
    <p className="italic text-white text-p">{subtitle}</p>
  </a>
);

const getElements = (arr, index) => {
  const len = arr.length;
  // Normalize the index to handle negative values
  const start = ((index % len) + len) % len;
  let result = [];

  // fetch only the first four since the rest aren't visible due to limited width
  for (let i = 0; i < 4; i++) {
    result.push(arr[(start + i) % len]);
  }

  return result;
};

export default MovementsCarousel;
