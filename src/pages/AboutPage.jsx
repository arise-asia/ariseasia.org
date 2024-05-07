import aboutUsImg from '../../public/about-us.png';
import partnersImg from '../../public/partners.png';

const AboutPage = () => (
  <>
    <div className="px-10 pt-60 pb-10 bg-red-50">
      <div className="container">
        <h1 className="text-4xl font-bold text-center text-red-700 uppercase sm:text-5xl md:text-7xl font-heading">
          About Us
        </h1>
        <div className="py-8 sm:p-12 xl:py-5 xl:px-60">
          <img alt="About Us" className="rounded-3xl" src={aboutUsImg} />
        </div>
        <div className="mx-auto font-bold text-center text-black prose">
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
            We invite you to join us in this historic gathering of young people
            to worship Jesus, hear God&apos;s voice, experiencing community, and
            to journey with thousands of young people from Asia who want to live
            for the purposes of God in this generation!
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
    <div className="py-10 px-56 bg-red-100">
      <div className="container flex flex-col items-center xl:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-center text-red-700 uppercase md:text-4xl font-heading">
            Endorsing Partners
          </h2>
          <img
            alt="Endorsing Partners"
            className="p-10 mx-auto max-w-md rounded"
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
    <div className="py-10 px-56 bg-red-50">
      <div className="container flex flex-col items-center xl:flex-row-reverse">
        <div>
          <h2 className="text-2xl font-bold text-center text-red-700 uppercase md:text-4xl font-heading">
            Sponsoring Partners
          </h2>
          <img
            alt="Sponsoring Partners"
            className="p-10 mx-auto max-w-md rounded"
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
