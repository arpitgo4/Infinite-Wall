
import React from 'react';
import './assets/css/style.css';

import PostHeader from './header/header.post.component';
import PostBody from './body/body.post.component';
import PostFooter from './footer/footer.post.component';

export default class Post extends React.Component {

	constructor(props){
		super(props);
		console.log('post recevied', props.post);
	}

	render() {

		const { id, title, timePosted, subtitle,
				 image, summary, summaryTitle, source, 
				 likes, comments, shares } = this.props.post;

		return (
			<div style={stylesheet.postContainer} id="postContainer">
				<PostHeader id={id} title={title} timePosted={timePosted} subtitle={subtitle} />
				<PostBody image={image} summary={summary} summaryTitle={summaryTitle} source={source} />
				<PostFooter likes={likes} comments={comments} shares={shares} />
			</div>
		);
	}
}

const stylesheet = {
	postContainer: {
		backgroundColor: 'white'
	}
};