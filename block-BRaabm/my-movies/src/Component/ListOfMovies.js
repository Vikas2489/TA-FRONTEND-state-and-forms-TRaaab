import React from 'react';
import movies from '../data';

class ListOfMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: '',
      isMouseOverAnyMovie: false,
      moreInfoIsClickedOrNot: false,
    };
  }
  changeMouseHoverToTrue = (i) => {
    this.setState({
      activeIndex: i,
      isMouseOverAnyMovie: true,
    });
  };

  changeMouseLeaveToFalse = () => {
    this.setState({
      activeIndex: '',
      isMouseOverAnyMovie: false,
    });
  };

  changeMoreInfoToClicked = () => {
    this.setState({
      moreInfoIsClickedOrNot: true,
      activeIndex: this.state.activeIndex,
      isMouseOverAnyMovie: this.state.isMouseOverAnyMovie,
    });
  };

  renderMoreInfo = () => {
    let index = this.state.activeIndex;
    let activeMovie = movies[index];
    return (
      <div className="text-white flex justify-between container p-4 w-4/5 m-auto">
        <div className="basis-3/4">
          <p className="my-4 text-slate-300 text-xl">
            Director : {activeMovie.Director}
          </p>
          <p className="my-4 text-slate-300 text-xl">
            Writer : {activeMovie.Writer}
          </p>
          <p className="my-4 text-slate-300 text-xl">
            imdbRating : {activeMovie.imdbRating}
          </p>
          <p className="my-4 text-slate-300 text-xl">
            Runtime : {activeMovie.Runtime}
          </p>
        </div>
        <button
          onClick={() => {
            this.setState({
              moreInfoIsClickedOrNot: false,
              activeIndex: this.state.activeIndex,
              isMouseOverAnyMovie: this.state.isMouseOverAnyMovie,
            });
          }}
          style={{ background: '#f6c932' }}
          className="font-bold hover:text-yellow-100 h-6 rounded-lg  px-2 py-5 flex justify-center items-center leading-6 cursor-pointer text-black"
        >
          Close
        </button>
      </div>
    );
  };

  render() {
    return this.state.moreInfoIsClickedOrNot ? (
      this.renderMoreInfo()
    ) : (
      <div className="container p-4 w-4/5 m-auto">
        <h1
          className="font-bold text-2xl  my-7 text-center rounded-lg py-1"
          style={{ background: '#F6C932' }}
        >
          IMDb "Top Movies" (Sorted by Number of Votes Ascending)
        </h1>
        <article className="flex justify-between flex-wrap items-start">
          {movies.map((movie, i) => {
            return (
              <div
                key={movie.imdbID}
                style={{ border: '2px solid #E8E8E8', borderRadius: '12px' }}
                className=" my-8 basis-80 space-x-2 p-4 rounded-lg"
                onMouseEnter={() => this.changeMouseHoverToTrue(i)}
                onMouseLeave={() => this.changeMouseLeaveToFalse()}
              >
                <figure>
                  <img
                    className=" w-50 object-scale-down rounded"
                    src={movie.Poster}
                    alt="movie-first"
                  />
                  <figcaption className="text-white text-lg underline my-2 font-semibold">
                    {movie.Title}
                  </figcaption>
                </figure>
                <p className="my-2 text-white ">
                  Realsed Date:-{movie.Released}
                </p>
                <button
                  onClick={this.changeMoreInfoToClicked}
                  style={{ background: '#f6c932' }}
                  className={
                    this.state.activeIndex === i
                      ? this.state.isMouseOverAnyMovie
                        ? '  py-1 px-5 font-bold text-sm rounded-lg'
                        : 'hidden'
                      : 'hidden'
                  }
                >
                  More Info
                </button>
              </div>
            );
          })}
        </article>
      </div>
    );
  }
}

export default ListOfMovies;
