import NewsCard from './components/NewsCard'
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
            <NewsCard
              key={objectID}
              title={title}
              author={author}
              removePost={removePost}
              id={objectID}
              newsUrl={url}
            />
          </>
        )
      })}
    </div>
  )
}

export default Stories
