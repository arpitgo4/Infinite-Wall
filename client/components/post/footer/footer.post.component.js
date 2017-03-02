
import React from 'react';

import colors from '../../colors.js';

import css from './assets/css/style.css';

import shareIcon from './assets/images/share.png';
import likeIcon from './assets/images/like.png';
import commentIcon from './assets/images/comment-bubble.png';


export default class PostFooter extends React.Component {
	render(){
		return (
			<div style={stylesheet.footerContainer}>
					<div className="footerLinks">
						<p>Like</p>
						<p className="dot">.</p>
						<p>Comment</p>
						<p className="dot">.</p>
						<p>Share</p>
						<p className='dot'>.</p>
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
		);
	}
}

const stylesheet = {
	footerContainer: {

	}
};