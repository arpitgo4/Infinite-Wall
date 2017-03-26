
import React from 'react';

import colors from '../../colors.js';

import postImage from './assets/images/post_image.png';

import css from './assets/css/style.css';

export default class PostBody extends React.Component {

	render(){

		const { image, summary, summaryTitle, source } = this.props;

		return (
			<div style={stylesheet.postBodyContainer} id="postInfoContainer">
					<div style={stylesheet.postInfoContainer} >
						<div style={Object.assign(stylesheet.postImage, { backgroundImage: `url(${image})` })}></div>						
						<div id="postMessageContainer" style={stylesheet.postMessageContainer} >
							<p style={stylesheet.postMessageTitle}>
								{summaryTitle}
							</p>
							<p style={stylesheet.postMessageSummary}>
								{summary}
							</p>
							<p style={stylesheet.postSource}>{source}</p>
						</div>
					</div>
				</div>
		);
	}
}

PostBody.contextTypes = {
	store: React.PropTypes.object
};

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
		color: `${colors.bodyLinks}`,
		textTransform: 'uppercase'
	}
};