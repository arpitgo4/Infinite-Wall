
import React from 'react';

import colors from '../../colors.js';

import postImage from './assets/images/post_image.png';

import css from './assets/css/style.css';

export default class PostBody extends React.Component {
	render(){
		return (
			<div style={stylesheet.postBodyContainer} id="postInfoContainer">
					<div style={stylesheet.postInfoContainer} >
						<div style={stylesheet.postImage}></div>						
						<div id="postMessageContainer" style={stylesheet.postMessageContainer} >
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
		);
	}
}

const stylesheet = {
	postBodyContainer: {
		paddingLeft: 20,
		paddingRight: 20
	},
	postInfoContainer: {
		border: `2px solid ${colors.background}`,
		overflow: 'wrap',
		maxWidth: '100%',
		objectFit: 'cover'
	},
	postImage: {
		maxWidth: "100%",
		height: '580px',
		backgroundImage: `url(${postImage})`,
		backgroundSize: '100% 100%',
		backgroundRepeat: 'no-repeat'
	},
	postMessageContainer: {
		margin: '0px 20px 20px 20px'
	},
	postMessageTitle: {		
		fontSize: '2em'
	},
	postMessageSummary: {
		textOverflow: 'ellipsis',		
  		whiteSpace: 'nowrap',
  		overflow: 'hidden'
	},
	postSource: {
		color: `${colors.bodyLinks}`
	}
};