#Weather App - Followed Stephen Garder's Udemy Course#

##Introduction##

Let's begin with the app structure:
```
├── Weather App
├──── actions                    # Test files (alternatively `spec` or `tests`)
│     ├── index.js
├──── components                    # Test files (alternatively `spec` or `tests`)
│     ├── app.js		# Load and stress tests
│     ├── chart.js         # End-to-end, integration tests (alternatively `e2e`)
│     └── google_map.js
├──── containers                    # Test files (alternatively `spec` or `tests`)
│     ├── search_bar.js
│     ├── weather_list.js
├──── reducers                    # Test files (alternatively `spec` or `tests`)
│     ├── index.js
│     ├── reducer_weather.js
├──── index.js				// 
└── style				// Style folder that contains the style.css file for custom styling
├──── style.css				// Place custom style here
├── test				// Test Folder
```



###Introduction###
The goal is to relate the code I wrote and structure and present it clearly. Furthermore, connect certain code to concepts discussed in the official documentation.

Explain the app structure and what goes where. 


1. Redux Documentation
2. React Documentation
3. Glossary

###Running the App###
The webpack configuration file has multiple entry points. When we first run our app, it needs to know what file to run first. In order to figure this out, when we first run our app, we define an entry point, a path to the file that we want to run first, which is the `src/index.js file.`

###Exploring src/index.js###

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  document.querySelector('.container'));
```
