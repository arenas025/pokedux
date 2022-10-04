import { SET_POKEMON, SET_LOADING, SET_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/type"

export const initialState = {
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
            const favoritePokemons = newPokemons.filter(item => item.favorite === true)
            return{
                ...state,
                pokemons: newPokemons,
                favorites: favoritePokemons
            }
        case SET_LOADING:
            return{
                ...state,
                loading: action.payload
            }
        case REMOVE_FROM_FAVORITES:
            const indexFavorite = state.favorites.findIndex((item) => item.name === action.payload)
            const indexPokemon = state.pokemons.findIndex((item) => item.name === action.payload)
            state.favorites.splice([indexFavorite], 1)
            state.pokemons[indexPokemon].favorite = false

            return{
                ...state,
                favorites: state.favorites,
                pokemons: state.pokemons
            }
        default:
            return state
    }
}