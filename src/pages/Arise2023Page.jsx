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
            <div className="flex flex-col justify-between py-6 px-8 h-full bg-yellow-700 [clip-path:polygon(0_0,_0_85%,_15%_100%,_100%_100%,_100%_0)]">
              <div className="text-white prose prose-sm sm:prose-base">
                <p>
                  On July 25-29, 1844 people from all across Asia attended the
                  first ever Arise Asia in Bangkok, Thailand. Praise God for all
                  He did during this conference. Check out the recap video about
                  Arise Asia 2023.
                </p>
              </div>
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
            className="w-full rounded-xl sm:rounded-3xl aspect-video"
            src="https://www.youtube.com/embed/-V6a5qnJI5Q"
            title="YouTube recap video of the Arise Asia conference"
          />
        </div>

        <h3 className="uppercase text-h4">The Summary</h3>

        <div className="grid grid-cols-4 gap-4 mb-6 text-white md:grid-cols-12 md:grid-rows-6 md:grid-flow-col grid-rows-7">
          {/* 1st column */}
          <div className="relative rounded-3xl bg-[#DB6645] col-span-2 row-span-1 md:row-span-3 md:col-span-2 flex flex-col justify-center items-center text-center aspect-w-1 aspect-h-1">
            <p className="text-3xl font-bold md:text-4xl font-heading">37</p>
            <p className="text-sm md:text-md">countries across Asia</p>
            {/* wave line 1 */}
            <div className="absolute -top-1 -right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
              >
                <path
                  d="M1.72363 2C7.76098 3.03651 11.3659 8.34093 12.87 14.077C13.9579 18.2258 14.0193 25.1307 19.2376 26.1153C23.3208 26.8858 28.0359 26.8409 31.4716 29.4185C33.0109 30.5733 33.7304 31.937 34.1898 33.7941C34.5951 35.4325 34.6293 35.4646 33.9072 34.0463"
                  stroke="#FCD369"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* wave line 2 */}
            <div className="absolute -bottom-1 -left-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="38"
                viewBox="0 0 52 38"
                fill="none"
              >
                <path
                  d="M2 2C9.7138 2 15.3181 7.85153 18.4071 14.6925C20.6413 19.6406 22.1887 28.2506 28.8749 28.3614C34.1067 28.4482 39.949 27.3812 44.7623 29.8635C46.9188 30.9757 48.1023 32.5245 49.0682 34.7453C49.9203 36.7044 49.9696 36.7372 48.7712 35.1208"
                  stroke="#FCD369"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="relative rounded-3xl bg-[#DB6645] col-span-2 row-span-1 md:row-span-3 md:col-span-2 text-center flex flex-col justify-center items-center text-center aspect-w-1 aspect-h-1 p-2">
            <p className="text-3xl font-bold md:text-4xl font-heading">1844</p>{" "}
            <p className="text-sm md:text-md">Arise Asia 2023 attendees</p>
            {/* wave line */}
            <div className="absolute bottom-0 -right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="115"
                viewBox="0 0 30 115"
                fill="none"
              >
                <path
                  d="M12.2273 112.849C-12.5607 92.0279 13.4728 67.9782 12.4748 42.5206C12.1418 34.0256 4.94818 23.3682 10.2467 15.1625C13.643 9.90274 21.4794 3.48589 27.6426 2"
                  stroke="#FCD369"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* 2nd column */}
          <div className="relative rounded-3xl bg-[#A04C34] col-span-2 row-span-1 md:row-span-2 md:col-span-2 flex justify-center items-center py-2 px-5">
            <p className="mr-2 text-3xl font-bold md:mr-3 md:text-4xl font-heading">
              17
            </p>
            <p className="text-sm md:text-md">
              plenary
              <br />
              speakers
            </p>
            {/* wave line */}
            <div className="absolute -top-1 -right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="46"
                viewBox="0 0 120 46"
                fill="none"
              >
                <path
                  d="M2 2.04187C7.97819 2.04187 13.9693 1.91964 19.9451 2.09285C30.2975 2.39292 37.9103 6.0461 46.9137 10.7085C57.8823 16.3887 70.7998 23.5645 83.2116 24.983C91.6545 25.9479 102.254 28.3837 108.651 34.3634C111.238 36.7819 113.857 38.6542 115.992 41.5006C118.863 45.3293 117.438 44.0678 114.87 41.5006"
                  stroke="#FCD369"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="rounded-3xl bg-[#A04C34] col-span-2 row-span-1 md:row-span-2 md:col-span-2 flex justify-center items-center py-2 px-5">
            <p className="mr-2 text-3xl font-bold md:mr-3 md:text-4xl font-heading">
              9
            </p>
            speakers
          </div>

          <div className="relative rounded-3xl bg-[#A04C34] col-span-2 row-span-1 md:row-span-2 md:col-span-2 flex justify-center items-center py-2 px-5">
            <p className="mr-2 text-3xl font-bold md:mr-3 md:text-4xl font-heading">
              60
            </p>
            <p className="text-sm md:text-md">
              workshop
              <br />
              speakers
            </p>
            {/* wave line 1 */}
            <div className="absolute -top-1 -left-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="69"
                viewBox="0 0 76 69"
                fill="none"
              >
                <path
                  d="M2.64875 66.703C1.70639 56.3358 1.43372 47.5536 9.189 39.4924C16.8954 31.4819 30.6855 29.4656 40.3954 24.5747C47.976 20.7562 51.8121 13.2296 58.5006 8.29952C62.8996 5.05699 68.6846 2.93779 74.108 2.44482"
                  stroke="#FCD369"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* wave line 2 */}
            <div className="absolute -right-1 -bottom-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="40"
                viewBox="0 0 51 40"
                fill="none"
              >
                <path
                  d="M2 37.5581C2.64157 32.8532 6.79706 29.1433 10.3036 26.375C15.4338 22.3248 20.8244 18.2852 26.9777 15.9286C32.5062 13.8113 37.2661 11.3904 42.48 8.46206C45.979 6.49684 49.009 6.2165 49.009 2"
                  stroke="#FCD369"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* 3rd column */}
          <div className="relative rounded-3xl bg-[#A34D4D] col-span-2 row-span-1 md:row-span-2 md:col-span-2 flex justify-center items-center py-2 px-5">
            <p className="mr-2 text-3xl font-bold md:mr-3 md:text-4xl font-heading">
              14
            </p>
            <p className="text-sm md:text-md">
              language
              <br />
              translations
            </p>
            {/* wave line */}
            <div className="absolute -top-1 -right-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="97"
                viewBox="0 0 81 97"
                fill="none"
              >
                <path
                  d="M2.46642 2C1.90533 2 5.38819 2.86958 6.06384 3.24963C12.3133 6.76494 17.2588 12.6328 21.4002 18.3588C30.4467 30.8665 35.0466 45.9069 43.8935 58.5742C50.0997 67.4602 58.732 72.791 67.5229 78.7197C73.6698 82.8653 76.1988 88.8597 78.8074 95.3814"
                  stroke="#FCD369"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="relative rounded-3xl bg-[#A34D4D] col-span-2 row-span-1 md:row-span-2 md:col-span-2 flex justify-center items-center py-2 px-5">
            <p className="mr-2 text-4xl font-bold md:mr-3 font-heading">40</p>
            <p className="text-sm md:text-md">
              sponsoring & endorsing partners
            </p>
            {/* wave line */}
            <div className="absolute -right-2 -bottom-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="84"
                viewBox="0 0 46 84"
                fill="none"
              >
                <path
                  d="M43.8519 2C43.8519 8.43116 43.8592 14.5815 42.6623 20.9253C40.2198 33.8702 31.4262 44.1976 27.3599 56.3966C25.3238 62.5047 23.7199 68.8145 18.492 72.9968C14.7554 75.9861 6.98212 81.8105 2 81.8105"
                  stroke="#FCD369"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="relative rounded-3xl bg-[#A34D4D] col-span-2 row-span-1 md:row-span-2 md:col-span-2 flex justify-center items-center py-2 px-5">
            <p className="mr-2 text-3xl font-bold md:mr-3 md:text-4xl font-heading">
              90
            </p>
            <p className="text-sm md:text-md">
              international & local volunteers
            </p>
            {/* wave line */}
            <div className="absolute -top-1 -left-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="53"
                viewBox="0 0 56 53"
                fill="none"
              >
                <path
                  d="M2 50.665C3.21653 50.3608 4.15418 46.7509 4.9199 45.5822C7.19897 42.1036 9.69214 38.884 12.2196 35.5788C16.3713 30.1497 20.3648 24.8553 24.6022 19.5194C28.312 14.8478 34.6847 11.0175 39.9587 8.38052C43.5341 6.59282 51.7038 5.76217 53.5849 2"
                  stroke="#FCD369"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* 4th column */}
          <div className="rounded-3xl bg-[#EBD7FF] col-span-2 row-span-1 md:row-span-3 md:col-span-2 text-black flex flex-col justify-center items-center text-center p-3">
            <span>Responding to Arise Asia</span>
            <img
              src="respond-aa2023.svg"
              alt="Respond-AA2023"
              className="mt-auto mb-auto"
            />
          </div>
          <div className="rounded-3xl bg-[#9045DB] col-span-2 row-span-1 md:row-span-3 md:col-span-2 p-3">
            <p className="text-3xl font-bold md:text-4xl font-heading">499</p>{" "}
            Praying for 3 people to come to know Christ
          </div>

          {/* 5th column */}
          <div className="rounded-3xl bg-[#9045DB] col-span-2 row-span-1 md:row-span-3 md:col-span-2 p-3">
            <p className="text-3xl font-bold md:text-4xl font-heading">402</p>
            <p className="text-sm md:text-md">
              Pledged at least 1 year to a missions internship
            </p>
          </div>
          <div className="rounded-3xl bg-[#9045DB] col-span-2 row-span-1 md:row-span-3 md:col-span-2 p-3">
            <p className="text-3xl font-bold md:text-4xl font-heading">229</p>
            <p className="text-sm md:text-md">
              Committed for long-term cross-cultural mission
            </p>
          </div>

          {/* 6th column */}
          <div className="rounded-3xl bg-[#9045DB] col-span-2 row-span-1 md:row-span-3 md:col-span-2 p-3">
            <p className="text-3xl font-bold md:text-4xl font-heading">462</p>
            <p className="text-sm md:text-md">
              To partner with 2 people for missions work
            </p>
          </div>
          <div className="rounded-3xl bg-[#9045DB] col-span-2 row-span-1 md:row-span-3 md:col-span-2 p-3">
            <p className="text-3xl font-bold md:text-4xl font-heading">169</p>{" "}
            <p className="text-sm md:text-md">
              Applied for 1-2 years to do missions internship
            </p>
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
