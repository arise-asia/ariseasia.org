import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollBehavior = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const e = document.querySelector(location.hash);
      e?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
};

export default ScrollBehavior;
