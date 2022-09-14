import React from 'react'
import ReactDOM from 'react-dom/client'
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { middleware, number } from './middlewares';
import { compose } from 'redux';
import App from './App'
import './index.css'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhancers = composeAlt(applyMiddleware(thunk, middleware))

const store = createStore(
  pokemonsReducer, composedEnhancers
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
