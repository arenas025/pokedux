import { SET_FAVORITES, SET_LOADING, SET_POKEMON } from "../actions/type";
import { pokemonsReducer } from "../reducers/pokemons";
import pokemonMock from "./__mocks__/pokemonMock";

describe('actions',()=>{
  const payload = pokemonMock
  it('SET_POKEMONS',()=>{
    
    const initialState = {
      pokemons:[],
      loading:false,
      favorite:[]
    }

    const action = {
      type: SET_POKEMON,
      payload
    }

    const expected = {
      ...initialState,
      pokemons:payload
    }

    expect(pokemonsReducer(initialState,action)).toEqual(expected)
    expect(pokemonsReducer({},'')).toEqual({})
  })

  it('SET_LOADING',()=>{
    const initialState = {
      pokemons:[],
      loading:false,
      favorite:[]
    }
    const payload = true
    const action = {
      type: SET_LOADING,
      payload
    }
    const expected = {
      ...initialState,
      loading:true
    }
    expect(pokemonsReducer(initialState,action)). toEqual(expected)
  })

  it('SET_FAVORITES',()=>{
    const payload = 1
    const initialState = {
      pokemons:[pokemonMock],
      loading: false,
      favorites:[]
    }

    const newPokemon = {
      ...pokemonMock,
      favorite: true
    }
    const action ={
      type:SET_FAVORITES,
      payload
    }

    const expected = {
      ...initialState,
      pokemons:[newPokemon],
      favorites: [newPokemon]
    }
    expect(pokemonsReducer(initialState,action)).toEqual(expected)
  })
})