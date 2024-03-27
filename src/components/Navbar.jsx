import { Link } from 'react-router-dom';

import logo from "../../public/logo.svg";

const Navbar = () => (
  <div className="absolute pt-20 w-full">
    <nav className="container flex justify-between mx-auto w-11/12 max-w-4xl bg-gray-500 rounded-full shadow-lg">
      <div className="hidden pl-16 lg:flex lg:flex-1">
        <Link
          className="py-4 w-44 text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
          to="/"
        >
          Home
        </Link>
        <Link
          className="py-4 w-44 text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
          to="/about"
        >
          About Us
        </Link>
      </div>
      <div>
        <img
          alt="Arise Logo"
          className="absolute translate-x-1/2 -translate-y-1/3 lg:flex lg:-translate-x-1/2"
          src={logo}
        />
        <p className="py-3.5 pl-32 text-xl text-white lg:hidden font-heading">
          Arise Asia
        </p>
      </div>
      <div className="hidden pr-16 lg:flex lg:flex-1 lg:justify-end">
        <Link
          className="py-4 w-44 text-right text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
          to="/arise2023"
        >
          Arise 2023
        </Link>
        <Link
          className="py-4 w-44 text-right text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
          to="/movements"
        >
          Movements
        </Link>
      </div>
      <div className="flex dropdown dropdown-end">
        <div
          className="pr-10 my-auto text-white lg:hidden"
          role="button"
          tabIndex={0}
        >
          <svg className="w-8 h-8" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h20M4 12h20m-20 6h20" strokeWidth="2" />
          </svg>
        </div>
        <ul
          className="z-10 p-2 mt-16 bg-gray-500 shadow rounded-box menu dropdown-content"
          tabIndex={0}
        >
          <li>
            <Link
              className="text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
              to="/arise2023"
            >
              Arise 2023
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
              to="/movements"
            >
              Movements
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
