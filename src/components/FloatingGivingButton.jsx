import { LiaDonateSolid } from "react-icons/lia";

const FloatingGivingButton = () => (
  <a
    className="btn bg-black text-white fixed right-5 bottom-16 lg:right-20 lg:bottom-20"
    href="https://www.totalideas.org"
    rel="noreferrer noopener"
    target="_blank"
  >
    <LiaDonateSolid size={24} />
  </a>
);
export default FloatingGivingButton;
