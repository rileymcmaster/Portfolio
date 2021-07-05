import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useLocation } from "react-router";

const ScrollToTop = ({ history, children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;

  // useEffect(() => {
  //   const handleScroll = history.listen(() => {
  //     window.scrollTo(0, 0);
  //   });
  //   return () => handleScroll();
  // }, [history]);
  // return null;
};

// export default withRouter(ScrollToTop);
export default ScrollToTop;
