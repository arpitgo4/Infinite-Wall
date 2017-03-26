
import React from 'react';

import colors from '../../colors.js';

import css from './assets/css/style.css';

import shareIcon from './assets/images/share.png';
import likeIcon from './assets/images/like.png';
import commentIcon from './assets/images/comment-bubble.png';

const PostFooter = ({ likes, shares, comments, likeHandler, shareHandler, commentHandler }) => (
	<div style={stylesheet.footerContainer}>
					<div className="footerLinks">
						<p onClick={likeHandler} >Like</p>
						<p className="dot">.</p>
						<p onClick={commentHandler} >Comment</p>
						<p className="dot">.</p>
						<p onClick={shareHandler} >Share</p>
						<p className='dot'>.</p>
						<div className="footerStats">
							<img src={likeIcon} />							
							<p>{likes}</p>
							<img src={commentIcon} />
							<p>{comments}</p>
							<img src={shareIcon} />
							<p>{shares}</p>
						</div>
					</div>
			</div>
);

export default PostFooter;

const stylesheet = {
	footerContainer: {

	}
};