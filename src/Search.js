import React from 'react'
import { useGlobalContext } from './context'
function Search() {
  const { query, searchPost } = useGlobalContext()

  return (
    <>
      <div className='container'>
        <h1>My Technical News Website </h1>
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
