import { CN, ID, US } from "country-flag-icons/react/3x2";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsTranslate } from "react-icons/bs";

const languageMetadata = [
  {
    FlagIcon: US,
    lng: "en-US",
    title: "English",
  },
  {
    FlagIcon: CN,
    lng: "zh-CN",
    title: "简体中文",
  },
  {
    FlagIcon: CN,
    lng: "zh-HK",
    title: "繁體中文",
  },
  {
    FlagIcon: ID,
    lng: "id",
    title: "Indonesian",
  },
];

const TranslationButton = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { i18n } = useTranslation();

  const handleClick = (lng) => () => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="relative text-white shadow-2xl font-heading" ref={ref}>
      <button
        className="hidden p-4 rounded-xl sm:block bg-black/75"
        onClick={() => setOpen(!open)}
      >
        <BsTranslate size={24} />
      </button>
      {open && (
        <div className="absolute right-0 top-16 p-2 rounded-xl shadow-2xl bg-black/75">
          <ul className="w-fit">
            {languageMetadata.map(({ FlagIcon, lng, title }) => (
              <li
                className="flex gap-x-2 items-center py-1 px-2 text-sm rounded-lg hover:bg-gray-500/25"
                key={lng}
              >
                <FlagIcon className="h-4" />
                <button onClick={handleClick(lng)}>{title}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TranslationButton;
