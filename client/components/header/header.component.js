
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
		};

		return (
			<div style={container}>
				<div style={subContainer}>
					<div style={Object.assign(headers)}>
						<img style={iconStyle} src={pencilIcon} />
						<a href="javascript:void(0)" style={headers.updateStatus}>Update Status</a>
					</div>
					<div style={Object.assign(verticalSeperator, {marginRight: 10})} />
					<div style={Object.assign(headers)}>
						<img style={iconStyle} src={imageIcon} />
						<a href="javascript:void(0)" style={headers.addPhotos} onClick={() => this.postStatus()}>Add Photos/Video</a>
					</div>
				</div>
				<hr style={horizontalSeperator}></hr>
				<div style={messageBox}>
					<span data-toggle="collapse" data-target="#collapseForm" href="javascript:void(0)">
						<input onClick={this.messageBoxClicked} className="messageInputBox" type="text" placeholder="What's on your mind?" ref="status" />
					</span>
					<div id="collapseForm" className="collapse">
						<div className="row">
							<div className="inputBox">
								<input type="text" ref="title" placeholder="Title" className="messageInputBox" />
							</div>
							<div className="inputBox">
								<input type="text" ref="subtitle" placeholder="Subtitle" className="messageInputBox" />
							</div>
							<div className="inputBox">
								<input type="file" ref="image" placeholder="image upload" ref="image"  className="messageInputBox" />
							</div>
							<div className="inputBox">
								<input type="text" ref="descTitle" placeholder="Description Title" className="messageInputBox" />
							</div>
							<div className="inputArea">
								<textarea type="textarea" ref="desc" placeholder="Description" className="messageInputBox" />
							</div>
							<div className="inputBox">
								<input type="text" ref="source" placeholder="Source of this post" className="messageInputBox" />
							</div>
							<div className="col-sm-2 col-sm-offset-11">
								<a href="#collapseForm" data-toggle="collapse">
									<button className="btn btn-primary btn-sm"
										onClick={this.postStatus.bind(this)}>Post</button>
								</a>	
							</div>
						</div>						
					</div>
				</div>
			</div>
		);
	}

	postStatus() {		
		//this.clearInputFields();
		this.context.store.dispatch({ 
			type: 'POST_STATUS', 
			post: {
				id: Math.ceil(Math.random() * 10e6),
				title: this.refs.title.value,
				timePosted: '13 hrs',
				subtitle: this.refs.subtitle.value,
				image: 'http://i.imgur.com/Y2Z10CZ.jpg',
				summaryTitle: this.refs.descTitle.value,
				summary: this.refs.desc.value,
				source: this.refs.source.value,
				likes: 0,
				comments: 0,
				shares: 0,
				dateTime: new Date().toString()
			} 
		});
	}

	clearInputFields() {
		for(let key in this.refs){		
			if(this.refs[key].value)
				this.refs[key].value = '';
		}
	}

	messageBoxClicked(){
		
	}
}

Header.contextTypes = {
	store: React.PropTypes.object
};

export default Header;