import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const moments = [
  {
    title: "IBIS Fellowship Night",
    subtitle: "Day 1",
    image: "/moments/1.jpg",
  },
  {
    title: "Justice Issues Panel",
    subtitle: "Day 1",
    image: "/moments/2.jpg",
  },
  {
    title: "Night Session Worship",
    subtitle: "Day 1",
    image: "/moments/3.jpg",
  },
  {
    title: "Missional Partners and Organizations Exhibitors",
    subtitle: "Day 2",
    image: "/moments/4.jpg",
  },
  {
    title: "Innovation Lab",
    subtitle: "Day 2",
    image: "/moments/5.jpg",
  },
  {
    title: "Performance from Mongolian Dance",
    subtitle: "Day 2",
    image: "/moments/6.jpg",
  },
  {
    title: "Workshops",
    subtitle: "Day 2",
    image: "/moments/7.jpg",
  },
  {
    title: "Morning Session Congregation",
    subtitle: "Day 3",
    image: "/moments/8.jpg",
  },
  {
    title: "HISPOP Worship Session",
    subtitle: "Day 3",
    image: "/moments/9.jpg",
  },
  {
    title: "Praying at Response Time",
    subtitle: "Day 4",
    image: "/moments/10.jpg",
  },
  {
    title: "Closing Session Prayer",
    subtitle: "Day 5",
    image: "/moments/11.jpg",
  },
];
const numItems = moments.length;

function MomentsCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleDown = () => setActiveIdx((activeIdx + 1) % numItems);
  const handleUp = () => setActiveIdx((activeIdx - 1 + numItems) % numItems);

  return (
    <div>
      <div className="flex gap-x-10 items-center">
        <div className="hidden gap-y-4 items-center lg:flex lg:flex-col">
          <div className="relative">
            <IoIosArrowDropup
              className="absolute top-0 inset-x-1/2 text-white bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
              onClick={handleUp}
              size={48}
            />
            <img
              src={moments[(activeIdx - 1 + numItems) % numItems].image}
              className="w-72 rounded-3xl aspect-video"
            />
          </div>
          <img
            src={moments[activeIdx].image}
            className="w-96 rounded-3xl aspect-video"
          />
          <div className="relative">
            <img
              src={moments[(activeIdx + 1) % numItems].image}
              className="w-72 rounded-3xl aspect-video"
            />
            <IoIosArrowDropdown
              className="absolute bottom-0 inset-x-1/2 text-white bg-purple-500 rounded-full -translate-x-1/2 translate-y-1/2 drop-shadow-2xl"
              onClick={handleDown}
              size={48}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-8 items-center mt-2 lg:mt-0">
          <div className="relative">
            <IoIosArrowDropup
              className="absolute top-0 inset-x-1/2 text-white bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 lg:hidden drop-shadow-2xl"
              onClick={handleUp}
              size={36}
            />
            <img
              src={moments[activeIdx].image}
              className="w-full max-w-screen-lg rounded-3xl aspect-video"
            />
            <IoIosArrowDropdown
              className="absolute bottom-0 inset-x-1/2 text-white bg-purple-500 rounded-full -translate-x-1/2 translate-y-1/2 lg:hidden drop-shadow-2xl"
              onClick={handleDown}
              size={36}
            />
          </div>
          <article className="py-4 sm:py-8 pr-20 pl-6 sm:pl-8 w-full bg-purple-500 rounded-xl [clip-path:polygon(0_0,_0_100%,_80%_100%,_100%_60%,_100%_0)]">
            <p className="italic text-white text-p">
              {moments[activeIdx].subtitle}
            </p>
            <h4 className="font-bold leading-tight text-white sm:text-2xl">
              {moments[activeIdx].title}
            </h4>
          </article>
        </div>
      </div>
    </div>
  );
}

export default MomentsCarousel;
