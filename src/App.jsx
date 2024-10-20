import { useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

import { StylesGlobal } from '../src/stylesGlobal'
import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <StylesGlobal />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App
