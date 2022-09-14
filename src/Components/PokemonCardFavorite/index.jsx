import {CloseOutlined} from "@ant-design/icons"
import './PokemonCardFavorite.scss'

const PokemonCardFavorite = ({pokemon}) => {
    return(
        <div className="pokemonCardFavorite">
            <img className="pokemonCardFavorite__img" src={pokemon.sprites.front_default}/>
            <p className="pokemonCardFavorite__text"> {pokemon.name} </p>
            <CloseOutlined className="pokemonCardFavorite__icon"/>
        </div>
    )
}

export default PokemonCardFavorite