
import React from 'react';

import colors from '../../colors.js';

import postImage from './assets/images/post_image.png';

export default class PostBody extends React.Component {
	render(){
		return (
			<div style={stylesheet.postDataContainer} id="postInfoContainer">
					<div style={stylesheet.postInfoContainer} >
						<div style={stylesheet.postImage}></div>						
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
		);
	}
}

const stylesheet = {
	postDataContainer: {
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
		width: "100%",
		height: 800,
		backgroundImage: `url(${postImage})`,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat'
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

	}
};