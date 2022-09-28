import {CloseOutlined} from "@ant-design/icons"
import { useDispatch } from "react-redux"
import './PokemonCardFavorite.scss'
import {removeFromFavorites} from "../../actions"

const PokemonCardFavorite = ({pokemon}) => {

    const dispatch = useDispatch()

    return(
        <div className="pokemonCardFavorite">
            <img className="pokemonCardFavorite__img" src={pokemon.sprites.front_default}/>
            <p className="pokemonCardFavorite__text"> {pokemon.name} </p>
            <CloseOutlined className="pokemonCardFavorite__icon" onClick={()=> dispatch(removeFromFavorites(pokemon.name))}/>
        </div>
    )
}

export default PokemonCardFavorite