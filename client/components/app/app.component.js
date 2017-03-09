
import React from 'react';
import Header from '../header/header.component';
import Post from '../post/post.component';

import colors from '../colors.js';
import fonts from '../fonts.js';

class App extends React.Component {
	render(){
		const headerStyle = {
			paddingTop: '15px',
			paddingLeft: '20px',
			paddingRight: '20px',
			paddingBottom: '15px'
		};

		const titleStyle = {
			textAlign: 'center',
			textTransform: 'uppercase',
			fontFamily: 'sans-serif',
			fontSize: '1.3em',
			fontWeight: 'bold'
		};

		const titleContainer = {
			backgroundColor: 'white'	
		};

		const bodyStyle = {
			fontFamily: fonts.linkFont
			/*width: '60%',     
			marginLeft: '20%'*/
		};

		const contentStyle = {
			backgroundColor: colors.background,
		};

		const postStyle = {
			paddingTop: '15px',
			paddingLeft: '20px',
			paddingRight: '20px',
			paddingBottom: '15px'
		};

		return (
			<div style={bodyStyle}> 
				<div style={titleContainer}>
					<p style={titleStyle}>the wall</p>
				</div>
				<div style={contentStyle}>
					<div style={headerStyle}>
						<Header />
					</div>
					<div style={postStyle}>
						<Post />
					</div>					
				</div>				
			</div>
		);
	}
}

export default App;