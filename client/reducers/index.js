
const defaultState = {
	posts: [
		{
			id: 'default',
			likes: 480,
			comments: 20,
			shares: 91
		}
	]
}

const reducers = (state = defaultState, action) => {
	let posts = null;

	switch(action.type){
		case 'POST_LIKED' : 
		posts = state.posts.map((post) => {
			if(post.id !== action.id)
				return post;

			post.likes++;
			return post;
		});


		return Object.assign(state, { posts });
			
		case 'COMMENT_CLICKED' : 
		posts = state.posts.map((post) => {
			if(post.id !== action.id)
				return post;

			post.comments++;
			return post;
		});

		return Object.assign(state, { posts });

		case 'SHARE_CLICKED' : 
		posts = state.posts.map((post) => {
			if(post.id !== action.id)
				return post;

			post.shares++;
			return post;
		});

		return Object.assign(state, { posts });

		default: return state;
	}
};

export {
	reducers
};