import React from "react";
import Skills from "../Skills";

const Resume = ({ data }) => {
	const { education, work } = data;

	return (
		<section id="resume">
			<div className="row education">
				<div className="three columns header-col">
					<h1>
						<span>Education</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					<div className="row item">
						<div className="twelve columns">
							{education.map(({ school, degree, graduated, description }) => (
								<div key={school}>
									<h3>{school}</h3>
									<p className="info">
										{degree} <span>&bull;</span>
										<em className="date">{graduated}</em>
									</p>
									<p>{description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="row work">
				<div className="three columns header-col">
					<h1>
						<span>Work</span>
					</h1>
				</div>
				<div className="nine columns main-col">
					{work.map(({ company, description, years, title }) => (
						<div key={`${company}-${title}`} className="my-10">
							<h3>{company}</h3>
							<p className="info">
								{title}
								<span>&bull;</span> <em className="date">{years}</em>
							</p>
							{description.map((d) => (
								<div key={d} className="work-description">
									{d}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
			<Skills />
		</section>
	);
};

export default Resume;
