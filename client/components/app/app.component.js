
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

		const titleStyle = {
			textAlign: 'center',
			textTransform: 'uppercase',
			fontFamily: 'sans-serif',
			fontSize: '1.3em',
			fontWeight: 'bold'
		};

		return (
			<div>
				<p style={titleStyle}>the wall</p>
				<div style={postStyle}>
					<Post />
				</div>
			</div>
		);
	}
}

export default App;