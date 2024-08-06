import { LiaDonateSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const FloatingGivingButton = () => (
  <Link
    className="btn bg-black text-white fixed right-5 bottom-16 lg:right-20 lg:bottom-20 z-1"
    to="https://www.totalideas.org/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <LiaDonateSolid size={24} />
  </Link>
);
export default FloatingGivingButton;
