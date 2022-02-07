import React, { useRef, useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./Components/Sections/Header";
import TitlePage from "./Components/Sections/TitlePage";
import Projects from "./Components/Sections/Projects/index";
import About from "./Components/Sections/About";
import Art from "./Components/Sections/Art/Index";
import Contact from "./Components/Sections/Contact";
import FoodFeed from "./Components/Sections/ProjectEach/FoodFeed";
import Cyborg from "./Components/Sections/ProjectEach/Cyborg";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import Seasons from "./Components/Sections/ProjectEach/Seasons";
import ReactForm from "./Components/Sections/ProjectEach/ReactForm";
import Handheld from "./Components/Sections/ProjectEach/Handheld";

const App = () => {
  const TitlePageRef = useRef(null);
  const AboutRef = useRef();
  const ProjectsRef = useRef();
  const ArtRef = useRef();
  const ContactRef = useRef();

  const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     setOffset(window.pageYOffset);
  //   };
  // }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop>
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
              <About AboutRef={AboutRef} />
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
            <Route exact path="/project/seasons">
              <Seasons />
            </Route>
            <Route exact path="/project/form">
              <ReactForm />
            </Route>
            <Route exact path="/project/handheld">
              <Handheld />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
