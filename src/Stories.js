import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './context'
function Stories() {
  const { hits, nbPages, isLoading, removePost } = useGlobalContext()

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    )
  }

  return (
    <div className='container'>
      {hits.map((currPost) => {
        const { title, author, objectID, url, num_comments } = currPost
        return (
          <>
            <div className='card' key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments}</span> Comments
              </p>
              <div className='card-btn'>
                <a href={url} target='_blank'>
                  Read More
                </a>
                <a href='#' id='rmv-btn' onClick={() => removePost(objectID)}>
                  Remove
                </a>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Stories
