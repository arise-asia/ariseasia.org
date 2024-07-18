import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";
import LocationCarousel from "../components/LocationCarousel";

const HomePage = () => (
  <>
    {/* Header */}
    <div className="px-10 pt-80">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover absolute top-0 left-0 w-full h-full z-[-1]"
      >
        <source src="home.mp4" type="video/mp4" />
      </video>
      <h1 className="text-6xl font-bold text-center text-orange-500 uppercase sm:text-7xl font-heading">
        Arise Asia
      </h1>
      <p className="pt-2 pb-40 text-xl text-center text-white sm:pb-80 font-heading">
        Go to where there is no Gospel
      </p>
    </div>

    {/* Body */}
    <div className="bg-white">
      <div className="grid place-items-center gap-5 md:gap-10 bg-center bg-no-repeat bg-cover bg-[url('../public/bg-mobile.svg')] md:bg-[url('../public/bg-desktop.svg')]">
        {/* VERSE: Desktop version */}
        <div className="hidden w-11/12 md:block md:-mt-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1323 287"
            fill="none"
          >
            <path
              d="M76.0345 14.6979C78.6679 6.0301 86.7986 0.214785 95.8524 0.52352L1281.22 40.9448C1290.7 41.2681 1298.65 48.2079 1300.25 57.5588L1322.23 185.999C1324.24 197.74 1315.61 208.624 1303.72 209.337L21.6894 286.278C7.7832 287.113 -2.69481 273.83 1.35499 260.5L76.0345 14.6979Z"
              fill="#C26CB9"
            />

            <foreignObject x="160" y="70" width="80%" height="90%">
              <body xmlns="http://www.w3.org/1999/xhtml">
                <div className="flex justify-center items-center mt-4 text-xl italic font-bold text-center text-white rotate-[2deg]">
                  However, I consider my life worth nothing to me; my only aim
                  is to finish the race and complete the task the Lord Jesus has
                  given me—the task of testifying to the good news of God’s
                  grace.
                  <br />
                  <br />
                  Acts 20:24
                </div>
              </body>
            </foreignObject>
          </svg>
        </div>

        {/* VERSE: Mobile version */}
        <div className="block -mt-24 w-11/12 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 410 223"
            fill="none"
          >
            <path
              d="M19.1791 18.4372C20.2902 7.70437 29.7148 -0.212146 40.4783 0.546139L382.522 24.6429C392.361 25.3361 400.226 33.0992 401.047 42.9287L409.038 138.597C409.903 148.958 402.686 158.253 392.435 159.983L23.5587 222.217C10.5219 224.417 -1.02362 213.587 0.337804 200.436L19.1791 18.4372Z"
              fill="#C26CB9"
            />

            <foreignObject x="45" y="35" width="80%" height="90%">
              <div className="flex justify-center items-center mt-4 text-sm italic text-center text-white">
                However, I consider my life worth nothing to me; my only aim is
                to finish the race and complete the task the Lord Jesus has
                given me—the task of testifying to the good news of God’s grace.
                <br />
                <br />
                Acts 20:24
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* MISSION: Desktop version */}
        <div className="hidden relative w-10/12 md:block md:-mt-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1253 215"
            fill="none"
          >
            <path
              d="M1247.75 38.678C1259.19 22.2078 1246.58 -0.194737 1226.57 1.0335L23.5133 74.8624C-1.67993 76.4084 -7.71875 110.804 15.441 120.839L208.854 204.646C224.581 211.461 241.642 214.642 258.768 213.952L1123.15 179.122C1140.69 178.415 1156.88 169.527 1166.9 155.11L1247.75 38.678Z"
              fill="#DB6645"
            />

            <foreignObject x="60" y="50" width="80%" height="90%">
              <div className="absolute top-1 left-12 text-5xl font-bold text-white font-heading rotate-[-4deg]">
                MISSION
              </div>
              <div className="absolute top-12 left-60 text-xl italic text-center text-white rotate-[-3deg]">
                To inspire the next generation to take the gospel throughout
                Asia and to the world.
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* MISSION: Mobile version */}
        <div className="relative -mt-16 w-10/12 md:hidden">
          <div className="flex absolute z-10 flex-col gap-y-8 px-20 pt-10">
            <div className="text-3xl font-bold text-white font-heading rotate-[-10deg]">
              MISSION
            </div>
            <div className="text-sm italic text-center text-white rotate-[-2deg]">
              To inspire the next generation to take the gospel throughout Asia
              and to the world.
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 393 228"
            fill="none"
            className="relative"
            width="100%"
            height="250"
            preserveAspectRatio="none"
          >
            <path
              d="M391.978 15.1524C393.54 6.89963 386.359 -0.363542 378.089 1.10532L11.9376 66.1389C2.5831 67.8004 -2.43494 78.0986 2.02124 86.4896L65.398 205.829C73.2681 220.648 89.5509 228.98 106.174 226.695L331.423 195.723C347.6 193.499 360.547 181.189 363.584 165.145L391.978 15.1524Z"
              fill="#DB6645"
            />
          </svg>
        </div>

        {/* UPCOMING MOVEMENTS */}
        <LocationCarousel />

        {/* WHAT IS ARISE?: Desktop version */}
        <div className="hidden w-full md:flex md:relative md:justify-center md:items-center md:space-x-0 md:w-11/12">
          {/* VIDEO: Why Arise Asia Today? */}
          <div className="overflow-hidden z-10 w-5/6 rounded-xl md:absolute md:left-28 md:top-32 md:w-5/12 md:h-80">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4G4fQidFXro"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="relative w-1/2 md:left-60">
            <div className="font-heading font-bold md:text-3xl lg:text-4xl absolute md:top-8 lg:top-12 left-8 rotate-[6.2deg] text-[#AA3638] text-nowrap">
              WHAT IS ARISE?
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -100 770 689"
              fill="none"
            >
              <path
                d="M2.26567 34.2574C-5.37083 17.3364 8.27214 -1.47651 26.7283 0.52476L748.163 78.7526C761.903 80.2425 771.549 93.0002 769.238 106.627L728.752 345.3C724.334 371.344 701.092 389.938 674.713 388.53L183.537 362.316C162.63 361.201 144.091 348.515 135.479 329.432L2.26567 34.2574Z"
                fill="#AA3638"
              />

              <foreignObject x="100" y="0" width="700" height="700">
                <div className="mt-20 mb-3 ml-16 w-8/12 text-justify text-white">
                  It is almost two millennia since Jesus called His first
                  disciples to follow Him. Since that time, many followers of
                  Jesus have taken up the call to take the Gospel to the ends of
                  the earth. Now, in the 21 st century, the need for the Gospel
                  to be shared and lived out in Asia is tremendous, and God is
                  setting the hearts of people in Asia on fire for His glory and
                  purpose.{" "}
                  <span className="text-amber-300">
                    The time has come for Asia to arise and participate in God’s
                    Great Commission.
                  </span>
                </div>

                <a
                  role="button"
                  className="btn bg-[#F3966B] rounded-full border-4 border-black text-black ml-16"
                  href="https://www.goarise.org/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Learn more at goarise.org
                  <MdOpenInNew className="ml-2" size={24} />
                </a>

                <img
                  src="logo.svg"
                  alt="What is Arise? Logo"
                  className="absolute right-12 top-52 w-1/4"
                />
              </foreignObject>
            </svg>
          </div>
        </div>

        {/* WHAT IS ARISE?: Mobile version */}
        <div className="relative mt-72 mb-10 w-11/12 md:hidden">
          <div className="font-heading font-bold text-[28px] absolute -top-6 left-12 rotate-[8deg] text-[#AA3638] text-nowrap">
            WHAT IS ARISE?
          </div>

          <div className="relative">
            <div className="flex absolute z-10 flex-col sm:gap-y-20">
              <img
                src="logo.svg"
                alt="What is Arise? Logo"
                className="absolute top-28 w-20"
              />

              <p className="pt-16 pr-12 pb-3 pl-28 mx-auto text-sm text-justify text-white sm:pt-20">
                It is almost two millennia since Jesus called His first
                disciples to follow Him. Since that time, many followers of
                Jesus have taken up the call to take the Gospel to the ends of
                the earth. Now, in the 21 st century, the need for the Gospel to
                be shared and lived out in Asia is tremendous, and God is
                setting the hearts of people in Asia on fire for His glory and
                purpose.{" "}
                <span className="text-amber-300">
                  The time has come for Asia to arise and participate in God’s
                  Great Commission.
                </span>
              </p>

              {/* VIDEO: Why Arise Asia Today? */}
              <div className="overflow-hidden mx-auto w-2/3 h-40 rounded-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/4G4fQidFXro"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <a
                className="btn bg-[#F3966B] rounded-full border-4 border-black text-black mt-4 text-xs right-12 w-60 ml-auto mr-10"
                href="https://www.goarise.org/"
                rel="noreferrer noopener"
                target="_blank"
              >
                Learn more at goarise.org
                <MdOpenInNew size={20} />
              </a>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 406 579"
              fill="none"
              className="relative"
              width="100%"
              height="600"
              preserveAspectRatio="none"
            >
              <path
                d="M0.73463 18.8375C-0.164775 8.19951 8.85741 -0.620523 19.4723 0.519632L385.958 39.8844C394.532 40.8053 401.055 48.0051 401.128 56.628L405.42 564.882C405.486 572.66 399.199 579 391.42 579H84.5152C63.9226 579 46.7612 563.228 45.0263 542.709L0.73463 18.8375Z"
                fill="#AA3638"
              />
            </svg>
          </div>
        </div>
        <div className="relative bg-[#FCD369] container flex mb-20 rounded-3xl p-10 gap-10 flex-col xl:flex-row">
          <div className="absolute left-0 -top-4 w-48 h-10 bg-[#FCD369] rounded-t-xl" />
          <div>
            <p className="mb-4">Check out what happened in...</p>
            <h3 className="my-4 text-3xl font-bold uppercase font-heading">
              Arise Asia 2023
            </h3>
            <p className="mb-4">
              On July 25-29, 1844 people from all across Asia attended the first
              ever Arise Asia in Bangkok, Thailand. Praise God for all He did
              during this conference! Check out the recap page for the summary,
              moments, and program.
            </p>
            <Link
              className="right-12 mt-4 mr-10 ml-auto w-60 text-xs text-black bg-yellow-100 rounded-full border-4 border-black btn"
              href="https://www.goarise.org/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Arise Asia 2023 Recap
              <MdOpenInNew size={20} />
            </Link>
          </div>
          <div className="flex gap-4 justify-center">
            <img
              src="/images/DAY1_WORSHIP.jpg"
              className="object-cover rounded-xl max-w-96 aspect-[16/9]"
            />
            <img
              src="/images/DAY2_Workshops.jpg"
              className="rounded-xl max-w-96"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HomePage;
