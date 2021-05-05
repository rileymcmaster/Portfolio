import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const handleScroll = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => handleScroll();
  }, []);
  return null;
};

export default withRouter(ScrollToTop);
