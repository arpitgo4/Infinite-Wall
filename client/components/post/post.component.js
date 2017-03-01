
import React from 'react';
import './assets/css/style.css';

import colors from '../colors.js';

import titleIcon from './assets/images/title_icon.png';
import globeIcon from './assets/images/earth-globe.png';

export default class Post extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<div style={stylesheet.postContainer} id="postContainer">
				<div style={stylesheet.headerContainer} id="headerContainer">
					<div id="header">
						<div style={stylesheet.iconContainer} id="iconContainer">
							<img style={stylesheet.titleIcon} src={titleIcon} />
						</div>
						<div style={stylesheet.headerInfoContainer}>
							<div style={stylesheet.titleContainer} id="titleContainer">
								<p style={stylesheet.title} >Title</p>
							</div>
							<div style={stylesheet.titleInfoContainer} id="titleInfoContainer">
								<p style={stylesheet.titleTime} id="titleTime">13 hrs</p>
								<p style={stylesheet.titleTime}>.</p>
								<img style={stylesheet.globeIcon} src={globeIcon} id="globeIcon" />
							</div>
						</div>
						<img id="optionsIcon" src="" />
					</div>
					<div id="postHeadingContainer">
						<p id="postHeading">Jar Jar is marked for death</p>
					</div>
				</div>
			</div>
		);
	}
}

const stylesheet = {
	postContainer: {
		backgroundColor: 'white'
	},
	iconContainer: {
		border: `1px solid ${colors.background}`,
		height: 60,
		width: 60,
		paddingTop: 10,
		paddingLeft: 10,
		display: 'inline-block'
	},
	headerInfoContainer: {
		display: 'inline-block',
		marginLeft: 10
	},
	titleIcon: {
		height: 50,
		width: 50,
		align: 'center'
	},
	headerContainer: {
		padding: '20px 20px 20px 20px'
	},
	title: {
		color: 'blue',
		fontWeight: 'bold'
	},
	titleContainer: {
	},
	titleInfoContainer: {
		
	},
	titleTime: {
		display: 'inline'
	},
	globeIcon: {

	}
};