import './App.css'
import './Stories'
import Stories from './Stories'
import Search from './Search'
import PaginationBar from './Pagination'

function App() {
  return (
    <div className='App'>
      <Search />
      <PaginationBar />
      <Stories />
    </div>
  )
}

export default App
