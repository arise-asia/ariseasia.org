import { LiaDonateSolid } from "react-icons/lia";

const FloatingGivingButton = () => (
  <a
    role="button"
    rel="noreferrer noopener"
    target="_blank"
    href="https://www.totalideas.org/"
    className="btn bg-black text-white fixed right-5 bottom-16 lg:right-20 lg:bottom-20 z-1"
  >
    <LiaDonateSolid size={24} />
  </a>
);
export default FloatingGivingButton;
