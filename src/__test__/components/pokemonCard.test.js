import React from "react";
import {render, fireEvent} from '@testing-library/react'
import { prettyDOM } from "@testing-library/dom";
import ProviderMock from "../__mocks__/providerMock"; 
import PokemonCard from "../../Components/PokemonCard";
import pokemonMock from '../__mocks__/pokemonMock'
import IconSelect from '../../Components/IconSelect'

describe('<pokemonCard/>',()=>{
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))})})
  it('Render', ()=>{
    const pokemonCard = render(
    <ProviderMock>
      <PokemonCard pokemon={pokemonMock}/>
    </ProviderMock>)
    pokemonCard.getByText('Main Abilities')
  })
  it('clicker set favorites', () => {
    const mockHandler = jest.fn()
    const iconSelect = render (
      <IconSelect isFavorite={true} onClick={mockHandler}/>
    )
    const buttonClick = iconSelect.container.querySelector('button')
    fireEvent.click(buttonClick)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})