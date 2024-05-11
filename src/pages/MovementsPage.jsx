import { useState } from "react";
import MovementsCard from "../components/MovementsCard";
import { pastList, upcomingList, futureList } from "../constants/movementsData";

const MovementsPage = () => {
  const [tabIdx, setTabIdx] = useState(0);
  const [countryIdx, setCountryIdx] = useState(0);

  return (
    <div className="px-10 pt-60 bg-cyan-50">
      <div className="container">
        <h1 className="text-4xl font-bold text-center text-cyan-700 uppercase sm:text-5xl md:text-7xl font-heading">
          Movements
        </h1>
        <div className="flex justify-center pt-6">
          <p className="py-2 px-6 font-bold bg-white rounded-full">
            Check out{" "}
            <a className="underline" href="https://goarise.org">
              goarise.org
            </a>{" "}
            for where Arise Movements are taking place!
          </p>
        </div>

        <div className="flex flex-col py-20 lg:flex-row">
          <div className="flex flex-col gap-y-4 px-6 pb-8 xl:w-1/3">
            {["Past", "Upcoming", "Stay Tuned"].map((tabName, idx) => (
              <button
                className={`py-2 pl-8 font-bold text-left text-black bg-white rounded-full border-4 border-[#DC95D5] hover:bg-[#DC95D5] ${
                  tabIdx == idx && "bg-[#DC95D5]"
                }`}
                key={tabName}
                onClick={() => {
                  setTabIdx(idx);
                }}
              >
                {tabName}
              </button>
            ))}
            <h3 className="text-2xl font-bold text-center font-heading">
              Country/City
            </h3>
            <div className="flex flex-col gap-y-3 p-3 bg-white rounded-xl">
              <button className="hidden" />
              {pastList.map((item, idx) => (
                <button
                  className={`py-3 font-bold text-black uppercase bg-white rounded-2xl border-2 border-purple-300 lg:text-lg hover:bg-purple-300 font-heading ${
                    tabIdx == 0 && countryIdx == idx && "bg-purple-300"
                  }`}
                  key={item.country}
                  onClick={() => {
                    setTabIdx(0);
                    setCountryIdx(idx);
                  }}
                >
                  {item.country}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-4 xl:w-2/3">
            {tabIdx == 0 && (
              <>
                <h2 className="text-3xl font-bold text-[#7B3774] font-heading text-center lg:text-left">
                  Past Movements
                </h2>
                <MovementsCard {...pastList[countryIdx]} />
              </>
            )}
            {tabIdx == 1 && (
              <>
                <h2 className="text-3xl font-bold text-[#7B3774] font-heading text-center lg:text-left">
                  Upcoming Movements
                </h2>
                {upcomingList.map((item) => (
                  <MovementsCard key={item.country} {...item} />
                ))}
              </>
            )}
            {tabIdx == 2 && (
              <>
                <h2 className="text-3xl font-bold text-[#7B3774] font-heading text-center lg:text-left">
                  Stay Tuned For...
                </h2>
                {futureList.map((item) => (
                  <div
                    className="p-4 bg-white rounded-3xl hover:bg-gray-50"
                    key={item}
                  >
                    <p className="pl-4 text-xl font-bold text-cyan-700 font-heading">
                      {item}
                    </p>
                  </div>
                ))}
              </>
            )}
            {/*<div className="flex gap-x-4 justify-end">
              <div className="relative text-white bg-purple-300 border-0 btn btn-circle">
                <span className="absolute inset-1 rounded-full border-2 border-white inner-circle"></span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                </svg>
              </div>
              <div className="relative text-white bg-purple-300 border-0 btn btn-circle">
                <span className="absolute inset-1 rounded-full border-2 border-white inner-circle"></span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                </svg>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovementsPage;
