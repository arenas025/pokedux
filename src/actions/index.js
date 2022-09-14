import { SET_POKEMON, SET_LOADING, SET_FAVORITES } from "./type";
import { getPokemonDetails } from "../api";


export const setPokemons = (payload) => ({
    type: SET_POKEMON,
    payload 
})

export const setFavorites = (payload) => ({
    type: SET_FAVORITES,
    payload
})

export const setLoading =(payload) => ({
    type: SET_LOADING,
    payload
})

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    const responseWithDetails = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon) ))
    dispatch(setPokemons(responseWithDetails))
}
