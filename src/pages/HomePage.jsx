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
        {/* TO-DO: weird shapes for verse, mission*/}
        {/* VERSE */}
        <div className="absolute -bottom-10 bg-[#C26CB9] rounded-xl w-4/5 h-40">
          <div className="text-center text-white text-xl italic">
            <p className="mt-8 mb-6">
              However, I consider my life worth nothing to me; my only aim is to
              finish the race and complete the task the Lord Jesus has given
              me—the task of testifying to the good news of God’s grace.
            </p>
            <p>Acts 20:24</p>
          </div>
        </div>

        <div className="relative bg-[#DB6645] rounded-xl w-4/5 mt-20">
          <div className="absolute text-white text-3xl font-bold font-heading">
            MISSION
          </div>
          <div className="p-20 py-8 text-center text-white text-xl italic">
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

          {/* TO-DO: location carousel */}
          <div></div>
        </div>

        {/* WHAT IS ARISE? */}
        {/* TO-DO: title and weird shape for arise definition */}
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

        <div className="grid grid-rows-6 grid-flow-col gap-4 text-white">
          {/* 1st column */}
          <div className="rounded-3xl bg-[#DB6645] row-span-3 flex flex-col justify-center items-center text-center">
            <p className="font-heading font-bold text-3xl">37</p> countries
            across Asia
          </div>
          <div className="rounded-3xl bg-[#DB6645] row-span-3 text-center flex flex-col justify-center items-center text-center">
            <p className="font-heading font-bold text-3xl">1844</p> Arise Asia
            2023 attendees
          </div>

          {/* 2nd column */}
          <div className="rounded-3xl bg-[#A04C34] row-span-2 flex justify-center items-center p-3">
            <p className="font-heading font-bold text-3xl mr-3">17</p> plenary
            <br />
            speakers
          </div>
          <div className="rounded-3xl bg-[#A04C34] row-span-2 flex justify-center items-center p-3">
            <p className="font-heading font-bold text-3xl mr-3">9</p> speakers
          </div>
          <div className="rounded-3xl bg-[#A04C34] row-span-2 flex justify-center items-center p-3">
            <p className="font-heading font-bold text-3xl mr-3">60</p> workshop
            <br />
            speakers
          </div>

          {/* 3rd column */}
          <div className="rounded-3xl bg-[#A34D4D] row-span-2 flex justify-center items-center p-3">
            <p className="font-heading font-bold text-3xl mr-3">14</p> language
            translations
          </div>
          <div className="rounded-3xl bg-[#A34D4D] row-span-2 flex justify-center items-center p-3">
            <p className="font-heading font-bold text-3xl mr-3">40</p>{' '}
            sponsoring &<br />
            endorsing partners
          </div>
          <div className="rounded-3xl bg-[#A34D4D] row-span-2 flex justify-center items-center p-3">
            <p className="font-heading font-bold text-3xl mr-3">90</p>{' '}
            international &<br />
            local volunteers
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
            <p className="font-heading font-bold text-3xl">499</p> Praying for 3
            people to come to know Christ
          </div>

          {/* 5th column */}
          <div className="rounded-3xl bg-[#9045DB] row-span-3 p-3">
            <p className="font-heading font-bold text-3xl">402</p> Pledged at
            least 1 year to a missions internship
          </div>
          <div className="rounded-3xl bg-[#9045DB] row-span-3 p-3">
            <p className="font-heading font-bold text-3xl">229</p> Committed for
            long-term cross-cultural mission
          </div>

          {/* 6th column */}
          <div className="rounded-3xl bg-[#9045DB] row-span-3 p-3">
            <p className="font-heading font-bold text-3xl">462</p> To partner
            with 2 people for missions work
          </div>
          <div className="rounded-3xl bg-[#9045DB] row-span-3 p-3">
            <p className="font-heading font-bold text-3xl">169</p> Applied for
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
