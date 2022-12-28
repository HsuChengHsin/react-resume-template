import React from "react";
import { Card, Image } from "semantic-ui-react";
import Node from "../../images/node480.svg";
import TS from "../../images/ts480.svg";
import react from "../../images/react480.svg";
import Git from "../../images/git480.svg";
import Docker from "../../images/docker480.svg";
import NextJS from "../../images/nextjs480.svg";
import AWS from "../../images/aws480.svg";
import Python from "../../images/python480.svg";
import PG from "../../images/postgresql480.svg";

const SKILLS_LIST = [
	{ src: Node, text: "NodeJS" },
	{ src: TS, text: "Typescript" },
	{ src: react, text: "ReactJS" },
	{ src: Git, text: "Git" },
	{ src: Docker, text: "Docker" },
	{ src: NextJS, text: "NextJS" },
	{ src: AWS, text: "AWS" },
	{ src: Python, text: "Python" },
	{ src: PG, text: "PostgreSQL" },
];

const Skills = () => (
	<div className="row skill">
		<div className="text-center mb-8">
			<h1>Skills</h1>
		</div>
		<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
			{SKILLS_LIST.map((skill) => (
				<Image
					wrapped
					label={{
						attached: "bottom",
						basic: true,
						content: skill.text,
						className: "text-center",
					}}
					src={skill.src}
					bordered
					rounded
				/>
			))}
		</div>
	</div>
);

export default Skills;
