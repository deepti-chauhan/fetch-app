import { useContext } from 'react'
import './App.css'
import './Stories'
import Stories from './Stories'
import Search from './Search'
import Pagination from './Pagination'
import { useGlobalContext } from './context'

function App() {
  return (
    <div className='App'>
      <Search />
      <Pagination />
      <Stories />
    </div>
  )
}

export default App
