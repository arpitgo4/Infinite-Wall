
import React from 'react';
import './assets/css/style.css';

import colors from '../colors.js';
import titleIcon from './assets/images/title_icon.png';

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
						<div id="titleContainer">
							<p>Title</p>
						</div>
						<div id="titleInfo">
							<p id="titleTime">13 hrs</p>
							<img src="" id="globeIcon" />
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
		height: 50,
		width: 50
	},
	titleIcon: {
		height: 50,
		width: 50
	},
	headerContainer: {
		padding: '20px 20px 20px 20px'
	}
};