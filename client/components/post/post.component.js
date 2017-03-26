
import React from 'react';
import './assets/css/style.css';

import PostHeader from './header/header.post.component';
import PostBody from './body/body.post.component';
import PostFooter from './footer/footer.post.component';

export default class Post extends React.Component {

	componentWillMount() {
		this.store = this.context.store;
		console.log('post store', this.context.store);
	}

	render() {

		const { id, title, timePosted, subtitle,
				 image, summary, summaryTitle, source, 
				 likes, comments, shares } = this.props.post;

		return (
			<div style={stylesheet.postContainer} id="postContainer">
				<PostHeader id={id} title={title} timePosted={timePosted} subtitle={subtitle} />
				<PostBody image={image} summary={summary} summaryTitle={summaryTitle} source={source} />
				<PostFooter likes={likes} comments={comments} shares={shares}
							likeHandler={() => this.store.dispatch({ type: 'POST_LIKED', id })} 
							shareHandler={() => this.store.dispatch({ type: 'SHARE_CLICKED', id })} 
							commentHandler={() => this.store.dispatch({ type: 'COMMENT_CLICKED', id })} />
			</div>
		);
	}
}

Post.contextTypes = {
	store: React.PropTypes.object
};

const stylesheet = {
	postContainer: {
		backgroundColor: 'white'
	}
};