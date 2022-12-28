import React, { Fragment } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Medium from "./components/Medium";
import Portfolio from "./components/Portfolio";
import { resumeData } from "./resumeData";

const App = () => {
	return (
		<div className="App">
			{resumeData && (
				<>
					<Header data={resumeData.main} />
					<About data={resumeData.main} />
					<Resume data={resumeData.resume} />
					<Portfolio data={resumeData.portfolio} />
					<Testimonials data={resumeData.testimonials} />
					<Medium username={resumeData.medium.username} />
					<Contact data={resumeData.main} />
					<Footer data={resumeData.main} />
				</>
			)}
		</div>
	);
};

export default App;
