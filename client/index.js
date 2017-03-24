import React from  'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader'; 
import App from './components/app/app.component';

import { reducers } from './reducers';

const store = createStore(reducers);
console.log('store --> ', store);
store.dispatch({type: 'LIKE'});

const Wall = () => (
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
);

ReactDOM.render(
  <Wall />,
	document.getElementById('react-app')
);

if (module.hot) {
   module.hot.accept('./components/app/app.component.js', () => {
     const App = require('./components/app/app.component.js').default;
     ReactDOM.render(
     	<Wall />, 
     	document.getElementById('react-app')
     );
   });
 }