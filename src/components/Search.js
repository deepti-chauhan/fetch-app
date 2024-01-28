import React from 'react'
import { useGlobalContext } from '../context/context'
function Search() {
  const { query, searchPost } = useGlobalContext()

  return (
    <>
      <div className='search'>
        <h1>Newstalgia</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type='text'
              placeholder='search your topic...'
              value={query}
              onChange={(e) => searchPost(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Search
