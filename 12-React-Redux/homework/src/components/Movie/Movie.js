import React from "react";
import { connect } from "react-redux";
import { getMoviesDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id);
  }

  render() {
    return (
      <>
        <div className="movie-detail">Detalle de la pelicula</div>
        <div>
            <h1>{this.props.movieDetalle.Title}</h1>
            <img src={this.props.movieDetalle.Poster}  alt="as" />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieDetalle: state.movieDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (id) => dispatch(getMoviesDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
