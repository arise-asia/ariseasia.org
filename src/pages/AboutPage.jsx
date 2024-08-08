import { MdOpenInNew } from "react-icons/md";

const AboutPage = () => (
  <div className="flex flex-col pt-60 bg-red-50">
    <h1 className="text-center text-red-700 uppercase text-h1">About Us</h1>

    <div className="relative px-4 mx-auto mt-10 w-full max-w-screen-lg sm:mt-20">
      <img
        alt="Image of Arise Asia 2023"
        className="object-cover rounded-xl aspect-video"
        src="/about/about-us.jpg"
      />
    </div>

    <div className="container px-4 my-10">
      <h2 className="text-center text-red-700 uppercase translate-y-4 sm:translate-y-6 text-h2">
        What Is Arise Asia?
      </h2>
      <div className="relative p-10 mx-auto bg-red-700 rounded-3xl w-fit">
        <img
          src="/logo.svg"
          alt="What is Arise? logo"
          className="hidden absolute bottom-2 right-8 w-12 sm:block xl:right-6 xl:-bottom-16 xl:w-24"
        />
        <div className="text-white prose prose-sm sm:prose-base">
          <p>
            It started off with a question. We asked ourselves, &ldquo; What
            would it be like if we can see God ignite the hearts of this younger
            generation throughout Asia to bring the Gospel where there is no
            Gospel witness in Asia and beyond?&rdquo;
          </p>
          <p>
            It is almost two millennia since Jesus called His first disciples to
            follow Him. Since that time, many followers of Jesus have taken up
            the call to take the Gospel to the ends of the earth. Now, in the 21
            st century, the need for the Gospel to be shared and lived out in
            Asia is tremendous, and God is setting the hearts of people in Asia
            on fire for His glory and purpose.{" "}
            <span className="text-amber-300">
              The time has come for Asia to arise and participate in God’s Great
              Commission.
            </span>
          </p>
          <p>
            We invite you to join us in this historic movement with thousands of
            young people from Asia who want to live for the purposes of God in
            this generation!
          </p>
        </div>
        <a
          className="flex gap-x-2 items-center py-2 px-4 mt-6 text-sm font-bold bg-red-100 rounded-full border-4 border-black sm:text-base hover:bg-red-50 w-fit"
          href="https://goarise.org"
          rel="noreferrer noopener"
          target="_blank"
        >
          Learn more at goarise.org <MdOpenInNew size={20} />
        </a>
      </div>
    </div>

    <svg
      className="h-6 text-red-50 bg-red-100 sm:h-10"
      preserveAspectRatio="none"
      viewBox="0 0 4 2"
    >
      <path className="fill-current" d="M0 0H4V1Q3 3 2 1 1-1 0 1Z" />
    </svg>

    <div className="py-10 px-4 bg-red-100">
      <div className="container flex flex-col gap-y-10">
        <h2 className="text-center text-red-700 uppercase text-h2">
          Our Leaders
        </h2>
        <div className="flex flex-col gap-10 justify-center items-center lg:flex-row lg:items-end">
          <img
            className="w-full rounded-xl shadow max-w-64 aspect-square md:max-w-80"
            src="/about/david.jpg"
          />
          <div>
            <h3 className="text-red-700 uppercase text-h3">David Ro</h3>
            <p className="text-red-900 text-h5">
              Cofounder and Executive Director
            </p>
            <p className="italic font-bold text-red-900 text-p">
              Regional Director for East Asia, Lausanne Movement
            </p>
            <p className="mt-6 prose prose-sm sm:prose-base">
              My challenge to this generation: You have one life. The one
              challenge, find a people &quot;where Christ is not known&quot; and
              boldly go to &quot;where there is no gospel&quot; and lay down
              your life for another people in the footsteps of our Lord Jesus
              Christ.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center lg:flex-row-reverse lg:items-end">
          <img
            className="w-full rounded-xl shadow max-w-64 aspect-square md:max-w-80"
            src="/about/seth.jpg"
          />
          <div>
            <h3 className="text-red-700 uppercase text-h3">Seth Kim</h3>
            <p className="text-red-900 text-h5">Cofounder and Vice President</p>
            <p className="italic font-bold text-red-900 text-p">
              Lead Pastor, Harvest Mission Community Church
            </p>
            <p className="mt-6 prose prose-sm sm:prose-base">
              Throughout history God has used different generations to fulfill
              His purposes. We are on the precipice of God doing something great
              with this generation. My hope and prayer is that we will see a
              generation who is transformed by the Gospel and who will then
              proclaim the Gospel to transform the world. May we &quot;risk it
              all for the One who gave His all&quot; so that we will see every
              nation, tribe, people, and language worshiping the King of Kings
              and Lord of Lords.
            </p>
          </div>
        </div>
      </div>
    </div>

    <svg
      className="h-6 text-red-100 bg-red-50 sm:h-10"
      preserveAspectRatio="none"
      viewBox="0 0 4 2"
    >
      <path className="fill-current" d="M0 0H4V1Q3-1 2 1 1 3 0 1Z" />
    </svg>

    <div className="py-10 px-4 bg-red-50">
      <div className="container flex flex-col gap-y-10">
        <h2 className="text-center text-red-700 uppercase text-h2">
          Learn More
        </h2>
        <div className="flex flex-col gap-10 justify-center items-center lg:flex-row">
          <div className="flex flex-col gap-y-4 w-full max-w-screen-sm">
            <div className="py-4 px-10 bg-red-700 rounded-xl">
              <h3 className="text-center text-white text-h4">
                What is Arise Asia
              </h3>
            </div>
            <iframe
              allowFullScreen
              className="w-full rounded-xl aspect-video"
              src="https://www.youtube.com/embed/GwPLi5IUdkI"
              title="YouTube video explaining the Arise movement"
            />
          </div>
          <div className="flex flex-col gap-y-4 w-full max-w-screen-sm">
            <div className="py-4 px-10 bg-red-700 rounded-xl">
              <h3 className="text-center text-white text-h4">
                Arise Asia Movement
              </h3>
            </div>
            <iframe
              allowFullScreen
              className="w-full rounded-xl aspect-video"
              src="https://www.youtube.com/embed/4G4fQidFXro"
              title="YouTube video explaining the Arise movement"
            />
          </div>
        </div>
      </div>
    </div>

    <svg
      className="h-6 text-red-50 bg-red-100 sm:h-10"
      preserveAspectRatio="none"
      viewBox="0 0 4 2"
    >
      <path className="fill-current" d="M0 0H4V1Q3 3 2 1 1-1 0 1Z" />
    </svg>

    <div className="py-10 px-4 bg-red-100">
      <div className="container flex flex-col gap-y-10 items-center">
        <h2 className="text-center text-red-700 uppercase text-h2">
          Endorsing Partners
        </h2>
        <img
          alt="Logos of the endorsing partners of Arise Asia"
          className="w-full md:hidden"
          src="/about/endorsing-partners-sm.png"
        />
        <img
          alt="Logos of the endorsing partners of Arise Asia"
          className="hidden w-full max-w-screen-xl md:block"
          src="/about/endorsing-partners.png"
        />
        <div className="text-center prose prose-sm sm:prose-base">
          <p>
            A3 (formerly Asian Access), Asia Evangelical Alliance (AEA), Asia
            Theological Association (ATA), Campus Crusade for Christ (Cru),
            Chinese Coordination Centre of World Evangelism (CCCOWE), Gather25,
            Global Mission Mobilization Initiative (GMMI), HK Association of
            Christian Missions (HKACM), India Missions Association,
            International Fellowship of Evangelical Students (IFES),
            InterVarsity, Korea World Mission Association (KWMA), Lausanne
            Movement, Movement Day, Navigators, Perspectives Global, Philippine
            Missions Association (PMA), REAH International, Radical, Send
            International, Singapore Centre for Global Missions (SCGM), SIM
            Pacific Asia, The Evangelical Alliance Mission (TEAM), The
            Evangelical Fellowship of Thailand (EFT), Worldwide Evangelization
            for Christ (WEC), World Evangelical Alliance (WEA), Youth for Christ
            (YFC).
          </p>
        </div>
      </div>
    </div>

    <svg
      className="h-6 text-red-100 bg-red-50 sm:h-10"
      preserveAspectRatio="none"
      viewBox="0 0 4 2"
    >
      <path className="fill-current" d="M0 0H4V1Q3-1 2 1 1 3 0 1Z" />
    </svg>

    <div className="py-10 px-4 bg-red-50">
      <div className="container flex flex-col gap-y-10 items-center">
        <h2 className="text-center text-red-700 uppercase text-h2">
          Sponsoring Partners
        </h2>
        <img
          alt="Logos of the sponsoring partners of Arise Asia"
          className="w-full md:hidden"
          src="/about/sponsoring-partners-sm.png"
        />
        <img
          alt="Logos of the sponsoring partners of Arise Asia"
          className="hidden w-full max-w-screen-xl md:block"
          src="/about/sponsoring-partners.png"
        />
        <div className="text-center prose prose-sm sm:prose-base">
          <p>
            China Evangelical Seminary, Every Nation, Frontiers, Interserve,
            International Mission Board (IMB), Kids International Ministries
            (KIDSIM), One Hope, OMF International, Operation Mobilisation (OM),
            Pioneers, Radius Asia, Serving in Mission (SIM), Singapore Bible
            College, SIL International, Wheaton College, Worldwide
            Evangelization for Christ (WEC), Wycliffe Global Alliance, Youth
            Leaders Summit.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
