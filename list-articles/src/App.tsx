
import { type JSX } from 'react'
import './App.css'
import './index.css'

import ProductPage from './pages/productPage'

function App(): JSX.Element {
  return (
    <div className="flex">
      <ProductPage />
    </div>
  )
}

export default App