import { MdOpenInNew } from "react-icons/md";
import aboutUsImg from "../../public/about-us.png";
import partnersImg from "../../public/partners.png";

const AboutPage = () => (
  <>
    <div className="px-10 pt-60 pb-10 bg-red-50">
      <div className="container">
        <h1 className="text-4xl font-bold text-center text-red-700 uppercase sm:text-5xl md:text-7xl font-heading">
          About Us
        </h1>

        {/* WHAT IS ARISE?: Desktop version */}
        <div className="hidden w-full md:flex md:relative md:justify-center md:items-center md:space-x-0 md:w-11/12 mx-auto mt-8">
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
        <div className="py-8 sm:p-12 xl:py-5 xl:px-60">
          <img alt="About Us" className="rounded-3xl" src={aboutUsImg} />
        </div>
          <h2 className="text-2xl font-bold text-center text-red-700 uppercase md:text-4xl font-heading my-6">
          About Arise Asia
          </h2>
        <div className="mx-auto font-bold text-center text-black prose mt-8">
          <p>
            It started off with a question. We asked ourselves, &ldquo; What
            would it be like if we can see God ignite the hearts of this younger
            generation throughout Asia to bring the Gospel where there is no
            Gospel witness in Asia and beyond?&rdquo;
          </p>
          <p>
            This question then led to a dream of seeing many young Asians
            surrendering their lives to answer God&apos;s call to go and make
            disciples of all nations. We believe that this dream is possible
            because we have a God that does impossible things.
          </p>
          <p>
            When we think about the five regions of Asia (East, Southeast,
            South, Central, and Western), we are reminded of the enormous need
            for a Gospel proclamation and witness. Not only is 60% of the
            world&apos;s population in this region, but the majority of the
            unengaged and unreached people groups who have yet to hear the
            Gospel, are in this region.
          </p>
          <p>
            It is almost two millennia since Jesus called His first disciples to
            follow Him. Since that time, many followers of Jesus have taken up
            the call to take the Gospel to the ends of the earth. Now, in the 21
            st century, the need for the Gospel to be shared and lived out in
            Asia is tremendous, and God is setting the hearts of people in Asia
            on fire for His glory and purpose. The time has come for Asia to
            arise and participate in God&apos;s Great Commission.
          </p>
          <p>
            We invite you to join us in this historic movement with thousands of
            young people from Asia who want to live for the purposes of God in
            this generation!
          </p>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 200 10" className="text-red-100 bg-red-50">
      <path
        className="fill-current"
        d="M0,5 C40,9 60,11 110,5 C140,2 160,-3 200,8 L200,10 L0,10 Z"
      />
    </svg>

    <div className="py-10 px-10 bg-red-100 md:px-56">
      <div className="container flex flex-col items-center xl:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-center text-red-700 uppercase md:text-4xl font-heading">
            Endorsing Partners
          </h2>
          <img
            alt="Endorsing Partners"
            className="py-10 px-20 mx-auto max-w-md rounded md:p-10"
            src={partnersImg}
          />
        </div>
        <p className="px-10">
          One Hope, Operation Mobilisation (OM), OMF International, Radius Asia,
          Singapore Bible College, Kids International Ministries (KIDSIM),
          Wycliffe Global Alliance, SIL International, Interserve, Youth Leaders
          Summit, Frontiers, International Mission Board (IMB), Pioneers, Kids
          International Ministries (KIDSIM), China Evangelical Seminary, Every
          Nation, Wheaton College, Frontiers, Serving in Mission (SIM),
          Worldwide Evangelization for Christ (WEC).
        </p>
      </div>
    </div>
    <svg viewBox="0 0 200 10" className="text-red-50 bg-red-100">
      <path
        className="fill-current"
        d="M0,5 C40,9 60,11 110,5 C140,2 160,-3 200,8 L200,10 L0,10 Z"
      />
    </svg>

    <div className="py-10 px-10 bg-red-50 md:px-56">
      <div className="container flex flex-col items-center xl:flex-row-reverse">
        <div>
          <h2 className="text-2xl font-bold text-center text-red-700 uppercase md:text-4xl font-heading">
            Sponsoring Partners
          </h2>
          <img
            alt="Sponsoring Partners"
            className="py-10 px-20 mx-auto max-w-md rounded md:p-10"
            src={partnersImg}
          />
        </div>
        <p className="px-10">
          One Hope, Operation Mobilisation (OM), OMF International, Radius Asia,
          Singapore Bible College, Kids International Ministries (KIDSIM),
          Wycliffe Global Alliance, SIL International, Interserve, Youth Leaders
          Summit, Frontiers, International Mission Board (IMB), Pioneers, Kids
          International Ministries (KIDSIM), China Evangelical Seminary, Every
          Nation, Wheaton College, Frontiers, Serving in Mission (SIM),
          Worldwide Evangelization for Christ (WEC).
        </p>
      </div>
    </div>
  </>
);

export default AboutPage;
