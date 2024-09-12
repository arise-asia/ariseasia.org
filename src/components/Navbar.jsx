import { Link } from "react-router-dom";
import TranslationButton from "./TranslationButton";

const Navbar = () => {
  return (
    <div className="flex absolute z-10 gap-x-4 pt-20 w-full sm:px-10">
      <nav className="container flex justify-between mx-auto w-11/12 max-w-4xl rounded-full shadow-2xl bg-black/75">
        <div className="hidden pl-16 lg:flex lg:flex-1">
          <Link className="py-4 w-40 text-white font-heading" to="/about">
            <div className="relative w-fit group">
              <p>About Us</p>
              <span className="hidden absolute w-full h-0.5 bg-gradient-to-r from-yellow-500 to-red-500 group-hover:block" />
            </div>
          </Link>
          <Link className="py-4 w-40 text-white font-heading" to="/arise2023">
            <div className="relative w-fit group">
              <p>Arise 2023</p>
              <span className="hidden absolute w-full h-0.5 bg-gradient-to-r from-yellow-500 to-red-500 group-hover:block" />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <img
              alt="Arise logo"
              className="flex absolute -translate-y-1/4 lg:-translate-x-1/2 size-28 sm:size-32 lg:hover:size-36"
              src="/logo.svg"
            />
            <p className="my-3.5 ml-24 text-white sm:ml-32 sm:text-xl lg:hidden font-heading">
              Arise Asia
            </p>
          </Link>
        </div>
        <div className="hidden pr-16 lg:flex lg:flex-1 lg:justify-end">
          <Link className="py-4 w-40 text-white font-heading" to="/movements">
            <div className="relative ml-auto w-fit group">
              <p>Movements</p>
              <span className="hidden absolute w-full h-0.5 bg-gradient-to-r from-yellow-500 to-red-500 group-hover:block" />
            </div>
          </Link>
          <a
            className="py-4 w-40 text-white font-heading"
            href="https://www.totalideas.org/projects"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="relative ml-auto w-fit group">
              <p>Giving</p>
              <span className="hidden absolute w-full h-0.5 bg-gradient-to-r from-yellow-500 to-red-500 group-hover:block" />
            </div>
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
            className="p-2 mt-16 shadow-2xl bg-black/75 rounded-box menu dropdown-content"
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
                href="https://www.totalideas.org/projects"
                rel="noopener noreferrer"
                target="_blank"
              >
                Giving
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <TranslationButton />
    </div>
  );
};

export default Navbar;
