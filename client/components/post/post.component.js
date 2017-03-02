
import React from 'react';
import './assets/css/style.css';

import PostHeader from './header/header.post.component';
import PostBody from './body/body.post.component';
import PostFooter from './footer/footer.post.component';

export default class Post extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<div style={stylesheet.postContainer} id="postContainer">
				<PostHeader />
				<PostBody />
				<PostFooter />
			</div>
		);
	}
}

const stylesheet = {
	postContainer: {
		backgroundColor: 'white'
	}
};