import { useEffect, useState } from "react";
import {
  RiArrowDropDownLine,
  RiArrowDropRightLine,
  RiFileList3Line,
  RiGift2Line,
  RiGlobalLine,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import conferenceData from "../data/conferences.yaml";
import { getFragmentName } from "../utils";

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
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const e = document.querySelector(location.hash);
      e?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="py-60 px-4 bg-cyan-50 bg-[url('/backgrounds/bg-movements-page.svg')] bg-contain">
      <div className="container">
        <h1 className="text-center text-cyan-700 uppercase text-h1">
          Movements
        </h1>
        <p className="py-2 px-10 mx-auto mt-10 font-bold text-center bg-white rounded-full w-fit text-p">
          Check out
          <a
            className="mx-1 text-cyan-700 underline hover:text-cyan-500"
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
              <>
                <button
                  className={`flex justify-center items-center py-2 w-full rounded-full border-2 border-purple-300 sm:px-8 sm:border-4 lg:justify-between ${
                    tabIdx === idx
                      ? "bg-purple-300"
                      : "bg-purple-50 hover:bg-purple-300"
                  }`}
                  key={tabName}
                  onClick={() => setTabIdx(idx)}
                >
                  <p className="text-xs font-bold text-black sm:text-base xl:text-xl">
                    {tabName}
                  </p>
                  {tabIdx === idx ? (
                    <RiArrowDropDownLine
                      className="hidden lg:block"
                      size={28}
                    />
                  ) : (
                    <RiArrowDropRightLine
                      className="hidden lg:block"
                      size={28}
                    />
                  )}
                </button>
                {tabIdx === idx && (
                  <MovementsDropdown
                    data={tabs[tabIdx].data?.map((item) => item.title)}
                  />
                )}
              </>
            ))}
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            <h2 className="text-center text-purple-900 lg:text-left text-h3">
              {tabs[tabIdx].title}
            </h2>
            {tabs[tabIdx].data?.map((item) => (
              <ConferenceCard key={item.title} {...item} />
            ))}
            {tabIdx == 2 && (
              <p className="text-p">
                Don&apos;t see your country here? Contact
                <a
                  className="mx-1 text-cyan-700 underline hover:text-cyan-500"
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

const MovementsDropdown = ({ data }) => (
  <div className="hidden py-4 px-10 ml-10 text-lg font-bold bg-white rounded-xl lg:flex lg:flex-col">
    {data?.map((item) => (
      <Link
        className="py-1 border-b-2 last:border-0 hover:text-purple-500"
        key={item}
        to={{ hash: getFragmentName(item) }}
      >
        {item}
      </Link>
    ))}
  </div>
);

const ConferenceCard = ({
  title,
  subtitle,
  backgroundSrc,
  posterSrc,
  donateTarget,
  signupTarget,
  websiteTarget,
  links,
  description,
}) => {
  const imgSrc = posterSrc || backgroundSrc;

  return (
    <article
      className="flex flex-col gap-6 p-6 bg-white rounded-3xl 2xl:flex-row"
      id={getFragmentName(title)}
    >
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
        {(donateTarget || signupTarget || websiteTarget) && (
          <div className="flex gap-x-4">
            {[
              { title: "Donate", target: donateTarget, Icon: RiGift2Line },
              { title: "Signup", target: signupTarget, Icon: RiFileList3Line },
              { title: "Website", target: websiteTarget, Icon: RiGlobalLine },
            ].map(
              ({ title, target, Icon }) =>
                target && (
                  <a
                    className="flex gap-x-2 justify-center items-center py-1 w-full bg-teal-500 rounded-full border border-teal-500 sm:px-6 sm:border-2 hover:bg-teal-100 max-w-72"
                    href={target}
                    key={title}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <Icon className="hidden sm:block" size={24} />
                    <p className="text-xs font-bold sm:text-base">{title}</p>
                  </a>
                ),
            )}
          </div>
        )}
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
