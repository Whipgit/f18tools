import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Redux/index'
import './App.css'

import Favicon from 'react-favicon'
import fav from './favicon.png'

import HelmetComponent from './Components/Helmet/HelmetComponent'
import Reciprocal from './Components/Reciprocal/Reciprocal'

const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => (
  <div className="App">
    <Favicon url={[fav]} />
    <HelmetComponent />
    <Reciprocal />
  </div>
)

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
export default AppWithStore
