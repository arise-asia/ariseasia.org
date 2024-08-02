import { MdOpenInNew } from "react-icons/md";

const AboutArise = () => (
  <div className="flex flex-col gap-6 justify-between items-center xl:flex-row-reverse xl:items-end">
    <div>
      <h2 className="-mt-4 text-center text-red-700 uppercase translate-y-4 sm:-mt-6 sm:translate-y-6 text-h2">
        What Is Arise?
      </h2>
      <div className="relative p-10 bg-red-700 rounded-3xl">
        <img
          src="/logo.svg"
          alt="What is Arise? logo"
          className="hidden absolute right-6 -bottom-24 w-28 xl:block"
        />
        <div className="text-white prose prose-sm sm:prose-base">
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
        </div>
        <a
          className="flex gap-x-2 items-center py-2 px-4 mt-6 text-sm font-bold bg-red-100 rounded-full border-4 border-black sm:text-base w-fit"
          href="https://goarise.org"
          rel="noreferrer noopener"
          target="_blank"
        >
          Learn more at goarise.org <MdOpenInNew size={20} />
        </a>
      </div>
    </div>
    <iframe
      allowFullScreen
      className="w-full max-w-2xl rounded-xl sm:rounded-3xl aspect-video"
      src="https://www.youtube.com/embed/4G4fQidFXro"
      title="YouTube video explaining the Arise movement"
    />
  </div>
);

export default AboutArise;
