import { useGlobalContext } from './context'
function Stories() {
  const { hits, isLoading, removePost, isError } = useGlobalContext()

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    )
  }

  if (isError) {
    return (
      <>
        <h2>Error in Fetching Data</h2>
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
                <a href={url} target='_blank' rel='noreferrer'>
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
