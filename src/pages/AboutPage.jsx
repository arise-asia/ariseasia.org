import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="flex flex-col pt-60 bg-red-50">
      <Helmet>
        <meta property="og:title" content="About Us - Arise Asia" />
        <meta property="og:url" content="https://ariseasia.org/about" />
        <meta
          property="og:description"
          content='It started off with a question. We asked ourselves, "What
              would it be like if we can see God ignite the hearts of this
              younger generation throughout Asia to bring the Gospel where there
              is no Gospel witness in Asia and beyond?"'
        />
      </Helmet>

      <h1 className="text-center text-red-700 uppercase text-h1">About Us</h1>
      <div className="container px-4 my-10">
        <h2 className="text-center text-red-700 uppercase translate-y-4 sm:translate-y-6 text-h2">
          What Is Arise Asia?
        </h2>
        <div className="relative p-10 mx-auto bg-red-700 rounded-3xl w-fit">
          <img
            alt="What is Arise? logo"
            className="hidden absolute right-4 -bottom-10 w-14 md:block"
            src="/logo.svg"
          />
          <div className="text-white prose prose-sm sm:prose-base">
            <p>
              It started off with a question. We asked ourselves, &ldquo;What
              would it be like if we can see God ignite the hearts of this
              younger generation throughout Asia to bring the Gospel where there
              is no Gospel witness in Asia and beyond?&rdquo;
            </p>
            <p>
              It is almost two millennia since Jesus called His first disciples
              to follow Him. Since that time, many followers of Jesus have taken
              up the call to take the Gospel to the ends of the earth. Now, in
              the 21 st century, the need for the Gospel to be shared and lived
              out in Asia is tremendous, and God is setting the hearts of people
              in Asia on fire for His glory and purpose.{" "}
              <span className="text-amber-300">
                The time has come for Asia to arise and participate in God’s
                Great Commission.
              </span>
            </p>
            <p>
              We invite you to join us in this historic movement with thousands
              of young people from Asia who want to live for the purposes of God
              in this generation!
            </p>
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

      <div className="flex flex-col gap-y-32 py-10 px-4 bg-red-100">
        <div className="container flex flex-col gap-y-10">
          <h2 className="text-center text-red-700 uppercase text-h2">
            Our Leaders
          </h2>
          <div className="flex flex-col gap-10 justify-center items-center lg:flex-row lg:items-end">
            <img
              alt="David Ro"
              className="w-full rounded-xl shadow max-w-64 aspect-square md:max-w-80"
              src="/about/david.jpg"
            />
            <div>
              <h3 className="text-red-700 uppercase text-h3">David Ro</h3>
              <p className="text-red-900 text-h5">
                Co-founder and Executive Director
              </p>
              <p className="italic font-bold text-red-900 text-p">
                Regional Director for East Asia, Lausanne Movement
              </p>
              <div className="relative py-8 px-10 mt-6 max-w-screen-sm bg-red-200 rounded-xl">
                <p className="italic text-justify text-red-900 text-p">
                  My challenge to this generation: You have one life. The one
                  challenge, find a people &quot;where Christ is not known&quot;
                  and boldly go to &quot;where there is no gospel&quot; and lay
                  down your life for another people in the footsteps of our Lord
                  Jesus Christ.
                </p>
                <span className="absolute top-0 left-0 text-8xl font-bold text-red-700 translate-x-1/4 -translate-y-6 font-heading">
                  &ldquo;
                </span>
                <span className="absolute right-0 bottom-0 text-8xl font-bold text-red-700 -translate-x-1/4 translate-y-16 font-heading">
                  &rdquo;
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center lg:flex-row-reverse lg:items-end">
            <img
              alt="Seth Kim"
              className="w-full rounded-xl shadow max-w-64 aspect-square md:max-w-80"
              src="/about/seth.jpg"
            />
            <div>
              <h3 className="text-red-700 uppercase text-h3">Seth Kim</h3>
              <p className="text-red-900 text-h5">
                Co-founder and Vice President
              </p>
              <p className="italic font-bold text-red-900 text-p">
                Lead Pastor, Harvest Mission Community Church
              </p>
              <div className="relative py-8 px-10 mt-6 max-w-screen-sm bg-red-200 rounded-xl">
                <p className="italic text-justify text-red-900 text-p">
                  Throughout history God has used different generations to
                  fulfill His purposes. We are on the precipice of God doing
                  something great with this generation. My hope and prayer is
                  that we will see a generation who is transformed by the Gospel
                  and who will then proclaim the Gospel to transform the world.
                  May we &quot;risk it all for the One who gave His all&quot; so
                  that we will see every nation, tribe, people, and language
                  worshiping the King of Kings and Lord of Lords.
                </p>
                <span className="absolute top-0 left-0 text-8xl font-bold text-red-700 translate-x-1/4 -translate-y-6 font-heading">
                  &ldquo;
                </span>
                <span className="absolute right-0 bottom-0 text-8xl font-bold text-red-700 -translate-x-1/4 translate-y-16 font-heading">
                  &rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-y-10 max-w-screen-lg">
          <h2 className="text-center text-red-700 uppercase xl:text-left text-h2">
            Arise Core Team
          </h2>
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="flex flex-col w-32 text-center sm:w-40">
              <div className="relative">
                <img
                  alt="Patrick Fung"
                  className="absolute rounded-full aspect-square"
                  src="/about/patrick.png"
                />
                <div className="m-2 bg-red-200 rounded-full size-28 sm:size-36" />
              </div>
              <h3 className="mt-4 text-red-700 uppercase text-h5">
                Patrick
                <br />
                Fung
              </h3>
              <p className="font-bold leading-5 text-red-900 text-p">
                Chair, Arise Board
              </p>
            </div>
            <div className="flex flex-col w-32 text-center sm:w-40">
              <div className="relative">
                <img
                  alt="Philip Chang"
                  className="absolute rounded-full aspect-square size-full"
                  src="/about/philip.png"
                />
                <div className="m-2 bg-red-200 rounded-full size-28 sm:size-36" />
              </div>
              <h3 className="mt-4 text-red-700 uppercase text-h5">
                Philip
                <br />
                Chang
              </h3>
              <p className="font-bold leading-5 text-red-900 text-p">
                Board Member
              </p>
            </div>
            <div className="flex flex-col w-32 text-center sm:w-40">
              <div className="relative">
                <img
                  alt="Jun Escosar"
                  className="absolute rounded-full aspect-square"
                  src="/about/jun.png"
                />
                <div className="m-2 bg-red-200 rounded-full size-28 sm:size-36" />
              </div>
              <h3 className="mt-4 text-red-700 uppercase text-h5">
                Jun
                <br />
                Escosar
              </h3>
              <p className="font-bold leading-5 text-red-900 text-p">
                Board Member
              </p>
            </div>
            <div className="flex flex-col w-32 text-center sm:w-40">
              <div className="relative">
                <img
                  alt="Jackie Ro"
                  className="absolute rounded-full aspect-square size-full"
                  src="/about/jackie.png"
                />
                <div className="m-2 bg-red-200 rounded-full size-28 sm:size-36" />
              </div>
              <h3 className="mt-4 text-red-700 uppercase text-h5">
                Jackie
                <br />
                Ro
              </h3>
              <p className="font-bold leading-5 text-red-900 text-p">
                Core Member
              </p>
            </div>
            <div className="flex flex-col w-32 text-center sm:w-40">
              <div className="relative">
                <img
                  alt="Joanna Jing"
                  className="absolute rounded-full aspect-square"
                  src="/about/joanna.png"
                />
                <div className="m-2 bg-red-200 rounded-full size-28 sm:size-36" />
              </div>
              <h3 className="mt-4 text-red-700 uppercase text-h5">
                Joanna
                <br />
                Jing
              </h3>
              <p className="font-bold leading-5 text-red-900 text-p">
                Director of Events
              </p>
            </div>
            <div className="flex flex-col w-32 text-center sm:w-40">
              <div className="relative">
                <img
                  alt="Peter Hsu"
                  className="absolute rounded-full aspect-square"
                  src="/about/peter.png"
                />
                <div className="m-2 bg-red-200 rounded-full size-28 sm:size-36" />
              </div>
              <h3 className="mt-4 text-red-700 uppercase text-h5">
                Peter
                <br />
                Hsu
              </h3>
              <p className="font-bold leading-5 text-red-900 text-p">
                Director of Mission Organizations Engagement
              </p>
            </div>
            <div className="flex flex-col w-32 text-center sm:w-40">
              <div className="relative">
                <img
                  alt="Ashish Hirday"
                  className="absolute rounded-full aspect-square"
                  src="/about/ashish.png"
                />
                <div className="m-2 bg-red-200 rounded-full size-28 sm:size-36" />
              </div>
              <h3 className="mt-4 text-red-700 uppercase text-h5">
                Ashish
                <br />
                Hirday
              </h3>
              <p className="font-bold leading-5 text-red-900 text-p">
                Director of Church Engagement
              </p>
            </div>
            <div className="flex flex-col w-32 text-center sm:w-40">
              <div className="relative">
                <img
                  alt="Brenda Olasiman"
                  className="absolute rounded-full aspect-square"
                  src="/about/brenda.png"
                />
                <div className="m-2 bg-red-200 rounded-full size-28 sm:size-36" />
              </div>
              <h3 className="mt-4 text-red-700 uppercase text-h5">
                Brenda
                <br />
                Olasiman
              </h3>
              <p className="font-bold leading-5 text-red-900 text-p">
                Executive Assistant
              </p>
            </div>
            <div className="flex flex-col w-32 text-center sm:w-40">
              <div className="relative">
                <img
                  alt="Claire Balagot"
                  className="absolute rounded-full aspect-square"
                  src="/about/claire.png"
                />
                <div className="m-2 bg-red-200 rounded-full size-28 sm:size-36" />
              </div>
              <h3 className="mt-4 text-red-700 uppercase text-h5">
                Claire
                <br />
                Balagot
              </h3>
              <p className="font-bold leading-5 text-red-900 text-p">
                Administrative Associate
              </p>
            </div>
            <div className="flex flex-col w-32 text-center sm:w-40">
              <div className="relative">
                <img
                  alt="Leinel Tiglao"
                  className="absolute rounded-full aspect-square"
                  src="/about/leinel.png"
                />
                <div className="m-2 bg-red-200 rounded-full size-28 sm:size-36" />
              </div>
              <h3 className="mt-4 text-red-700 uppercase text-h5">
                Leinel
                <br />
                Tiglao
              </h3>
              <p className="font-bold leading-5 text-red-900 text-p">
                Social Media Admin
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

      <figure className="relative px-4 mx-auto mb-10 w-full max-w-screen-lg">
        <img
          alt="Image of Arise Asia 2023"
          className="object-cover rounded-xl aspect-video"
          src="/about/about-us.jpg"
        />
        <figcaption className="pt-4 italic text-center">
          Together for His mission: All 1,844 participants gathered at the
          closing of Arise Asia 2023.
        </figcaption>
      </figure>

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
            alt="Endorsing partners of Arise Asia"
            className="w-full md:hidden"
            src="/about/endorsing-partners-sm.png"
          />
          <img
            alt="Endorsing partners of Arise Asia"
            className="hidden w-full max-w-screen-xl md:block"
            src="/about/endorsing-partners.png"
          />
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
            alt="Sponsoring partners of Arise Asia"
            className="w-full md:hidden"
            src="/about/sponsoring-partners-sm.png"
          />
          <img
            alt="Sponsoring partners of Arise Asia"
            className="hidden w-full max-w-screen-xl md:block"
            src="/about/sponsoring-partners.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
