
import React from 'react';
import './assets/css/style.css';

import PostHeader from './header/header.post.component';
import PostBody from './body/body.post.component';
import PostFooter from './footer/footer.post.component';

const Post = ({ post }, { store }) => {

	const { id, title, timePosted, subtitle,
				 image, summary, summaryTitle, source, 
				 likes, comments, shares } = post;

	return (
		<div style={stylesheet.postContainer} id="postContainer">
				<PostHeader title={title} timePosted={timePosted} subtitle={subtitle} />
				<PostBody image={image} summary={summary} summaryTitle={summaryTitle} source={source} />
				<PostFooter likes={likes} comments={comments} shares={shares}
							likeHandler={() => store.dispatch({ type: 'POST_LIKED', id })} 
							shareHandler={() => store.dispatch({ type: 'SHARE_CLICKED', id })} 
							commentHandler={() => store.dispatch({ type: 'COMMENT_CLICKED', id })} />
		</div>
	)
};

Post.contextTypes = {
	store: React.PropTypes.object
};

const stylesheet = {
	postContainer: {
		backgroundColor: 'white'
	}
};

export default Post;
