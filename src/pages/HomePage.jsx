import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

import AboutArise from "../components/AboutArise";
import MovementsCarousel from "../components/MovementsCarousel";

const HomePage = () => (
  <>
    <div className="relative px-4 pt-52 sm:pt-80">
      <h1 className="text-center text-orange-500 uppercase text-h1">
        Arise Asia
      </h1>
      <p className="pb-36 text-center text-white sm:pb-80 sm:text-xl font-heading">
        Go to where there is no Gospel
      </p>
      <video
        autoPlay
        className="object-cover absolute inset-0 w-full h-full z-[-1]"
        loop
        muted
        playsInline
      >
        <source src="home.mp4" type="video/mp4" />
      </video>
    </div>

    <div className="px-4 pb-20 mx-auto -mb-24 bg-white bg-[url('/backgrounds/bg-home-page.svg')] bg-cover sm:-mb-32">
      <div className="container flex flex-col gap-y-10 -translate-y-24 sm:gap-y-20 sm:-translate-y-32">
        <div className="flex flex-col gap-y-4">
          <div className="relative">
            <div className="flex absolute inset-0 justify-center items-center translate-y-6">
              <div className="mx-10 mb-4 max-w-screen-lg text-xs italic text-center text-white sm:mx-14 sm:text-base sm:font-bold sm:rotate-2 md:rotate-1 lg:mx-28 lg:text-xl xl:mb-8 prose prose-sm sm:prose-base">
                <p>
                  However, I consider my life worth nothing to me; my only aim
                  is to finish the race and complete the task the Lord Jesus has
                  given me—the task of testifying to the good news of God’s
                  grace.
                </p>
                <p>Acts 20:24</p>
              </div>
            </div>
            <svg
              className="w-full h-44 text-purple-500 sm:h-48 lg:h-52"
              preserveAspectRatio="none"
              viewBox="0 0 100 18"
            >
              <path
                className="fill-current sm:hidden"
                d="M5 3Q6 0 11 0L85 2Q93 3 94 6L98 14Q100 18 94 18L6 18Q0 18 1 15Z"
              />
              <path
                className="hidden fill-current sm:block"
                d="M5 3Q6 0 8 0L90 3Q93 3 94 6L99 16Q100 18 98 18L3 18Q0 18 1 15Z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="flex absolute inset-0 flex-col">
              <h2 className="-m-1 ml-10 text-white uppercase sm:ml-20 lg:ml-36 text-h2">
                Mission
              </h2>
              <p className="self-center mx-16 mt-4 text-xs italic text-center text-white sm:mx-36 sm:mt-6 sm:text-base sm:font-bold sm:-rotate-3 md:-rotate-2 lg:text-xl">
                To inspire the next generation to take the gospel throughout
                Asia and to the world.
              </p>
            </div>
            <svg
              className="w-full h-32 text-orange-500 sm:h-48"
              preserveAspectRatio="none"
              viewBox="0 0 100 18"
            >
              <path
                className="fill-current sm:hidden"
                d="M97 4Q99 0 93 0H7Q1 0 8 7L16 15Q19 18 31 17L83 13Q93 12 95 8Z"
              />
              <path
                className="hidden fill-current sm:block"
                d="M98 2Q99 0 97 0H5Q1 0 5 4L17 16Q19 18 25 17L90 11Q94 10 95 8Z"
              />
            </svg>
          </div>
        </div>

        <MovementsCarousel />

        <AboutArise />

        <article className="flex relative flex-col gap-10 p-10 mt-6 bg-amber-300 rounded-3xl xl:flex-row">
          <div className="absolute left-0 -top-6 w-48 h-12 bg-amber-300 rounded-t-xl [clip-path:path('M173_10Q168_0_156_0H0L0_48_192_48Z')]" />
          <div className="flex flex-col gap-y-2">
            <div className="text-p">
              <p>Check out what happened in...</p>
            </div>
            <h2 className="uppercase text-h3">Arise Asia 2023</h2>
            <div className="prose prose-sm sm:prose-base">
              <p>
                On July 25-29, 1844 people from all across Asia attended the
                first ever Arise Asia in Bangkok, Thailand. Praise God for all
                He did during this conference! Check out the recap page for the
                summary, moments, and program.
              </p>
            </div>
            <Link
              className="flex gap-x-2 items-center py-2 px-4 mt-6 text-sm font-bold bg-amber-100 rounded-full border-4 border-black sm:text-base w-fit"
              to="/arise2023"
            >
              Arise Asia 2023 Recap <MdOpenInNew size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 grid-rows-5 gap-4 w-full h-60 sm:grid-cols-3 sm:h-96">
            <img
              src="/moments/8.jpg"
              className="object-cover col-start-1 col-end-3 row-start-1 row-end-4 rounded-xl size-full"
            />
            <img
              src="/moments/6.jpg"
              className="hidden object-cover col-start-3 col-end-4 row-start-1 row-end-3 rounded-xl sm:block size-full"
            />
            <img
              src="/moments/9.jpg"
              className="object-cover col-start-1 col-end-2 row-start-4 row-end-6 rounded-xl size-full"
            />
            <img
              src="/moments/7.jpg"
              className="object-cover col-start-2 col-end-3 row-start-4 row-end-6 rounded-xl size-full"
            />
            <img
              src="/moments/3.jpg"
              className="hidden object-cover col-start-3 col-end-4 row-start-3 row-end-6 rounded-xl sm:block size-full"
            />
          </div>
        </article>
      </div>
    </div>
  </>
);

export default HomePage;
