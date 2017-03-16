
const defaultState = {
	posts: [
		{
			id: 'default',
			title: 'The Verge',
			timePosted: '13 hrs',
			subtitle: 'Jar Jar is marked for death',
			image: '/images/post_image.png',
			summaryTitle: 'Swimming dog taken by shark at Sydney beach.',
			summary: 'Swimmers and pet owners are being warned stay away from a south Sydney beach after a dog was taken by a shark while swimming off shore on the weekend.',
			source: 'theverge.com',
			likes: 480,
			comments: 20,
			shares: 91
		}
	]
}

const reducers = (state = defaultState, action) => {
	let posts = null;

	console.log('state', state);	// console.log shows in memory representation of the state object, 
									// so while it renders it on console, redux has already updated the 
									// state variable with the next state.

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