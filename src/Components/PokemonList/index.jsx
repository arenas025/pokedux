import PokemonCard from "../PokemonCard";
import { useEffect } from "react";
import './PokemonList.scss'


const PokemonList = ({pokemons, searcherValue}) => {

    return(
        <div className="pokemonList">
            {pokemons.length !== 0 | searcherValue === '' 
                ? pokemons.map((item) =>{
                return(
                    <PokemonCard pokemon={item} key={item.name}/>
                )
            })
            :<div className="nullPokemon">
                <p className="nullPokemon__text">
                    Oh, it seems we don't have that pokemon!
                </p>
            </div>}
        </div>
    )
}

export default PokemonList




