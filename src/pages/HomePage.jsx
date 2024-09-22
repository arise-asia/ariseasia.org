import { GrCircleInformation, GrCirclePlay, GrHistory } from "react-icons/gr";
import { Link } from "react-router-dom";

import MovementsCarousel from "../components/MovementsCarousel";

const HomePage = () => (
  <>
    <div className="relative px-4 pt-52 bg-gradient-to-t sm:pt-80 from-orange-500/75 to-40%">
      <h1 className="mb-4 text-6xl font-bold text-center text-orange-500 uppercase md:text-7xl font-heading">
        Arise Asia
      </h1>
      <p className="pb-36 text-center text-white sm:pb-80 sm:text-xl font-heading">
        Go where there is no Gospel
      </p>
      <video
        autoPlay
        className="object-cover absolute inset-0 w-full h-full -z-10"
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

        <div className="flex flex-col gap-6 justify-center items-center xl:flex-row">
          <div className="p-4 w-full max-w-screen-sm text-red-700 rounded-3xl ring-2 ring-red-700 xl:w-1/3">
            <iframe
              allowFullScreen
              className="mb-4 w-full rounded-xl aspect-video"
              src="https://www.youtube.com/embed/GwPLi5IUdkI"
              title="YouTube video explaining the Arise movement"
            />
            <div className="flex gap-x-2 items-center">
              <GrCirclePlay className="mb-0.5 sm:mb-1" size={24} />
              <h3 className="text-h4">Who We Are</h3>
            </div>
            <p className="text-p">
              Discover the mission and values of the Arise movement, as
              explained by co-founder, David Ro
            </p>
          </div>
          <div className="relative order-first p-10 w-full max-w-screen-md bg-red-700 rounded-3xl xl:order-none xl:w-1/3">
            <img
              alt="What is Arise? logo"
              className="absolute bottom-2 right-6 w-12 xl:-bottom-20 xl:w-24"
              src="/logo.svg"
            />
            <h2 className="text-center text-white uppercase text-h3">
              What Is Arise?
            </h2>
            <div className="text-white prose prose-sm sm:prose-base">
              <p>
                Arise Asia is a missions movement launched in 2023 to{" "}
                <span className="text-amber-300">
                  inspire young adults across Asia and beyond to take the gospel
                  where it has never been heard.{" "}
                </span>
                Join our events to be part of a generation committed to sharing
                the gospel and planting churches in unreached areas. Discover
                how you can make a difference with the Arise movement by
                attending our conferences and partnering with us through our
                mentoring and internship programs.
              </p>
            </div>
            <Link
              className="flex gap-x-2 items-center py-2 px-4 mt-6 text-sm font-bold bg-red-100 rounded-full border-4 border-black sm:text-base hover:bg-red-50 w-fit"
              to="/about"
            >
              More About Us <GrCircleInformation size={20} />
            </Link>
          </div>
          <div className="p-4 w-full max-w-screen-sm text-red-700 rounded-3xl ring-2 ring-red-700 xl:w-1/3">
            <iframe
              allowFullScreen
              className="mb-4 w-full rounded-xl aspect-video"
              src="https://www.youtube.com/embed/4G4fQidFXro"
              title="YouTube video explaining the Arise movement"
            />
            <div className="flex gap-x-2 items-center">
              <GrCirclePlay className="mb-0.5 sm:mb-1" size={24} />
              <h3 className="text-h4">Why Join Us</h3>
            </div>
            <p className="text-p">
              Understand the importance of the Arise movement, as explained by
              co-founder, Seth Kim
            </p>
          </div>
        </div>

        <MovementsCarousel />

        <article className="flex relative flex-col gap-10 p-10 mt-6 bg-amber-300 rounded-3xl xl:flex-row">
          <div className="absolute left-0 -top-6 w-48 h-12 bg-amber-300 rounded-t-xl [clip-path:path('M173_10Q168_0_156_0H0L0_48_192_48Z')]" />
          <div className="flex flex-col gap-y-2">
            <div className="text-p">
              <p>Check out what happened in...</p>
            </div>
            <h2 className="uppercase text-h3">Arise Asia 2023</h2>
            <div className="w-full mx-auto lg:prose lg:prose-sm">
              <p>
                On 25-29 July 2023, over 1800 participants from across Asia
                gathered in Bangkok, Thailand, for the inaugural Arise Asia
                conference. This historic event was organized to unite and equip
                believers with a shared vision of advancing the gospel
                throughout Asia. We praise God for the powerful work He
                accomplished during these five days, as lives were transformed,
                faith was strengthened, and a renewed passion for cross-cultural
                missions was ignited.
                <br />
                <br />
                This conference was created to inspire and mobilize a new
                generation of leaders, fostering collaboration beyond cultural
                and national boundaries. As we look to the future, we hope to
                see the impact of this gathering continue to grow as
                participants return to their communities, empowered to make a
                lasting difference.
                <br />
                <br />
                For a recap of the conference, including key moments and session
                summaries, visit our recap page.
              </p>
            </div>
            <Link
              className="flex gap-x-2 items-center py-2 px-4 mt-6 text-sm font-bold bg-amber-100 rounded-full border-4 border-black sm:text-base hover:bg-amber-50 w-fit"
              to="/arise2023"
            >
              Arise Asia 2023 Recap <GrHistory size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 grid-rows-5 gap-4 w-full h-60 sm:grid-cols-3 sm:h-96 lg:my-auto">
            <img
              alt="Morning session congregation"
              src="/moments/8.jpg"
              className="object-cover col-start-1 col-end-3 row-start-1 row-end-4 rounded-xl size-full"
            />
            <img
              alt="Performance from Mongolian dance"
              src="/moments/6.jpg"
              className="hidden object-cover col-start-3 col-end-4 row-start-1 row-end-3 rounded-xl sm:block size-full"
            />
            <img
              alt="HISPOP worship session"
              src="/moments/9.jpg"
              className="object-cover col-start-1 col-end-2 row-start-4 row-end-6 rounded-xl size-full"
            />
            <img
              alt="Workshops"
              src="/moments/7.jpg"
              className="object-cover col-start-2 col-end-3 row-start-4 row-end-6 rounded-xl size-full"
            />
            <img
              alt="Night session worship"
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
