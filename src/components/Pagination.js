import React from 'react'
import { useGlobalContext } from '../context/context'

function Pagination() {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext()
  return (
    <>
      <div className=' pagination-container'>
        <button onClick={() => getPrevPage()} className='btn'>
          {' '}
          PREV{' '}
        </button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()} className='btn'>
          {' '}
          NEXT{' '}
        </button>
      </div>
    </>
  )
}

export default Pagination
