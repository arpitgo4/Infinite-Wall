
import React from 'react';
import './assets/css/style.css';

import colors from '../colors.js';

import titleIcon from './assets/images/title_icon.png';
import globeIcon from './assets/images/earth-globe.png';
import downArrowIcon from './assets/images/down-arrow.png';
import postImage from './assets/images/post_image.png';
import shareIcon from './assets/images/share.png';
import likeIcon from './assets/images/like.png';
import commentIcon from './assets/images/comment-bubble.png';

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
								<img style={stylesheet.optionsIcon} src={downArrowIcon} />
							</div>
							<div style={stylesheet.titleInfoContainer} id="titleInfoContainer">
								<p style={stylesheet.titleTime} id="titleTime">13 hrs</p>
								<p style={stylesheet.titleTime}>.</p>
								<img style={stylesheet.globeIcon} src={globeIcon} id="globeIcon" />
							</div>
						</div>						
					</div>
					<div id="postHeadingContainer">
						<p id="postHeading">Jar Jar is marked for death</p>
					</div>
				</div>
				<div style={stylesheet.postDataContainer} id="postInfoContainer">
					<div style={stylesheet.postInfoContainer} >
						<img style={stylesheet.postImage} src={postImage} />
						<div style={stylesheet.postMessageContainer} >
							<p style={stylesheet.postMessageTitle}>
								Swimming dog taken by shark at Sydney beach.
							</p>
							<p style={stylesheet.postMessageSummary}>
								Swimmers and pet owners are being warned stay away from a south Sydney beach after a dog was taken by a shark while swimming off shore on the weekend.
							</p>
							<p style={stylesheet.postSource}>THEVERGE.COM</p>
						</div>
					</div>
				</div>
				<div style={stylesheet.footerContainer}>
					<div className="footerLinks">
						<p>Like</p>
						<p>.</p>
						<p>Comment</p>
						<p>.</p>
						<p>Share</p>
						<p>.</p>
						<div className="footerStats">
							<img src={likeIcon} />
							<p>480</p>
							<img src={commentIcon} />
							<p>20</p>
							<img src={shareIcon} />
							<p>91</p>
						</div>
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
		fontWeight: 'bold',
		display: 'inline'
	},
	optionsIcon: {
		float: 'right',
		position: 'absolute',
		right: 65
	},
	titleContainer: {
	},
	titleInfoContainer: {
		
	},
	titleTime: {
		display: 'inline'
	},
	globeIcon: {

	},

	postDataContainer: {
		paddingLeft: 20,
		paddingRight: 20
	},
	postInfoContainer: {
		border: `2px solid ${colors.background}`,
		overflow: 'wrap'
	},
	postImage: {

	},
	postMessageContainer: {

	},
	postMessageTitle: {
		overflow: 'wrap'
	},
	postMessageSummary: {
		overflow: 'wrap'
	},
	postSource: {

	},


	footerContainer: {

	}
};