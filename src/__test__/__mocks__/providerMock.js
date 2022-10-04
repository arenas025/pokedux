import React from "react";
import { legacy_createStore as createStore} from 'redux'
import { Provider } from "react-redux";
import {initialState, pokemonsReducer} from '../../reducers/pokemons'

const store = createStore(pokemonsReducer, initialState)

const ProviderMock = (props) => { 
  return (
  <Provider store={store} >
    {props.children}
  </Provider>
  )
}

export default ProviderMock