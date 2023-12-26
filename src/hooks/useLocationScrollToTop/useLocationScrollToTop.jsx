import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useLocationScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
