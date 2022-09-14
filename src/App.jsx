import './App.scss'
import { useEffect, useState } from "react";
import { getPokemon } from "./api";
import { getPokemonsWithDetails, setLoading } from './actions';
import { useSelector, useDispatch } from "react-redux";
import PokemonList from './Components/PokemonList';
import Col from 'antd/es/grid/col';
import { Spin } from 'antd';
import {StarFilled, CloseCircleFilled} from '@ant-design/icons'
import Searcher from './Components/Searcher'; 
import PokemonCardFavorite from './Components/PokemonCardFavorite';

function App() {

  const pokemons = useSelector((state) => state.pokemons)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  const favorites = pokemons.filter(item => item.favorite === true)

  useEffect((() => {
    const responsePokemon = async()=>{
      dispatch(setLoading(true))
      const response = await getPokemon()
      dispatch(getPokemonsWithDetails(response))
      dispatch(setLoading(false))
    }
    responsePokemon()
    }),[])

    useEffect(()=>{
      console.info(favorites)
    },[favorites])

    const[inputValue, setInputValue] = useState('')

    const pokemonsFiltered = inputValue !== undefined && pokemons.filter(item => {
      return inputValue && item.name.toLowerCase().includes(inputValue.toLowerCase())
    })

    const [isFavoritesShown, setIsFavoritesShown] = useState(false)

  return (
    <div className="App">
    <Col span={4} offset={10} style={{marginTop :'10px', marginBottom:'10px'} }>
      <img src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg" alt="Pokelogo" />
      </Col>
      <div className='Header__main'>
        <Searcher setInputValue={setInputValue}/>
        <div className='Header__main__favorite' onClick={()=>{
          setIsFavoritesShown(true)
        }}>
          <p>Favorites</p>
          <StarFilled className='icon'/>
        </div>
      </div>
      {loading 
      ? 
      <Col offset={12}>
        <Spin spinning size='large'/>
      </Col>
      : <PokemonList pokemons={inputValue === '' ? pokemons : pokemonsFiltered}/>}
      {isFavoritesShown && <div className='modal'>
        <div className='modal--content'>
          <header className='modal--content__header'>
            <p className='modal--content__header__text'>
              Your favorite pokemons
            </p>
            <CloseCircleFilled
            onClick={()=>{
              setIsFavoritesShown(false)
            }}
            className='modal--content__header__close'/>
          </header>
          <main className='modal--content__main'>
          {favorites.map(pokemon => (
            <PokemonCardFavorite pokemon={pokemon}/>
          ))}
          </main>
        </div>
      </div>}
    </div>
  )
}

export default App
