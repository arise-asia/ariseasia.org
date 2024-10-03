import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import TranslationButton from "./TranslationButton";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute z-10 pt-20 w-full">
      <nav className="container flex justify-between mx-auto w-11/12 max-w-4xl rounded-full shadow-2xl bg-black/75">
        <div className="hidden pl-16 lg:flex lg:flex-1">
          <Link
            className="py-4 w-44 text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
            to="/about"
          >
            {t("about.title")}
          </Link>
          <Link
            className="py-4 w-44 text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
            to="/arise2023"
          >
            {t("arise2023.title")}
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
            {t("movements.title")}
          </Link>
          <a
            className="py-4 w-44 text-right text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
            href="https://www.totalideas.org/projects"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("giving")}
          </a>
          <div className="px-10">
            <TranslationButton />
          </div>
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
                {t("home.title")}
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
                to="/about"
              >
                {t("about.title")}
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
                to="/arise2023"
              >
                {t("arise2023.title")}
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
                to="/movements"
              >
                {t("movements.title")}
              </Link>
            </li>
            <li>
              <a
                className="text-white hover:underline font-heading underline-offset-4 decoration-orange-500"
                href="https://www.totalideas.org/projects"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t("giving")}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
