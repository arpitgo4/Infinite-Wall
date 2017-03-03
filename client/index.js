import React from  'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.component';

ReactDOM.render(
	<App />, 
	document.getElementById('react-app')
);

if (module.hot) {
	console.log("hot mode enabled!!");
   module.hot.accept('./components/app/app.component.js', () => {
     const App = require('./components/app/app.component.js').default;
     ReactDOM.render(<App />, document.getElementById('react-app'));
   });
 }