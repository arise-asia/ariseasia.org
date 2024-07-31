import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";
import conferenceData from "../data/conferences.yaml";

const { upcomingConferencesList } = conferenceData;

const MovementsCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleLeft = () => setActiveIdx(activeIdx - 1);
  const handleRight = () => setActiveIdx(activeIdx + 1);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="relative">
        <div className="absolute w-full h-full bg-cyan-700 rounded-3xl sm:max-w-lg z-[-1]"></div>
        <div className="p-10">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-y-4">
              <h2 className="text-3xl font-bold text-white uppercase font-heading">
                Upcoming
                <br />
                Movements
              </h2>
              <p className="text-sm text-white md:text-base">
                Check out where Arise Asia is heading to next!
              </p>
              <Link
                className="flex gap-x-2 items-center py-2 px-4 text-sm font-bold bg-cyan-100 rounded-full border-4 border-black sm:text-base w-fit"
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
          <div className="flex overflow-hidden gap-x-10 pt-10">
            {
              // fetch only the first four since the rest aren't visible due to limited width
              getElements(upcomingConferencesList, activeIdx).map(
                (item, idx) => (
                  <ConferenceCard
                    hidden={idx != 0}
                    key={item.title}
                    {...item}
                  />
                ),
              )
            }
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

// `hidden` is used as a hack to show only one card if the breakpoint is `sm`
const ConferenceCard = ({ title, subtitle, backgroundSrc, hidden }) => (
  <article
    className={`flex-col justify-end p-4 w-96 bg-gradient-to-b from-transparent from-65% to-black rounded-xl aspect-video sm:min-w-96 relative ${hidden ? "hidden sm:flex" : "flex"}`}
  >
    <img
      src={backgroundSrc}
      className="object-cover absolute inset-0 rounded-xl size-full z-[-1]"
    />
    <h2 className="text-sm font-bold text-white uppercase sm:text-xl font-heading">
      {title}
    </h2>
    <p className="text-xs italic text-white sm:text-base">{subtitle}</p>
  </article>
);

const getElements = (arr, index) => {
  const len = arr.length;
  // Normalize the index to handle negative values
  const start = ((index % len) + len) % len;
  let result = [];

  for (let i = 0; i < 4; i++) {
    result.push(arr[(start + i) % len]);
  }

  return result;
};

export default MovementsCarousel;
