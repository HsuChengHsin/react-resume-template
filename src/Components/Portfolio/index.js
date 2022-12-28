import React from "react";

const Portfolio = ({ data: { projects } }) => (
	<section id="portfolio">
		<div className="row">
			<div className="twelve columns collapsed">
				<h1>Check Out Some of My Works.</h1>
				<div id="portfolio-wrapper">
					<div className="grid md:grid-cols-3 gap-10 grid-cols-1 place-content-center">
						{projects.map(({ category, image, title, url }) => (
							<div key={title} className="columns portfolio-item">
								<div className="item-wrap">
									<a href={url} title={title} target="_blank">
										<img alt={title} src={`/images/portfolio/${image}`} />
										<div className="overlay">
											<div className="portfolio-item-meta">
												<h5>{title}</h5>
												<p>{category}</p>
											</div>
										</div>
										<div className="link-icon">
											<i className="fa fa-link" />
										</div>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Portfolio;
