import axios from "axios";

export const getPokemon = () => {
    return(axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res)=>{
        return res.data.results
    })
    .catch((err) => console.info(err)))
}

export const getPokemonDetails = async (pokemon) => {
    try {
        const res = await (axios.get(pokemon.url));
        return res.data;
    } catch (err) {
        return console.error(err);
    }
}