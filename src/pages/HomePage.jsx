import { MdOutlineNotificationsActive, MdOpenInNew } from 'react-icons/md';

const HomePage = () => (
  <>
    {/* Header */}
    <div className="px-10 pt-80 bg-center bg-no-repeat bg-cover bg-[url('home.gif')]">
      <h1 className="text-6xl font-bold text-center text-orange-500 uppercase sm:text-7xl font-heading">
        Arise Asia
      </h1>
      <p className="pt-2 pb-80 text-xl text-center text-white font-heading">
        Go to where there is no Gospel
      </p>
    </div>

    {/* Body */}
    <div className="bg-white">
      <div className="grid place-items-center gap-10">
        {/* VERSE */}
        <div className="w-11/12 absolute -bottom-40">
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
              <div className="text-white text-xl italic font-bold flex justify-center items-center text-center rotate-[2deg] mt-4">
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

        {/* MISSION */}
        <div className="w-10/12 relative mt-28">
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
              <div className="absolute top-1 left-12 text-white text-5xl font-bold font-heading rotate-[-4deg]">
                MISSION
              </div>
              <div className="absolute top-12 left-60 text-center text-white text-xl italic rotate-[-3deg]">
                To inspire the next generation to take the gospel throughout
                Asia and to the world.
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* UPCOMING MOVEMENTS */}
        <div className="relative bg-[#406E7D] rounded-xl w-2/5 p-10">
          <div className="text-white text-4xl text-left font-bold font-heading leading-10">
            UPCOMING
            <br />
            MOVEMENTS
          </div>

          <div className="text-white mt-3 mb-12">
            Check out where Arise Asia is heading to next!
          </div>

          <a href="/movements">
            <div className="bg-[#B3ECFF] rounded-full py-2 px-4 inline-block text-center font-bold border-4 border-black">
              <div className="flex items-center">
                Click to find out more
                <MdOutlineNotificationsActive className="ml-2" size={24} />
              </div>
            </div>
          </a>

          {/* TO-DO: location carousel */}
          <div></div>
        </div>

        {/* WHAT IS ARISE? */}
        {/* TO-DO: title and weird shape for arise definition */}
        <div className="flex space-x-0 items-center justify-center w-11/12 relative">
          {/* VIDEO: Why Arise Asia Today? */}
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden absolute top-32 left-28 z-10">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-3ZE1rq-M8E?si=pfRxSmiCMF-PKCCg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>

          <div className="w-1/2 relative absolute left-60">
            <div className="font-heading font-bold text-5xl absolute top-20 left-28 rotate-[6.2deg] text-[#AA3638]">
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
                <div className="text-white text-justify mb-3 mt-20 ml-16 w-8/12">
                  It is almost two millennia since Jesus called His first
                  disciples to follow Him. Since that time, many followers of
                  Jesus have taken up the call to take the Gospel to the ends of
                  the earth. Now, in the 21 st century, the need for the Gospel
                  to be shared and lived out in Asia is tremendous, and God is
                  setting the hearts of people in Asia on fire for His glory and
                  purpose.{' '}
                  <span className="text-amber-300">
                    The time has come for Asia to arise and participate in God’s
                    Great Commission.
                  </span>
                </div>

                <a
                  href="https://www.goarise.org/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <div className="bg-[#F3966B] rounded-full py-2 px-4 inline-block text-center font-bold border-4 border-black ml-16">
                    <div className="flex items-center">
                      Learn more at goarise.org
                      <MdOpenInNew className="ml-2" size={24} />
                    </div>
                  </div>
                </a>

                <img
                  src="logo.svg"
                  alt="What is Arise? Logo"
                  className="absolute top-52 right-12 w-1/4"
                />
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>

      {/* RECAP 2023 */}
      <div className="bg-[#FCD369] px-20 py-10 rounded-tl-[80px]">
        <div className="flex space-x-1">
          {/* left side section beside video */}
          <div className="w-3/4">
            {/* TITLE */}
            <div className="italic text-lg mb-2">LOOKING BACK ON...</div>
            <div className="font-heading font-bold text-5xl leading-[3rem]">
              ARISE ASIA
              <br />
              2023
            </div>
            <div className="flex space-x-3 mt-4">
              <div className="bg-[#406E7D] py-2 px-4 rounded-md text-white inline-block">
                Thailand
              </div>
              <div className="bg-[#406E7D] py-2 px-5 rounded-md text-white inline-block">
                July 25-29, 2023
              </div>
            </div>

            {/* THE RECAP */}
            <div className="font-heading font-bold text-2xl mt-8 mb-3">
              THE RECAP
            </div>
            <div className="relative bg-[#B28000] p-5 w-11/12 text-white">
              <p>
                On July 25-29, 1844 people from all across Asia attended the
                first ever Arise Asia in Bangkok, Thailand. Praise God for all
                He did during this conference. Check out the recap video about
                Arise Asia 2023.
              </p>

              {/* move button to the right with flex */}
              <a
                href="https://drive.google.com/drive/u/0/folders/143Cu9OPjMmVmwMI9sg4qt42Dj2Z7E2BA"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className="flex-grow"></div>
                <div className="flex justify-end">
                  <div className="bg-[#202020] rounded-full px-4 py-2 inline-block text-center font-bold mt-3">
                    <div className="flex items-center">
                      Conference Program
                      <MdOpenInNew className="ml-2" size={24} />
                    </div>
                  </div>
                </div>
              </a>

              {/* bottom left corner */}
              <div className="absolute -left-9 bottom-0 w-20 h-12 bg-[#FCD369] transform rotate-[35deg] origin-bottom-left" />
            </div>
          </div>

          {/* VIDEO: The Summary */}
          <div className="relative aspect-w-16 aspect-h-9 w-screen rounded-xl overflow-hidden">
            <iframe
              // width="800"
              // height="475"
              className="w-full h-full"
              src="https://www.youtube.com/embed/-V6a5qnJI5Q?si=ATfa8gW3vb6OOwHZ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </div>

        {/* THE SUMMARY */}
        <div className="font-heading font-bold text-2xl mt-12 mb-3">
          THE SUMMARY
        </div>

        <div className="grid grid-rows-6 grid-flow-col gap-4 text-white">
          {/* 1st column */}
          <div className="relative rounded-3xl bg-[#DB6645] row-span-3 flex flex-col justify-center items-center text-center aspect-w-1 aspect-h-1">
            <p className="font-heading font-bold text-4xl">37</p> countries
            across Asia
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

          <div className="relative rounded-3xl bg-[#DB6645] row-span-3 text-center flex flex-col justify-center items-center text-center aspect-w-1 aspect-h-1">
            <p className="font-heading font-bold text-4xl">1844</p> Arise Asia
            2023 attendees
            {/* wave line */}
            <div className="absolute -right-2 bottom-0">
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
          <div className="relative rounded-3xl bg-[#A04C34] row-span-2 flex justify-center items-center py-2 px-5">
            <p className="font-heading font-bold text-4xl mr-3">17</p> plenary
            <br />
            speakers
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

          <div className="rounded-3xl bg-[#A04C34] row-span-2 flex justify-center items-center py-2 px-5">
            <p className="font-heading font-bold text-4xl mr-3">9</p> speakers
          </div>

          <div className="relative rounded-3xl bg-[#A04C34] row-span-2 flex justify-center items-center py-2 px-5">
            <p className="font-heading font-bold text-4xl mr-3">60</p> workshop
            <br />
            speakers
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
            <div className="absolute -bottom-1 -right-1">
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
          <div className="relative rounded-3xl bg-[#A34D4D] row-span-2 flex justify-center items-center py-2 px-5">
            <p className="font-heading font-bold text-4xl mr-3">14</p>
            language
            <br />
            translations
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

          <div className="relative rounded-3xl bg-[#A34D4D] row-span-2 flex justify-center items-center py-2 px-5">
            <p className="font-heading font-bold text-4xl mr-3">40</p>
            sponsoring &<br />
            endorsing partners
            {/* wave line */}
            <div className="absolute -bottom-2 -right-2">
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

          <div className="relative rounded-3xl bg-[#A34D4D] row-span-2 flex justify-center items-center py-2 px-5">
            <p className="font-heading font-bold text-4xl mr-3">90</p>
            international &<br />
            local volunteers
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
          <div className="rounded-3xl bg-[#EBD7FF] row-span-3 text-black flex flex-col justify-center items-center text-center p-3">
            <span>Responding to Arise Asia</span>
            <img
              src="respond-aa2023.svg"
              alt="Respond-AA2023"
              className="mt-auto mb-auto"
            />
          </div>
          <div className="rounded-3xl bg-[#9045DB] row-span-3 p-3">
            <p className="font-heading font-bold text-4xl">499</p> Praying for 3
            people to come to know Christ
          </div>

          {/* 5th column */}
          <div className="rounded-3xl bg-[#9045DB] row-span-3 p-3">
            <p className="font-heading font-bold text-4xl">402</p> Pledged at
            least 1 year to a missions internship
          </div>
          <div className="rounded-3xl bg-[#9045DB] row-span-3 p-3">
            <p className="font-heading font-bold text-4xl">229</p> Committed for
            long-term cross-cultural mission
          </div>

          {/* 6th column */}
          <div className="rounded-3xl bg-[#9045DB] row-span-3 p-3">
            <p className="font-heading font-bold text-4xl">462</p> To partner
            with 2 people for missions work
          </div>
          <div className="rounded-3xl bg-[#9045DB] row-span-3 p-3">
            <p className="font-heading font-bold text-4xl">169</p> Applied for
            1-2 years to do missions internship
          </div>
        </div>

        {/* THE MOMENTS */}
        <div className="font-heading font-bold text-2xl mt-12 mb-3">
          THE MOMENTS
        </div>

        {/* TO-DO: image carousel */}
      </div>
    </div>
  </>
);

export default HomePage;
