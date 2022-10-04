import {Card, Col, Row} from 'antd'
import IconSelect from '../IconSelect'
import './PokemonCard.scss'
import { useDispatch } from 'react-redux'
import { setFavorites } from '../../actions'

const PokemonCard = ({pokemon}) => {
    
    const dispatch = useDispatch()

    const pokemonAbilities = pokemon.abilities 

    const pokemonName = pokemon.name

    const pokemonImg = pokemon.sprites.front_default

    const pokemonId = pokemon.id

    const pokemonIsFavorite = pokemon.favorite



    return(
        <Card className='pokemonCard' style={{width:300}}
            title= {pokemonName}
            key ={pokemonName}
            cover={<img src= {pokemonImg} alt={pokemonName} />}
            extra={<IconSelect
            onClick={()=>{
                dispatch(setFavorites(pokemonId))
            }}
                isFavorite={pokemonIsFavorite}
            />
            }
            >
            <p className='abilitiesTitle'>Main Abilities</p>
            <Row>
                {pokemonAbilities.length === 1 
                ? <Col className='abilitie1' span={24}>{pokemonAbilities[0].ability.name}</Col>
                : pokemonAbilities.length === 2
                    ? <>
                        {pokemonAbilities.map(item => (
                            <Col className='abilitie2' span={12}> {item.ability.name}</Col>
                        ))}
                    </>
                    :<>
                        {pokemonAbilities.map(item => (
                            <Col className='abilitie3' span={8}> {item.ability.name}</Col>
                        ))}
                        </> }
            </Row>
        </Card>
    )
}

export default PokemonCard

