
import React from 'react';

import colors from '../../colors.js';

import css from './assets/css/style.css';

import shareIcon from './assets/images/share.png';
import likeIcon from './assets/images/like.png';
import commentIcon from './assets/images/comment-bubble.png';


export default class PostFooter extends React.Component {

	constructor(props){
		super(props);
		this.id = props.id || 'default';
	}

	componentWillMount(){
		this.store = this.context.store;
		this.store.subscribe(() => {
			this.forceUpdate();
		});
	}

	componentWillUnmount(){
		this.store.unsubscribe();
	}

	render(){
		const post = this.store.getState().posts.find(post => post.id === this.id);
		
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
							<p>{post.likes}</p>
							<img src={commentIcon} />
							<p>{post.comments}</p>
							<img src={shareIcon} />
							<p>{post.shares}</p>
						</div>
					</div>
			</div>					
		);
	}

	likeClicked() {
		this.store.dispatch({ type: 'POST_LIKED', id: 'default' });
	}

	commentClicked() {
		this.store.dispatch({ type: 'COMMENT_CLICKED', id: 'default' });
	}

	shareClicked() {
		this.store.dispatch({ type: 'SHARE_CLICKED', id: 'default' });
	}
}

PostFooter.contextTypes = {
	store: React.PropTypes.object
};

const stylesheet = {
	footerContainer: {

	}
};