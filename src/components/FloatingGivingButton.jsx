import { LiaDonateSolid } from "react-icons/lia";

const FloatingGivingButton = () => (
  <a
    className="fixed right-4 bottom-4 text-white rounded-3xl transition duration-300 sm:right-10 sm:bottom-10 bg-black/75 group"
    href="https://www.totalideas.org/projects"
    rel="noopener noreferrer"
    target="_blank"
  >
    <div className="flex items-center p-3 duration-300 sm:p-4 hover:px-6 transition-[padding]">
      <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="overflow-hidden w-0 duration-300 group-hover:w-24 transition-[width] text-nowrap">
          Give Now
        </p>
      </div>
      <LiaDonateSolid size={28} />
    </div>
  </a>
);

export default FloatingGivingButton;
