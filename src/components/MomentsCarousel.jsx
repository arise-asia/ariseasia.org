import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const moments = [
  {
    title:
      "Fellowship Night – A lively evening of fellowship, performances, and snacks, bringing people together in the hotel lounge",
    subtitle: "Day 1",
    image: "/moments/1.jpg",
  },
  {
    title:
      "Afternoon Panel – Panelists shared their perspectives on key justice challenges in the world today, focusing on their impact in global missions",
    subtitle: "Day 1",
    image: "/moments/2.jpg",
  },
  {
    title:
      "Session Worship – An evening of worship led by Awaken Generation, a worship group from Singapore",
    subtitle: "Day 1",
    image: "/moments/3.jpg",
  },
  {
    title:
      "Missions Booths – Missions partners and organizations showcased their ministries in booths surrounding the main hall",
    subtitle: "Day 2",
    image: "/moments/4.jpg",
  },
  {
    title:
      "Innovation Lab – Participants collaborated with their teams during the Innovation Lab, a hackathon for pitching innovative ideas for global missions",
    subtitle: "Day 2",
    image: "/moments/5.jpg",
  },
  {
    title:
      "Mongolian Dance Performance – Brothers and sisters in Christ from Mongolia performed a traditional dance before the plenary session",
    subtitle: "Day 2",
    image: "/moments/6.jpg",
  },
  {
    title:
      "Afternoon Workshops – Engaging workshops featuring speakers on diverse topics such as tech, business, and justice",
    subtitle: "Day 2",
    image: "/moments/7.jpg",
  },
  {
    title:
      "Group Photo – A photo of the entire Arise Asia congregation gathered in the main conference room",
    subtitle: "Day 3",
    image: "/moments/8.jpg",
  },
  {
    title:
      "Worship Performance – A worship session led by HISPOP, a Christian Korean band and missionary group",
    subtitle: "Day 3",
    image: "/moments/9.jpg",
  },
  {
    title:
      "Response Time – A powerful moment of reflection and prayer as attendees sought clarity on their missions calling during the final evening",
    subtitle: "Day 4",
    image: "/moments/10.jpg",
  },
  {
    title:
      "Closing Prayer – Representatives from each country gathered on stage for a collective prayer for Asia during the closing session",
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
              alt={moments[activeIdx].title}
              className="w-full max-w-screen-lg rounded-3xl aspect-video"
              src={moments[activeIdx].image}
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
