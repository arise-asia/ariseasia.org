import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

import logo from '../../public/logo.svg';

const Footer = () => (
  <footer className="bg-orange-50">
    <div className="container flex flex-col justify-between p-16 sm:flex-row sm:px-20">
      <div className="flex flex-col justify-between text-center sm:text-left">
        <div>
          <h2 className="mb-1 text-2xl font-bold text-orange-500 font-heading">
            Arise Asia
          </h2>
          <p className="mb-4">
            <a href="/about">About Us</a> | <a href="/arise2023">Arise 2023</a>{' '}
            | <a href="/movements">Movements</a>
          </p>
          <div className="flex gap-x-4 justify-center mb-6 sm:justify-start">
            <a
              href="https://www.instagram.com/ariseasia.movement"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaInstagram className="hover:text-orange-500" size={32} />
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
        <img src={logo} alt="Arise Logo" className="mt-6 w-24" />
      </div>
    </div>
  </footer>
);

export default Footer;
