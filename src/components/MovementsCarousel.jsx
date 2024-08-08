import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { MdOpenInNew, MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";

import { getConferenceMetadata, getElements, getFragmentName } from "../utils";

const featuredMovements = [
  "Arise Hong Kong",
  "Arise Indonesia",
  "Arise Myanmar",
  "Arise Nepal",
  "Arise Latino",
];
const conferenceData = getConferenceMetadata(featuredMovements);

const MovementsCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleLeft = () => setActiveIdx(activeIdx - 1);
  const handleRight = () => setActiveIdx(activeIdx + 1);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="overflow-hidden relative">
        <div className="absolute w-full h-full bg-cyan-700 rounded-3xl sm:max-w-lg -z-10" />
        <div className="p-8 sm:p-10">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-y-1">
              <h2 className="text-white uppercase text-h3">
                Featured
                <br />
                Movements
              </h2>
              <p className="text-white text-p">
                Check out where Arise Asia is heading to next!
              </p>
              <Link
                className="flex gap-x-2 items-center py-2 px-4 mt-4 text-sm font-bold bg-cyan-100 rounded-full border-4 border-black sm:text-base hover:bg-cyan-50 w-fit"
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
          <div className="flex gap-x-10 mt-10 sm:-mr-10 sm:bg-gradient-to-l sm:from-black justify-center sm:via-black/50 sm:via-5% sm:to-10% sm:justify-normal">
            {getElements(conferenceData, activeIdx).map((item) => (
              <ConferenceCard key={item.title} {...item} />
            ))}
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

const ConferenceCard = ({ title, subtitle, backgroundSrc, websiteTarget }) => {
  const contents = (
    <>
      <p className="flex absolute -right-5 -bottom-5 gap-x-2 items-center p-2 text-sm font-bold bg-cyan-100 rounded-full border-4 border-cyan-900 opacity-0 transition sm:px-6 sm:text-base group-hover:opacity-100 hover:bg-cyan-50">
        <span className="hidden sm:block">Learn More</span>{" "}
        <MdOpenInNew size={20} />
      </p>
      <img
        src={backgroundSrc}
        className="object-cover absolute inset-0 rounded-xl size-full -z-10"
      />
      <h3 className="text-white uppercase text-h4">{title}</h3>
      <p className="italic text-white text-p">{subtitle}</p>
    </>
  );

  return websiteTarget ? (
    <a
      className="hidden relative flex-col justify-end p-4 w-96 bg-gradient-to-t rounded-xl transition sm:flex first:flex hover:ring-4 hover:ring-inset hover:ring-cyan-900 hover:shadow-xl from-black/50 to-50% aspect-video group sm:min-w-96"
      href={websiteTarget}
      rel="noopener noreferrer"
      target="_blank"
    >
      {contents}
    </a>
  ) : (
    <Link
      className="hidden relative flex-col justify-end p-4 w-96 bg-gradient-to-t rounded-xl transition sm:flex first:flex hover:ring-4 hover:ring-inset hover:ring-cyan-900 hover:shadow-xl from-black/50 to-50% aspect-video group sm:min-w-96"
      to={{ pathname: "movements", hash: getFragmentName(title) }}
    >
      {contents}
    </Link>
  );
};

export default MovementsCarousel;
