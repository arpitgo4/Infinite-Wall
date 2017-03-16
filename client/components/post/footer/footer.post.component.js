
import React from 'react';

import colors from '../../colors.js';

import css from './assets/css/style.css';

import shareIcon from './assets/images/share.png';
import likeIcon from './assets/images/like.png';
import commentIcon from './assets/images/comment-bubble.png';


export default class PostFooter extends React.Component {

	constructor(){
		super();

	}

	render(){
		this.store = this.context.store;
		return (
			<div style={stylesheet.footerContainer}>
					<div className="footerLinks">
						<p onClick={() => this.likeClicked()} >Like</p>
						<p className="dot">.</p>
						<p onClick={() => this.commentClicked()} >Comment</p>
						<p className="dot">.</p>
						<p onClick={() => this.shareClicked()} >Share</p>
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

	likeClicked() {
		this.store.dispatch({type: 'LIKE'});
	}

	commentClicked() {
		console.log('comment clicked!');
	}

	shareClicked() {
		console.log('share clicked!');
	}
}

PostFooter.contextTypes = {
	store: React.PropTypes.object
};

const stylesheet = {
	footerContainer: {

	}
};