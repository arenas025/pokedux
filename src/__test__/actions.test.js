import {setFavorites, setLoading, setPokemons} from '../actions/'
import { SET_FAVORITES, SET_LOADING, SET_POKEMON } from '../actions/type'
import pokemonMock from './__mocks__/pokemonMock'

describe('Actions', ()=>{
  const payload = pokemonMock
  it('setPokemons',()=>{
    const expected = {
      type: SET_POKEMON,
      payload
    }
    expect(setPokemons(payload)).toEqual(expected)
  })

  it('setFavorites',()=>{
    const expected = {
      type: SET_FAVORITES,
      payload
    }
    expect(setFavorites(payload)).toEqual(expected)
  })

  it('setLoading',()=>{
    const expected ={
      type: SET_LOADING,
      payload
    }
    expect(setLoading(payload)).toEqual(expected)
  })
})