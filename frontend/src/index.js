import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Enables hot-reloading per-component (ie., when changes are made 
// only the component affected is refreshed, not the entire page.
if (module.hot) {
    module.hot.accept();
}
