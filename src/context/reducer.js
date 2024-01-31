const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      }

    case 'GET_STORIES':
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false,
        isError: false,
      }
    case 'GET_ERRORS':
      return {
        isLoading: false,
        isError: true,
      }

    case 'REMOVE_POST':
      return {
        ...state,
        hits: state.hits.filter(
          (currElement) => currElement.objectID !== action.payload
        ),
      }
    case 'SEARCH_POST':
      return {
        ...state,
        query: action.payload,
      }

    case 'PREV_PAGE':
      let pageNum = state.page
      if (pageNum <= 0) {
        pageNum = 0
      } else {
        pageNum = pageNum - 1
      }
      return {
        ...state,
        page: pageNum,
      }

    case 'NEXT_PAGE': {
      let pageNum = state.page
      if (pageNum >= state.nbPages) {
        pageNum = 0
      } else {
        pageNum = pageNum + 1
      }
      return {
        ...state,
        page: pageNum,
      }
    }
  }
  return state
}

export default reducer
