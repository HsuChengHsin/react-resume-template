import React, { Fragment } from "react";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import { resumeData } from "./resumeData";

const App = () => {
  return (
    <div className="App">
      {resumeData && (
        <Fragment>
          <Header data={resumeData.main} />
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          <Testimonials data={resumeData.testimonials} />
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </Fragment>
      )}
    </div>
  );
};

export default App;
