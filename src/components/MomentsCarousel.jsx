import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const moments = [
  {
    day: "Day 1",
    title: "Fellowship Night",
    description:
      "A lively evening of fellowship, performances, and snacks, bringing people together in the hotel lounge",
    image: "/moments/1.jpg",
  },
  {
    day: "Day 1",
    title: "Afternoon Panel",
    description:
      "Panelists shared their perspectives on key justice challenges in the world today, focusing on their impact in global missions",
    image: "/moments/2.jpg",
  },
  {
    day: "Day 1",
    title: "Session Worship",
    description:
      "An evening of worship led by Awaken Generation, a worship group from Singapore",
    image: "/moments/3.jpg",
  },
  {
    day: "Day 2",
    title: "Missions Booths",
    description:
      "Missions partners and organizations showcased their ministries in booths surrounding the main hall",
    image: "/moments/4.jpg",
  },
  {
    day: "Day 2",
    title: "Innovation Lab",
    description:
      "Participants collaborated with their teams during the Innovation Lab, a hackathon for pitching innovative ideas for global missions",
    image: "/moments/5.jpg",
  },
  {
    day: "Day 2",
    title: "Mongolian Dance Performance",
    description:
      "Brothers and sisters in Christ from Mongolia performed a traditional dance before the plenary session",
    image: "/moments/6.jpg",
  },
  {
    day: "Day 2",
    title: "Afternoon Workshops",
    description:
      "Engaging workshops featuring speakers on diverse topics such as tech, business, and justice",
    image: "/moments/7.jpg",
  },
  {
    day: "Day 3",
    title: "Group Photo",
    description:
      "A photo of the entire Arise Asia congregation gathered in the main conference room",
    image: "/moments/8.jpg",
  },
  {
    day: "Day 3",
    title: "Worship Performance",
    description:
      "A worship session led by HISPOP, a Christian Korean band and missionary group",
    image: "/moments/9.jpg",
  },
  {
    day: "Day 4",
    title: "Response Time",
    description:
      "A powerful moment of reflection and prayer as attendees sought clarity on their missions calling during the final evening",
    image: "/moments/10.jpg",
  },
  {
    day: "Day 5",
    title: "Closing Prayer",
    description:
      "Representatives from each country gathered on stage for a collective prayer for Asia during the closing session",
    image: "/moments/11.jpg",
  },
];
const numItems = moments.length;

const MomentsCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleDown = () => setActiveIdx((activeIdx + 1) % numItems);
  const handleUp = () => setActiveIdx((activeIdx - 1 + numItems) % numItems);

  return (
    <div>
      <div className="flex gap-x-10 items-center">
        <div className="hidden gap-y-4 items-center lg:flex lg:flex-col">
          <div className="relative">
            <IoIosArrowDropup
              className="absolute top-0 inset-x-1/2 text-white bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 hover:bg-purple-700 drop-shadow-2xl"
              onClick={handleUp}
              size={48}
            />
            <img
              alt={moments[(activeIdx - 1 + numItems) % numItems].title}
              className="w-72 rounded-3xl aspect-video"
              src={moments[(activeIdx - 1 + numItems) % numItems].image}
            />
          </div>
          <img
            alt={moments[activeIdx].title}
            className="w-96 rounded-3xl aspect-video"
            src={moments[activeIdx].image}
          />
          <div className="relative">
            <img
              alt={moments[(activeIdx + 1) % numItems].title}
              className="w-72 rounded-3xl aspect-video"
              src={moments[(activeIdx + 1) % numItems].image}
            />
            <IoIosArrowDropdown
              className="absolute bottom-0 inset-x-1/2 text-white bg-purple-500 rounded-full -translate-x-1/2 translate-y-1/2 hover:bg-purple-700 drop-shadow-2xl"
              onClick={handleDown}
              size={48}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-8 items-center mt-2 max-w-screen-lg lg:mt-0 lg:w-3/4">
          <div className="relative">
            <IoIosArrowDropup
              className="absolute top-0 inset-x-1/2 text-white bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 lg:hidden hover:bg-purple-700 drop-shadow-2xl"
              onClick={handleUp}
              size={36}
            />
            <img
              alt={moments[activeIdx].title}
              className="w-full max-w-screen-lg rounded-3xl aspect-video"
              src={moments[activeIdx].image}
            />
            <IoIosArrowDropdown
              className="absolute bottom-0 inset-x-1/2 text-white bg-purple-500 rounded-full -translate-x-1/2 translate-y-1/2 lg:hidden hover:bg-purple-700 drop-shadow-2xl"
              onClick={handleDown}
              size={36}
            />
          </div>
          <div className="w-full h-40">
            <article className="py-4 pr-16 pl-5 text-white bg-purple-500 rounded-xl sm:py-6 sm:pl-8 [clip-path:polygon(0_0,_0_100%,_80%_100%,_100%_75%,_100%_0)]">
              <p className="italic text-p">{moments[activeIdx].day}</p>
              <h4 className="mb-1 font-bold leading-tight sm:mb-2 sm:text-2xl">
                {moments[activeIdx].title}
              </h4>
              <p className="text-white text-p">
                {moments[activeIdx].description}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MomentsCarousel;
