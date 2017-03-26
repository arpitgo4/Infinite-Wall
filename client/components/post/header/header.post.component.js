
import React from 'react';

import colors from '../../colors.js';

import titleIcon from './assets/images/title_icon.png';
import globeIcon from './assets/images/earth-globe.png';
import downArrowIcon from './assets/images/down-arrow.png';

const PostHeader = ({ id, title, timePosted, subtitle }) => (
	<div>
			<div style={stylesheet.headerContainer} id="headerContainer">
					<div id="header">
						<div style={stylesheet.iconContainer} id="iconContainer">
							<img style={stylesheet.titleIcon} src={titleIcon} />
						</div>
						<div style={stylesheet.headerInfoContainer}>
							<div style={stylesheet.titleContainer} id="titleContainer">
								<p style={stylesheet.title} >{title}</p>

								<div className="dropdown" style={stylesheet.optionsIcon}>
									<img className="dropdown-toggle" data-toggle="dropdown" 
										  src={downArrowIcon} />
									<ul className="dropdown-menu dropdown-menu-right">
										<li><a href="javascript:void(0)">Report this post</a></li>										
										<li><a href="javascript:void(0)">Contact Us</a></li>
									</ul>
								</div>
							</div>
							<div style={stylesheet.titleInfoContainer} id="titleInfoContainer">
								<p style={stylesheet.titleTime} id="titleTime">{timePosted}</p>
								&nbsp;<p style={stylesheet.titleDot}>.</p>
								&nbsp;<img style={stylesheet.globeIcon} src={globeIcon} id="globeIcon" />
							</div>
						</div>						
					</div>					
				</div>
				<div style={stylesheet.postHeadingContainer} id="postHeadingContainer">
						<p style={stylesheet.postHeading} id="postHeading">{subtitle}</p>
				</div>				
		</div>
);

export default PostHeader;

const stylesheet = {
	iconContainer: {
		border: `1px solid ${colors.background}`,
		height: 60,
		width: 60,
		paddingTop: 5,
		paddingLeft: 5,
		display: 'inline-block'
	},
	headerInfoContainer: {
		display: 'inline-block',
		marginLeft: 10
	},
	titleIcon: {
		height: 50,
		width: 50
	},
	headerContainer: {
		padding: '20px 20px 20px 20px'
	},
	title: {
		color: 'blue',
		fontWeight: 'bold',
		display: 'inline',
		fontSize: '1.5em'
	},
	optionsIcon: {
		float: 'right',
		left: 703
	},
	titleContainer: {
	},
	titleInfoContainer: {
		
	},
	titleTime: {
		display: 'inline',
		color: `${colors.bodyLinks}`,
		fontWeight: 'bold'
	},
	titleDot: {
		display: 'inline',
		color: `${colors.bodyLinks}`,
		fontWeight: 'bold',
		position: 'relative',
		bottom: 5
	},
	globeIcon: {

	},
	postHeadingContainer: {
		margin: '10px 0px 10px 25px'	
	},
	postHeading: {
		fontSize: '1.2em',
		marginBottom: 7
	}
};