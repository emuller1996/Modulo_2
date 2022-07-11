import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFav} from "../../actions/index"

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
          this.props.movies && this.props.movies.map( m => 
            <li key={m.id}>
              <Link to={`/movie/${m.id}`}>
                {m.title}
              </Link>
              <button onClick={()=>{this.props.removeMovieFav(m.imdbID)}}>X</button>
            </li>
          ) 
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    movies: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch){
  return {
    removeMovieFav : (id)=> dispatch(removeMovieFav(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
