import React, { useRef, useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Header from "./Components/Header";
import TitlePage from "./Components/TitlePage";
import Projects from "./Components/Projects/index";
import About from "./Components/About";
import Art from "./Components/Art/Index";
import Contact from "./Components/Contact";
import FoodFeed from "./Components/FoodFeed";
import Cyborg from "./Components/Cyborg";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const TitlePageRef = useRef(null);
  const AboutRef = useRef();
  const ProjectsRef = useRef();
  const ArtRef = useRef();
  const ContactRef = useRef();

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Header
              TitlePageRef={TitlePageRef}
              ProjectsRef={ProjectsRef}
              AboutRef={AboutRef}
              ArtRef={ArtRef}
              ContactRef={ContactRef}
            />
            <TitlePage offset={offset} TitlePageRef={TitlePageRef} />
            <About offset={offset} AboutRef={AboutRef} />
            <Projects ProjectsRef={ProjectsRef} />
            <Art ArtRef={ArtRef} />
            <Contact ContactRef={ContactRef} />
          </Route>
          <Route exact path="/project/foodfeed">
            <FoodFeed />
          </Route>
          <Route exact path="/project/cyborg">
            <Cyborg />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
