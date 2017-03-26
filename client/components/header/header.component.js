
import React from 'react';

import pencilIcon from './assets/images/pencil.png';
import imageIcon from './assets/images/image.png';

import './assets/css/style.css';
import colors from '../colors.js';
import fonts from '../fonts.js';

class Header extends React.Component {

	render(){

		const container = {
			backgroundColor: '#fff',
			padding: '20px',
			outline: `2px solid ${colors.background}`
		};

		const subContainer = {
			padding: 3
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
			verticalAlign: 'center',
			marginRight: 7
		};

		const verticalSeperator = {
			height: '100%',
			width: 0,
			display: 'inline',			
			borderLeft: `1px solid ${colors.background}`
		};

		const horizontalSeperator = {
			width: '99%',
			marginLeft: 3,
			marginRight: 2,
			color: colors.background		
		};

		const messageBox = {
			padding: 7
		};
		const messageBoxInput = {
			border: '0px',
			fontWeight: 'bold',
			fontSize: '1.3em',
			height: 40,
			width: '100%'
		}

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
					<input onClick={this.messageBoxClicked} className="messageInputBox"  type="text" placeholder="What's on your mind? Tell me :W" ref="message" />
				</div>
			</div>
		);
	}

	messageBoxClicked(){
		console.log();
	}
}

export default Header;