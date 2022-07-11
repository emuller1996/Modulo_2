import { ADD_MOVIE_FAVORITE ,  GET_MOVIES, GET_MOVIE_DETAIL } from "../actions/index";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MOVIE_FAVORITE) {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.concat(action.payload),
    };
  }
  if (action.type === GET_MOVIE_DETAIL) {
    return {
      ...state,
      movieDetail: action.payload,
    };
  }
  if (action.type === GET_MOVIES) {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  }
  return state;
}

export default rootReducer;
