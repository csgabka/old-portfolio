import React from 'react';
import '../css/Repositories.css';

const Repositories = ({repositories, timestamp}) => {

		return (
			<div>
			<h2>Github repositories</h2>
			<h5>Updated: {timestamp}</h5>
			<div className="github-container">
				<div className="row">
					<div className="col-sm-6 h5 github-name-title">Demo</div>
					<div className="ccol-sm-6 h5 github-name-title">Source</div>
				</div>
					{repositories.map((repository) => {
						return (
							<div className="row" key={repository.name}>
								<div className="col-sm-6 h5 github-name"><a className="github-name-link" href={repository.homepage}>{repository.name}</a></div>
								<div className="col-sm-6 h5 github-source"><a className="github-source-link" href={repository.svn_url}>{repository.homepage}</a></div>
							</div>
								)
					})}
				</div>
			</div>
			);
	
}

export default Repositories;