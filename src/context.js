//context Api
import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

let API = 'https://hn.algolia.com/api/v1/search?'

//intital data
const intialState = {
  isLoading: true,
  query: '',
  nbPages: 0,
  page: 0,
  hits: [],
}

//context creation
const AppContext = React.createContext()

//create provider function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState)

  const fetchApiData = async (url) => {
    dispatch({
      type: 'SET_LOADING',
    })
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      dispatch({
        type: 'GET_STORIES',
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      })
    } catch (error) {
      //get error
      console.log(error)
    }
  }

  const removePost = (post_ID) => {
    dispatch({
      type: 'REMOVE_POST',
      payload: post_ID,
    })

    console.log(post_ID)
  }

  const searchPost = (searchQuery) => {
    dispatch({ type: 'SEARCH_POST', payload: searchQuery })
  }

  const getPrevPage = () => {
    dispatch({
      type: 'PREV_PAGE',
    })
  }

  const getNextPage = () => {
    dispatch({
      type: 'NEXT_PAGE',
    })
  }

  useEffect(() => {
    let timeoutId

    timeoutId = setTimeout(
      () => fetchApiData(`${API}query=${state.query}&page=${state.page}`),
      1000
    )
    return () => {
      clearTimeout(timeoutId)
    }
  }, [state.query, state.page])

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  )
}

//create custome hook for better code visibility
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
