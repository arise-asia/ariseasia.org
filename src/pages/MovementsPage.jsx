import { useState } from "react";

import conferenceData from "../data/conferences.yaml";

const tabs = [
  {
    title: "Upcoming Movements",
    data: conferenceData.upcomingConferencesList,
  },
  {
    title: "Past Movements",
    data: conferenceData.pastConferencesList,
  },
  {
    title: "Stay Tuned For...",
    data: conferenceData.futureConferencesList,
  },
];

const MovementsPage = () => {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <div className="py-60 px-4 bg-cyan-50 bg-[url('/backgrounds/bg-movements-page.svg')] bg-contain">
      <div className="container">
        <h1 className="text-center text-cyan-700 uppercase text-h1">
          Movements
        </h1>
        <p className="py-2 px-10 mx-auto mt-10 font-bold text-center bg-white rounded-full w-fit text-p">
          Check out
          <a
            className="mx-1 text-cyan-700 underline"
            href="https://goarise.org"
            rel="noreferrer noopener"
            target="_blank"
          >
            goarise.org
          </a>
          for where Arise Movements are taking place!
        </p>
        <div className="flex flex-col gap-10 mt-10 sm:mt-20 lg:flex-row">
          <div className="flex gap-x-2 gap-y-4 mx-auto w-full sm:gap-x-6 lg:flex-col lg:max-w-64 xl:max-w-96">
            {["Upcoming", "Past", "Stay Tuned"].map((tabName, idx) => (
              <button
                className={`py-2 w-full text-xs font-bold text-black rounded-full border-2 border-purple-300 sm:text-base sm:border-4 lg:pl-8 lg:text-left xl:text-xl ${
                  tabIdx === idx
                    ? "bg-purple-300"
                    : "bg-purple-50 hover:bg-purple-300"
                }`}
                key={tabName}
                onClick={() => setTabIdx(idx)}
              >
                {tabName}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            <h2 className="text-center text-purple-900 lg:text-left text-h3">
              {tabs[tabIdx].title}
            </h2>
            {tabs[tabIdx].data.map((item) => (
              <ConferenceCard key={item.title} {...item} />
            ))}
            {tabIdx == 2 && (
              <p className="text-p">
                Don&apos;t see your country here? Contact
                <a
                  className="mx-1 text-cyan-700 underline"
                  href="mailto:admin@ariseasia.org"
                >
                  admin@ariseasia.org
                </a>
                to find out more about hosting an Arise Movement in your
                country/city!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ConferenceCard = ({
  title,
  subtitle,
  posterSrc,
  backgroundSrc,
  links,
  description,
}) => {
  const imgSrc = posterSrc || backgroundSrc;

  return (
    <article className="flex flex-col gap-6 p-6 bg-white rounded-3xl 2xl:flex-row">
      {imgSrc && (
        <img
          alt={`Image for the ${title} conference`}
          className="object-cover mx-auto w-full bg-gray-400 rounded-xl max-w-96 h-fit aspect-video"
          src={imgSrc}
        />
      )}
      <div className="flex flex-col gap-y-4 w-full">
        <div>
          <h3 className="text-cyan-700 text-h4">{title}</h3>
          <p className="italic text-gray-500 text-p">{subtitle}</p>
        </div>
        {links && (
          <div className="flex flex-wrap gap-y-2 gap-x-4">
            {links.map((item) => (
              <a
                className="py-1 px-4 text-xs font-bold bg-purple-50 rounded-full border border-purple-300 sm:px-6 sm:text-base sm:border-2 hover:bg-purple-300"
                href={item.target}
                key={item.title}
                rel="noreferrer noopener"
                target="_blank"
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
        {description && (
          <div className="whitespace-pre-line prose prose-sm sm:prose-base">
            {description}
          </div>
        )}
      </div>
    </article>
  );
};

export default MovementsPage;
