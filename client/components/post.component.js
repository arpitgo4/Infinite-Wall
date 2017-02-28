
import React from 'react';

class Post extends React.Component {
	render(){
		return (
			<div>
				<div id="header">
					<div id="update-status">
						<img src="" />
						<strong>Update Status</strong>
					</div>
					<div id="add-photos-videos">
						<img src="" />
						<strong>Add Photos/Video</strong>
					</div>
				</div>
				<div id="message">
					<input type="text" placeholder="What's on your mind?" ref="message" />
				</div>
			</div>
		);
	}
}

export default Post;