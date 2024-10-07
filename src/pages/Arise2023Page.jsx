import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

import MomentsCarousel from "../components/MomentsCarousel";

const Arise2023Page = () => (
  <div className="pt-60 bg-yellow-50">
    <h1 className="pb-20 text-center text-yellow-700 uppercase text-h1">
      Arise 2023
    </h1>
    <div className="py-10 px-4 bg-amber-300 sm:py-10 md:px-20 rounded-tl-[2.5rem] md:rounded-tl-[5rem]">
      <div className="container flex flex-col gap-y-6">
        <div className="flex flex-col gap-8 mb-6 xl:flex-row">
          <div className="flex flex-col gap-y-4">
            <p className="italic font-bold uppercase sm:text-lg">
              Looking Back On...
            </p>
            <h2 className="uppercase text-h2">Arise Asia 2023</h2>
            <div className="flex gap-4 sm:my-4">
              <span className="py-2 px-4 text-white bg-cyan-700 rounded-md">
                Thailand
              </span>
              <span className="py-2 px-4 text-white bg-cyan-700 rounded-md">
                July 25-29, 2023
              </span>
            </div>
            <h3 className="uppercase text-h4">The Recap</h3>
            <div className="flex flex-col justify-between py-6 px-8 mx-auto h-full bg-yellow-700 w-fit [clip-path:polygon(0_0,_0_85%,_15%_100%,_100%_100%,_100%_0)]">
              <p className="text-white prose prose-sm sm:prose-base">
                This historic event was organized to unite and equip believers
                with a shared vision of advancing the gospel throughout Asia. We
                praise God for the powerful work He accomplished during these
                five days, as lives were transformed, faith was strengthened,
                and a renewed passion for cross-cultural missions was ignited.
                Check out the summary video for a recap of the conference.
              </p>
              <Link
                className="flex gap-x-2 items-center py-2 px-4 mt-6 ml-auto text-sm font-bold text-white bg-gray-700 rounded-full border-4 border-gray-700 sm:text-base hover:bg-gray-500 w-fit"
                to={{ hash: "conference-program" }}
              >
                Conference Program <MdOpenInNew size={20} />
              </Link>
            </div>
          </div>
          <iframe
            allowFullScreen
            className="mt-auto w-full rounded-xl sm:rounded-3xl aspect-video h-fit"
            src="https://www.youtube.com/embed/-V6a5qnJI5Q"
            title="YouTube recap video of the Arise Asia conference"
          />
        </div>

        <h3 className="uppercase text-h4">The Summary</h3>

        <div className="flex flex-col gap-4 2xl:flex-row">
          <div className="grid grid-rows-4 auto-cols-fr gap-4 w-full lg:grid-rows-6 lg:grid-flow-col">
            <div className="flex relative flex-col justify-center items-center p-4 text-center text-white bg-orange-500 rounded-3xl lg:row-span-3">
              <p className="text-h3">37</p>
              <p className="text-p">countries across Asia</p>
              <div className="absolute top-0 right-0">
                <svg width="60" height="60" strokeLinecap="round">
                  <path
                    className="stroke-2 fill-none stroke-amber-300"
                    d="M2 0C5 36 38 16 45 45Q49 58 60 59"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0">
                <svg width="50" height="35" strokeLinecap="round">
                  <path
                    className="stroke-2 fill-none stroke-amber-300"
                    d="M0 2Q13 3 18 15C27 38 44 18 49 35"
                  />
                </svg>
              </div>
            </div>
            <div className="flex relative flex-col justify-center items-center p-4 text-center text-white bg-orange-500 rounded-3xl lg:row-span-3">
              <p className="text-h3">1844</p>
              <p className="text-p">Arise Asia 2023 attendees</p>
              <div className="absolute top-0 left-0">
                <svg width="50" height="55" strokeLinecap="round">
                  <path
                    className="stroke-2 fill-none stroke-amber-300"
                    d="M-1 55C15 12 45 19 49 0"
                  />
                </svg>
              </div>
              <div className="absolute right-0 bottom-0">
                <svg width="25" height="100" strokeLinecap="round">
                  <path
                    className="stroke-2 fill-none stroke-amber-300"
                    d="M2 100C-1 80 32 85 10 49Q-1 32 26 2"
                  />
                </svg>
              </div>
            </div>
            <div className="grid col-span-2 grid-rows-6 row-span-6 grid-flow-col gap-4 grid-cols-subgrid lg:grid-rows-subgrid">
              <div className="flex relative row-span-2 gap-x-4 items-center p-4 text-white bg-orange-700 rounded-3xl">
                <p className="mb-0 w-14 text-right sm:w-24 text-h3">17</p>
                <p className="w-full text-p">plenary speakers</p>
                <div className="absolute bottom-0 left-0">
                  <svg width="25" height="25" strokeLinecap="round">
                    <path
                      className="stroke-2 fill-none stroke-amber-300"
                      d="M0 2C8-1 22 15 24 25"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex relative row-span-2 gap-x-4 items-center p-4 text-white bg-orange-700 rounded-3xl">
                <p className="mb-0 w-14 text-right sm:w-24 text-h3">09</p>
                <p className="w-full text-p">panel speakers</p>
                <div className="absolute top-0 left-0">
                  <svg width="30" height="65" strokeLinecap="round">
                    <path
                      className="stroke-2 fill-none stroke-amber-300"
                      d="M0 63Q11 58 7 44C-2 3 37 20 27 0"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex relative row-span-2 gap-x-4 items-center p-4 text-white bg-orange-700 rounded-3xl">
                <p className="mb-0 w-14 text-right sm:w-24 text-h3">60</p>
                <p className="w-full text-p">workshop speakers</p>
                <div className="absolute right-0 bottom-0">
                  <svg width="40" height="30" strokeLinecap="round">
                    <path
                      className="stroke-2 fill-none stroke-amber-300"
                      d="M1 30Q12 5 40 1"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex relative row-span-2 gap-x-4 items-center p-4 text-white bg-orange-700 rounded-3xl">
                <p className="mb-0 w-14 text-right sm:w-24 text-h3">14</p>
                <p className="w-full text-p">language translations</p>
                <div className="absolute right-0 bottom-0">
                  <svg width="60" height="60" strokeLinecap="round">
                    <path
                      className="stroke-2 fill-none stroke-amber-300"
                      d="M1 60C9 10 45 45 61 1"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex relative row-span-2 gap-x-4 items-center p-4 text-white bg-orange-700 rounded-3xl">
                <p className="mb-0 w-14 text-right sm:w-24 text-h3">40</p>
                <p className="w-full text-p">
                  sponsoring &amp; endorsing partners
                </p>
                <div className="absolute top-0 right-0">
                  <svg width="60" height="60" strokeLinecap="round">
                    <path
                      className="stroke-2 fill-none stroke-amber-300"
                      d="M1 0C2 18 44 7 47 27Q53 59 60 59"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex relative row-span-2 gap-x-4 items-center p-4 text-white bg-orange-700 rounded-3xl">
                <p className="mb-0 w-14 text-right sm:w-24 text-h3">90</p>
                <p className="w-full text-p">
                  international &amp; local volunteers
                </p>
                <div className="absolute bottom-0 left-0">
                  <svg width="30" height="30" strokeLinecap="round">
                    <path
                      className="stroke-2 fill-none stroke-amber-300"
                      d="M30 31Q16 23 -1 1"
                    />
                  </svg>
                </div>
                <div className="absolute right-0 bottom-0">
                  <svg width="80" height="50" strokeLinecap="round">
                    <path
                      className="stroke-2 fill-none stroke-amber-300"
                      d="M1 50Q4 37 18 35C88 29 57-6 80 2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 auto-rows-fr gap-4 w-full lg:grid-cols-3">
            <div className="flex flex-col justify-between items-center p-4 bg-purple-200 rounded-3xl">
              <p className="text-center text-p">Arise Asia Responses</p>
              <img
                alt="Arise Asia 123 GO logo"
                className="w-36"
                src="/123go-logo.svg"
              />
            </div>
            <div className="flex flex-col justify-between p-4 text-white bg-purple-500 rounded-3xl">
              <p className="text-h3">402</p>
              <p className="text-p">
                Pledged at least 1 year to a missions internship
              </p>
            </div>
            <div className="flex flex-col justify-between p-4 text-white bg-purple-500 rounded-3xl">
              <p className="text-h3">462</p>
              <p className="text-p">
                To partner with 2 people for missions work
              </p>
            </div>
            <div className="flex flex-col justify-between p-4 text-white bg-purple-500 rounded-3xl">
              <p className="text-h3">499</p>
              <p className="text-p">
                Praying for 3 people to come to know Christ
              </p>
            </div>
            <div className="flex flex-col justify-between p-4 text-white bg-purple-500 rounded-3xl">
              <p className="text-h3">229</p>
              <p className="text-p">
                Committed for long-term cross-cultural mission
              </p>
            </div>
            <div className="flex flex-col justify-between p-4 text-white bg-purple-500 rounded-3xl">
              <p className="text-h3">169</p>
              <p className="text-p">
                Applied for 1-2 years to do missions internship
              </p>
            </div>
          </div>
        </div>

        <h3 className="uppercase text-h4">The Moments</h3>
        <div className="flex justify-center mb-6">
          <MomentsCarousel />
        </div>

        <h3 className="uppercase text-h4" id="conference-program">
          Conference Program
        </h3>
        <div className="flex overflow-hidden flex-col self-center rounded-3xl xl:flex-row">
          {[1, 2, 3, 4, 5].map((idx) => (
            <img
              alt={`Arise Asia conference day ${idx} program`}
              className="w-full xl:w-1/5 max-w-96"
              key={idx}
              src={`/schedule/day-${idx}.jpg`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Arise2023Page;
