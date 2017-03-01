
import React from 'react';

import pencilIcon from './assets/images/pencil.png';
import imageIcon from './assets/images/image.png';

import css from './assets/css/style.css';

class Post extends React.Component {

	render(){

		const container = {
			backgroundColor: '#fff',
			padding: '10px',
			outline: '2px solid #e6e6e6'
		};

		const subContainer = {

		};

		const headers = {
			display: 'inline-block',
			padding: 5,
			marginRight: 10
		}

		const verticalSeperator = {
			height: '100%',
			width: 0,
			//borderLeft: '10px solid black'
			borderLeft: '1px solid #e6e6e6'
		};

		const horizontalSeperator = {
			width: '100%',
			color: '#e6e6e6'		
		};

		const messageBox = {
			padding: 10,
		};
		const messageBoxInput = {
			border: '0px',
			fontWeight: 'bold',
			fontSize: '1em'
		};

		return (
			<div style={container}>
				<div style={subContainer}>
					<div style={headers}>
						<img src={pencilIcon} />
						<strong>Update Status</strong>
					</div>
					<div style={Object.assign(verticalSeperator, headers)} />
					<div style={headers}>
						<img src={imageIcon} />
						<strong>Add Photos/Video</strong>
					</div>
				</div>
				<hr style={horizontalSeperator}></hr>
				<div style={messageBox}>
					<input style={messageBoxInput} type="text" placeholder="What's on your mind?" ref="message" />
				</div>
			</div>
		);
	}
}

export default Post;