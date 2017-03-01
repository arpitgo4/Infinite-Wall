
import React from 'react';
import Header from '../header/header.component';

import colors from '../colors.js';
import fonts from '../fonts.js';

class App extends React.Component {
	render(){
		const headerStyle = {
			backgroundColor: colors.background,
			paddingTop: '6px',
			paddingLeft: '10px',
			paddingRight: '10px',
			paddingBottom: '6px'
		};

		const titleStyle = {
			textAlign: 'center',
			textTransform: 'uppercase',
			fontFamily: 'sans-serif',
			fontSize: '1.3em',
			fontWeight: 'bold'
		};

		const bodyStyle = {
			fontFamily: fonts.linkFont
		};

		return (
			<div style={bodyStyle}> 
				<p style={titleStyle}>the wall</p>
				<div style={headerStyle}>
					<Header />
				</div>				
			</div>
		);
	}
}

export default App;