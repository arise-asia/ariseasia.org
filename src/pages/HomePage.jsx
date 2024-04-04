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
    {/* VERSE & MISSION */}
    <div className="bg-white">
      <div className="grid place-items-center gap-10">
        <div className="absolute -bottom-10 bg-[#C26CB9] rounded-xl w-4/5">
          <div className="px-20 py-5 text-center text-white">
            However, I consider my life worth nothing to me; my only aim is to
            finish the race and complete the task the Lord Jesus has given
            me—the task of testifying to the good news of God’s grace.
          </div>
          <div className="pb-5 text-center text-white">Acts 20:24</div>
        </div>

        <div className="relative bg-[#DB6645] rounded-xl w-4/5 mt-20">
          <div className="absolute text-white text-3xl font-bold font-heading">
            MISSION
          </div>
          <div className="p-20 py-8 text-center text-white">
            To inspire the next generation to take the gospel throughout Asia
            and to the world.
          </div>
        </div>

        {/* UPCOMING MOVEMENTS */}
        <div className="relative bg-[#406E7D] rounded-xl w-2/5 p-10">
          <div className="text-white text-3xl text-left font-bold font-heading leading-10">
            UPCOMING
            <br />
            MOVEMENTS
          </div>

          <div className="text-white mt-3 mb-12">
            Check out where Arise Asia is heading to next!
          </div>

          <div className="bg-[#B3ECFF] rounded-full py-2 px-4 inline-block text-center font-bold border-4 border-black">
            Click to find out more
          </div>

          {/* TO-DO: Carousel */}
          <div></div>
        </div>

        {/* WHAT IS ARISE? */}
        <div className="flex space-x-0">
          {/* VIDEO: Why Arise Asia Today? */}
          <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
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

          <div className="bg-[#AA3638] rounded-xl w-1/2 p-10">
            <div className="text-white mb-5">
              It is almost two millennia since Jesus called His first disciples
              to follow Him. Since that time, many followers of Jesus have taken
              up the call to take the Gospel to the ends of the earth. Now, in
              the 21 st century, the need for the Gospel to be shared and lived
              out in Asia is tremendous, and God is setting the hearts of people
              in Asia on fire for His glory and purpose.{' '}
              <span className="text-amber-300">
                The time has come for Asia to arise and participate in God’s
                Great Commission.
              </span>
            </div>

            <div className="bg-[#F3966B] rounded-full py-2 px-4 inline-block text-center font-bold border-4 border-black">
              Learn more at goarise.org
            </div>
          </div>
        </div>
      </div>

      {/* RECAP 2023 */}
      <div className="bg-[#FCD369] px-20 py-10 rounded-tl-[80px] mt-10">
        <div className="flex space-x-1">
          {/* left side section beside video */}
          <div>
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
              <div className="flex-grow"></div>
              <div className="flex justify-end">
                <div className="bg-[#202020] rounded-full px-4 py-2 inline-block text-center font-bold mt-3">
                  Conference Program
                </div>
              </div>

              {/* bottom left corner */}
              <div className="absolute -left-9 bottom-0 w-20 h-12 bg-[#FCD369] transform rotate-[35deg] origin-bottom-left" />
            </div>
          </div>

          {/* VIDEO: The Summary */}
          <div className="relative aspect-w-16 aspect-h-9">
            <iframe
              width="800"
              height="475"
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

        <div className="grid"></div>
      </div>
    </div>
  </>
);

export default HomePage;
