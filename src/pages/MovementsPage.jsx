import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import {
  RiArrowDropRightLine,
  RiFileList3Line,
  RiGift2Line,
  RiGlobalLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

import AsiaMap from "../components/AsiaMap";
import SEOTags from "../components/SEOTags";
import conferenceData from "../data/conferences.yaml";
import { getFragmentName } from "../utils";

const tabs = [
  {
    data: conferenceData.upcomingConferencesList,
    title: "Upcoming Movements",
  },
  {
    data: conferenceData.pastConferencesList,
    title: "Past Movements",
  },
  {
    data: conferenceData.futureConferencesList,
    title: "Stay Tuned",
  },
];

const MovementsPage = () => {
  const [tabIdx, setTabIdx] = useState(0);
  const [tabActive, setTabActive] = useState(true);

  return (
    <div className="py-60 px-4 bg-cyan-50 bg-[url('/backgrounds/bg-movements-page.svg')] bg-contain">
      <SEOTags
        title="Arise Movements"
        description="Check out where Arise movements are taking place!"
        type="website"
      />
      <div className="container">
        <h1 className="text-center text-cyan-700 uppercase text-h1">
          Movements
        </h1>
        <p className="pb-10 font-bold text-center">
          Check out where Arise movements are taking place!
        </p>
        <h2 className="text-center text-cyan-700 uppercase text-h4">
          Movements in Asia
        </h2>
        <div className="my-10">
          <AsiaMap setTabIdx={setTabIdx} />
        </div>
        <div className="flex flex-col gap-y-1 gap-x-4 justify-center items-center py-2 px-10 mx-auto rounded-3xl border-2 border-cyan-500 md:flex-row w-fit">
          <p className="text-xs font-bold text-center text-cyan-700 uppercase sm:text-sm font-heading">
            Regional Movements
          </p>
          <div className="flex flex-col gap-y-1 gap-x-4 sm:flex-row">
            <Link
              className="py-1 px-10 text-xs font-bold text-center text-white uppercase bg-orange-500 rounded-full sm:text-sm hover:bg-orange-400"
              onClick={() => setTabIdx(0)}
              to={{ hash: "#arise-latino" }}
            >
              Latino
            </Link>
            <Link
              className="py-1 px-10 text-xs font-bold text-center text-white uppercase bg-orange-500 rounded-full sm:text-sm hover:bg-orange-400"
              onClick={() => setTabIdx(2)}
              to={{ hash: "#arise-mena" }}
            >
              Mena
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-10 sm:mt-20 lg:flex-row">
          <aside className="flex gap-x-2 gap-y-4 mx-auto w-full h-full sm:gap-x-6 lg:sticky lg:top-10 lg:flex-col lg:max-w-64 xl:max-w-96">
            {["Upcoming", "Past", "Stay Tuned"].map((tabName, idx) => (
              <Fragment key={tabName}>
                <button
                  className={`flex justify-center items-center py-2 w-full rounded-full border-2 border-orange-300 sm:px-8 sm:border-4 lg:justify-between ${
                    tabIdx === idx
                      ? "bg-orange-300"
                      : "bg-orange-50 hover:bg-orange-300"
                  }`}
                  onClick={() =>
                    tabIdx === idx
                      ? setTabActive(!tabActive)
                      : setTabActive(true) || setTabIdx(idx)
                  }
                >
                  <p className="text-xs font-bold text-black sm:text-base xl:text-xl">
                    {tabName}
                  </p>
                  <RiArrowDropRightLine
                    className={`hidden transition-transform duration-500 lg:block ${
                      tabIdx === idx && tabActive && "rotate-90"
                    }`}
                    size={28}
                  />
                </button>
                <MovementsDropdown
                  active={tabIdx === idx && tabActive}
                  data={tabs[idx].data?.map((item) => item.title)}
                />
              </Fragment>
            ))}
          </aside>
          <div className="flex flex-col gap-y-4 w-full">
            <h2 className="text-center text-orange-700 lg:text-left text-h3">
              {tabs[tabIdx].title}
            </h2>
            {tabIdx === 2 && (
              <p className="text-p">
                These movements are currently in the preparation stage. More
                details will be released soon.
              </p>
            )}
            {tabs[tabIdx].data?.map((item) => (
              <ConferenceCard key={item.title} {...item} />
            ))}
            <p className="text-p">
              Don&apos;t see your country here? Contact
              <a
                className="mx-1 text-cyan-700 underline hover:text-cyan-500"
                href="mailto:info@ariseasia.org"
              >
                info@ariseasia.org
              </a>
              to find out more about hosting an Arise Movement in your
              country/city!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MovementsDropdown = ({ active, data }) => (
  <div
    className={`grid transition-[grid-template-rows] duration-500 ${
      active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
    }`}
  >
    <div className="hidden overflow-hidden px-10 ml-10 text-lg font-bold bg-white rounded-xl shadow lg:flex lg:flex-col">
      {data?.map((item) => (
        <Link
          className="py-1 border-b-2 first:pt-4 last:pb-4 last:border-0 hover:text-orange-500"
          key={item}
          to={{ hash: getFragmentName(item) }}
        >
          {item}
        </Link>
      ))}
    </div>
  </div>
);

MovementsDropdown.propTypes = {
  active: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.string),
};

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
      className="flex flex-col gap-6 p-6 bg-white rounded-3xl shadow 2xl:flex-row"
      id={getFragmentName(title)}
    >
      {imgSrc && (
        <img
          alt={title}
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
              { Icon: RiGift2Line, target: donateTarget, title: "Donate" },
              { Icon: RiFileList3Line, target: signupTarget, title: "Signup" },
              { Icon: RiGlobalLine, target: websiteTarget, title: "Website" },
            ].map(
              ({ Icon, target, title }) =>
                target && (
                  <a
                    className="flex gap-x-2 justify-center items-center py-1 w-full bg-cyan-500 rounded-full border border-cyan-500 sm:px-6 sm:border-2 hover:bg-cyan-50 max-w-72"
                    href={target}
                    key={title}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon className="hidden sm:block" size={24} />
                    <p className="text-xs font-bold sm:text-base">{title}</p>
                  </a>
                )
            )}
          </div>
        )}
        {links && (
          <div className="flex flex-wrap gap-y-2 gap-x-4">
            {links.map((item) => (
              <a
                className="py-1 px-4 text-xs font-bold bg-cyan-50 rounded-full border border-cyan-500 sm:px-6 sm:text-base sm:border-2 hover:bg-cyan-500"
                href={item.target}
                key={item.title}
                rel="noopener noreferrer"
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

ConferenceCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundSrc: PropTypes.string,
  posterSrc: PropTypes.string,
  donateTarget: PropTypes.string,
  signupTarget: PropTypes.string,
  websiteTarget: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, target: PropTypes.string })
  ),
  description: PropTypes.string,
};

export default MovementsPage;
