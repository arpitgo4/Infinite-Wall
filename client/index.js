import React from  'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader'; 
import App from './components/app/app.component';

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>, 
	document.getElementById('react-app')
);

if (module.hot) {
	console.log("hot mode enabled!!");
   module.hot.accept('./components/app/app.component.js', () => {
     const App = require('./components/app/app.component.js').default;
     ReactDOM.render(
     	<AppContainer>
     		<App />
     	</AppContainer>, 
     	document.getElementById('react-app')
     );
   });
 }