import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="absolute z-10 pt-20 w-full">
    <nav className="container flex justify-between mx-auto w-11/12 max-w-4xl bg-gray-500 rounded-full shadow-2xl">
      <div className="hidden pl-16 lg:flex lg:flex-1">
        <Link
          className="py-4 w-44 text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
          to="/about"
        >
          About Us
        </Link>
        <Link
          className="py-4 w-44 text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
          to="/arise2023"
        >
          Arise 2023
        </Link>
      </div>
      <div>
        <Link to="/">
          <img
            alt="Arise logo"
            className="flex absolute -translate-y-1/4 lg:-translate-x-1/2 size-28 sm:size-32 lg:hover:size-36"
            src="/logo.svg"
          />
          <p className="my-3.5 ml-32 text-white sm:text-xl lg:hidden font-heading">
            Arise Asia
          </p>
        </Link>
      </div>
      <div className="hidden pr-16 lg:flex lg:flex-1 lg:justify-end">
        <Link
          className="py-4 w-44 text-right text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
          to="/movements"
        >
          Movements
        </Link>
        <a
          className="py-4 w-44 text-right text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
          href="https://www.totalideas.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Giving
        </a>
      </div>
      <div className="flex dropdown dropdown-end">
        <div
          className="pr-10 my-auto text-white lg:hidden"
          role="button"
          tabIndex={0}
        >
          <svg className="size-8" stroke="currentColor" viewBox="0 0 12 12">
            <path d="M2 3H12M2 6H12M2 9H12" />
          </svg>
        </div>
        <ul
          className="p-2 mt-16 bg-gray-500 shadow-2xl rounded-box menu dropdown-content"
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
          <li>
            <a
              className="text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
              href="https://www.totalideas.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Giving
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
