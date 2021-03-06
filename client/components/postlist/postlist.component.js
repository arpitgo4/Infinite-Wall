import React from 'react';

import Post from '../post/post.component';

export default class PostList extends React.Component {

	componentWillMount(){
		this.store = this.context.store;
		this.store.subscribe(() => this.forceUpdate());
	}

	render() {

		const posts = this.store.getState().posts;
		
		return (
			<div>
				{ posts.map(post => <Post key={post.id} post={post} />) }
			</div>
		);
	}

	componentWillUnmount() {
		this.store.unsubscribe();
	}

}

PostList.contextTypes = {
	store: React.PropTypes.object
};