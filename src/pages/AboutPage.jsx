import AboutArise from "../components/AboutArise";

const AboutPage = () => (
  <div className="flex flex-col gap-y-10 pt-60 pb-10 bg-red-50">
    <h1 className="text-center text-red-700 uppercase text-h1">About Us</h1>
    <div className="px-4 mx-auto w-full max-w-screen-lg">
      <img
        alt="Image of Arise Asia 2023"
        className="object-cover rounded-3xl aspect-video"
        src="/about/about-us.png"
      />
    </div>

    <div className="container px-4">
      <h2 className="text-center text-red-700 uppercase text-h2">
        About Arise Asia
      </h2>
      <div className="mx-auto text-center text-black sm:font-bold prose prose-sm sm:prose-base">
        <p>
          It started off with a question. We asked ourselves, &ldquo; What would
          it be like if we can see God ignite the hearts of this younger
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
          When we think about the five regions of Asia (East, Southeast, South,
          Central, and Western), we are reminded of the enormous need for a
          Gospel proclamation and witness. Not only is 60% of the world&apos;s
          population in this region, but the majority of the unengaged and
          unreached people groups who have yet to hear the Gospel, are in this
          region.
        </p>
        <p>
          It is almost two millennia since Jesus called His first disciples to
          follow Him. Since that time, many followers of Jesus have taken up the
          call to take the Gospel to the ends of the earth. Now, in the 21 st
          century, the need for the Gospel to be shared and lived out in Asia is
          tremendous, and God is setting the hearts of people in Asia on fire
          for His glory and purpose. The time has come for Asia to arise and
          participate in God&apos;s Great Commission.
        </p>
        <p>
          We invite you to join us in this historic movement with thousands of
          young people from Asia who want to live for the purposes of God in
          this generation!
        </p>
      </div>
    </div>

    <div className="container px-4">
      <AboutArise />
    </div>

    <svg
      className="-mb-10 w-full h-10 text-red-100 bg-red-50 sm:h-20"
      preserveAspectRatio="none"
      viewBox="0 0 20 2"
    >
      <path className="fill-current" d="M0 1Q6 3 12 1 18-1 20 2L0 2Z" />
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
      className="-mt-10 w-full h-10 text-red-50 bg-red-100 sm:h-20"
      preserveAspectRatio="none"
      viewBox="0 0 20 2"
    >
      <path className="fill-current" d="M0 2Q6-1 12 1 18 3 20 1L20 2Z" />
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
