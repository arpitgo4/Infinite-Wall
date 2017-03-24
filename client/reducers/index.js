
import config from '../config.js';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import superagent from 'superagent';

const defaultState = {
	posts: [
		{
			id: 'default',
			title: 'The Verge',
			timePosted: '13 hrs',
			subtitle: 'Jar Jar is marked for death',
			//image: '/images/post_image.png',
			image: 'http://i.imgur.com/Y2Z10CZ.jpg',
			summaryTitle: 'Swimming dog taken by shark at Sydney beach.',
			summary: 'Swimmers and pet owners are being warned stay away from a south Sydney beach after a dog was taken by a shark while swimming off shore on the weekend.',
			source: 'theverge.com',
			likes: 480,
			comments: 20,
			shares: 91,
			dateTime: new Date().toString()
		}
	]
}

const dummyPost = {
			id: 'default',
			title: 'The Verge',
			timePosted: '13 hrs',
			subtitle: 'Jar Jar is marked for death',
			summaryTitle: 'Swimming dog taken by shark at Sydney beach.',
			summary: 'Swimmers and pet owners are being warned stay away from a south Sydney beach after a dog was taken by a shark while swimming off shore on the weekend.',
			source: 'theverge.com',
			likes: 480,
			comments: 20,
			shares: 91
		};

superagent
	.get(`https://api.imgur.com/3/account/${config.account_username}/albums/0`)
	.set('Authorization', `${config.token_type} ${config.access_token}`)
	.end((err, res) => {
		if(err) {
			console.log('probelm in fetching the default state from imgur!!');
			return ;
		}
		
		const { id } = res.body.data.find(album => album.title === config.album_name);

		superagent
			.get(`https://api.imgur.com/3/account/${config.account_username}/album/${id}`)
			.set('Authorization', `${config.token_type} ${config.access_token}`)
			.end((err, res) => {
				if(err){
					console.log('probelm in fetching album images from imgur!!');
					return ;
				}

				const images = res.body.data.images;
				const posts = images.map(image => Object.assign(dummyPost, { image: image.link }));
				console.log('posts', posts);
			});
	});

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