/* eslint-disable require-jsdoc */
import './App.css';
import React from 'react';
import {Provider} from 'react-redux';
import store from './Reducer/BreakingBadStore';
import InitialPage from './Components/InitialPage';

function App() {
  return (
    <div className="App">
      <main id="content">
        <Provider store={store}>
          <InitialPage/>
        </Provider>
      </main>
    </div>
  );
}

export default App;
