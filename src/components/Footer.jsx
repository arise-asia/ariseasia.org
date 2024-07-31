import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-orange-50">
    <div className="container flex flex-col justify-between p-12 sm:flex-row sm:px-20">
      <div className="flex flex-col justify-between text-center sm:text-left">
        <div>
          <h2 className="mb-1 text-2xl font-bold text-orange-500 font-heading">
            Arise Asia
          </h2>
          <div className="flex gap-1 mb-4">
            <Link to="/about" className="hover:text-orange-500">
              About Us
            </Link>
            <span>|</span>
            <Link to="/arise2023" className="hover:text-orange-500">
              Arise 2023
            </Link>
            <span>|</span>
            <Link to="/movements" className="hover:text-orange-500">
              Movements
            </Link>
          </div>
          <div className="flex gap-x-4 justify-center mb-6 sm:justify-start">
            <a
              href="https://www.instagram.com/ariseasia.movement"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaInstagram className="hover:text-yellow-500" size={32} />
            </a>
            <a
              href="https://www.youtube.com/@AriseAsiaMovement"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaYoutube className="hover:text-red-500" size={32} />
            </a>
            <a
              href="https://www.facebook.com/ariseasia2023"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaFacebook className="hover:text-blue-500" size={32} />
            </a>
          </div>
        </div>
        <p className="italic">
          Copyright &copy;2022-2024 Arise Asia. All rights reserved.
        </p>
      </div>
      <div className="mx-auto mt-6 sm:m-0">
        <img src="/logo.svg" alt="Arise logo" className="mt-6 w-24" />
      </div>
    </div>
  </footer>
);

export default Footer;
