
import React from 'react';
import Post from './post.component';

class App extends React.Component {
	render(){
		const style = {
			backgroundColor: '#e6e6e6'
		};

		return (
			<div style={style}>
				<Post />
			</div>
		);
	}
}

export default App;