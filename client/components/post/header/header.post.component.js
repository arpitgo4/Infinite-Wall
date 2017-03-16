
import React from 'react';

import colors from '../../colors.js';

import titleIcon from './assets/images/title_icon.png';
import globeIcon from './assets/images/earth-globe.png';
import downArrowIcon from './assets/images/down-arrow.png';

export default class PostHeader extends React.Component {

	constructor(props){
		super(props);
		this.id = props.id || 'default';
	}

	componentWillMount(){
		this.store = this.context.store;
		this.store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount(){
		this.store.unsubscribe();
	}

	render(){

		const post = this.store.getState().posts.find(post => post.id === this.id);

		return (
		<div>
			<div style={stylesheet.headerContainer} id="headerContainer">
					<div id="header">
						<div style={stylesheet.iconContainer} id="iconContainer">
							<img style={stylesheet.titleIcon} src={titleIcon} />
						</div>
						<div style={stylesheet.headerInfoContainer}>
							<div style={stylesheet.titleContainer} id="titleContainer">
								<p style={stylesheet.title} >{post.title}</p>
								<img onClick={this.optionsClicked} style={stylesheet.optionsIcon} src={downArrowIcon} />
							</div>
							<div style={stylesheet.titleInfoContainer} id="titleInfoContainer">
								<p style={stylesheet.titleTime} id="titleTime">{post.timePosted}</p>
								&nbsp;<p style={stylesheet.titleDot}>.</p>
								&nbsp;<img style={stylesheet.globeIcon} src={globeIcon} id="globeIcon" />
							</div>
						</div>						
					</div>					
				</div>
				<div style={stylesheet.postHeadingContainer} id="postHeadingContainer">
						<p style={stylesheet.postHeading} id="postHeading">{post.subtitle}</p>
				</div>				
		</div>
		);
	}

	optionsClicked(){
		console.log('this options needed!');
	}
}

PostHeader.contextTypes = {
	store: React.PropTypes.object
};

const stylesheet = {
	iconContainer: {
		border: `1px solid ${colors.background}`,
		height: 60,
		width: 60,
		paddingTop: 10,
		paddingLeft: 10,
		display: 'inline-block'
	},
	headerInfoContainer: {
		display: 'inline-block',
		marginLeft: 10
	},
	titleIcon: {
		height: 50,
		width: 50,
		align: 'center'
	},
	headerContainer: {
		padding: '20px 20px 20px 20px'
	},
	title: {
		color: 'blue',
		fontWeight: 'bold',
		display: 'inline',
		fontSize: '1.5em'
	},
	optionsIcon: {
		float: 'right',
		position: 'absolute',
		right: 65
	},
	titleContainer: {
	},
	titleInfoContainer: {
		
	},
	titleTime: {
		display: 'inline',
		color: `${colors.bodyLinks}`,
		fontWeight: 'bold'
	},
	titleDot: {
		display: 'inline',
		color: `${colors.bodyLinks}`,
		fontWeight: 'bold',
		position: 'relative',
		bottom: 5
	},
	globeIcon: {

	},
	postHeadingContainer: {
		margin: '10px 0px 10px 25px'	
	},
	postHeading: {
		fontSize: '1.2em',
		marginBottom: 7
	}
};