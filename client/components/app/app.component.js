
import React from 'react';
import Post from '../post/post.component';

class App extends React.Component {
	render(){
		const postStyle = {
			backgroundColor: '#e6e6e6',
			paddingTop: '6px',
			paddingLeft: '10px',
			paddingRight: '10px',
			paddingBottom: '14px'
		};

		return (
			<div style={postStyle}>
				<Post />
			</div>
		);
	}
}

export default App;