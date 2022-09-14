import { SET_POKEMON, SET_LOADING, SET_FAVORITES } from "../actions/type"

const initialState = {
    pokemons:[],
    loading: false,
    favorites: []
}

export const pokemonsReducer = (state = initialState, action ) => {
    switch(action.type){
        case SET_POKEMON: 
            return{
                ...state,
                pokemons:action.payload
            }
        case SET_FAVORITES:
            const newPokemons = [...state.pokemons]
            const pokemonIndex = newPokemons.findIndex(pokemon => pokemon.id === action.payload)
            if (pokemonIndex < 0) {
                return {state}
            }
            newPokemons[pokemonIndex].favorite = !newPokemons[pokemonIndex].favorite
            return{
                ...state,
                pokemons: newPokemons
            }
        case SET_LOADING:
            return{
                ...state,
                loading: action.payload
            }
            
        default:
            return state
    }
}