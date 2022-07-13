import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
// import * as actions from './actions';
import { Provider } from 'react-redux';

import App from './components/App';

const store = createStore(reducer);

// const { dispatch, subscribe, getState } = store;
// const {inc, dec, rnd} = bindActionCreators(actions, dispatch);


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
  )

// update();
// subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }




