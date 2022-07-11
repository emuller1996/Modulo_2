export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES";
export const REMOVE_MOVIE_FAV = "REMOVE_MOVIE_FAV";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";

export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVORITE, payload };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=33084a5d&s=" + titulo)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export function removeMovieFav(payload){
    return { type : REMOVE_MOVIE_FAV, payload}
}

export function getMoviesDetail(id) {
    return function (dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=33084a5d&i=" + id)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: GET_MOVIE_DETAIL, payload: json });
        });
    };
  }

