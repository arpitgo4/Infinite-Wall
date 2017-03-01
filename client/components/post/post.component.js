
import React from 'react';

import pencilIcon from './assets/images/pencil.png';
import imageIcon from './assets/images/image.png';

import css from './assets/css/style.css';
import colors from '../colors.js';
import fonts from '../fonts.js';

class Post extends React.Component {

	render(){

		const container = {
			backgroundColor: '#fff',
			padding: '10px',
			outline: `2px solid ${colors.background}`
		};

		const subContainer = {

		};

		const headers = {
			display: 'inline-block',
			marginRight: 10,
			updateStatus: {
				color: colors.activeLink,
				textDecoration: 'none',
				fontWeight: 'bold'
			},
			addPhotos: {
				color: colors.unactiveLink,
				textDecoration: 'none',
				fontWeight: 'bold'
			}
		};

		const iconStyle = {
			verticalAlign: 'middle'
		};

		const verticalSeperator = {
			height: '100%',
			width: 0,
			display: 'inline',			
			borderLeft: `1px solid ${colors.background}`
		};

		const horizontalSeperator = {
			width: '100%',
			color: colors.background		
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
					<div style={Object.assign(headers)}>
						<img style={iconStyle} src={pencilIcon} />
						<a href="#" style={headers.updateStatus}>Update Status</a>
					</div>
					<div style={Object.assign(verticalSeperator, {marginRight: 10})} />
					<div style={Object.assign(headers)}>
						<img style={iconStyle} src={imageIcon} />
						<a href="#" style={headers.addPhotos}>Add Photos/Video</a>
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