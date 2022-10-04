import React from "react";
import '@testing-library/react/'
import { render} from '@testing-library/react'
import Searcher from "../../Components/Searcher";


describe('<Searcher/>',()=>{
  it('Render',()=>{
    const searcher = render(<Searcher/>)
    const elemento = searcher.container.querySelector('input')
    expect(elemento.placeholder).toMatch('Buscar')
  })
  }
)