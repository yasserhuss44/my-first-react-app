import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getMovies, deleteMovie } from '../services/fakeMovieService'
import Like from './common/like';
import Table from './common/table';
import { getCurrentPageItems } from './common/pager';
class Movies extends Component {
    state = {
        movies: getMovies(),
        columns: [
            {
                title: '', 
                path: 'title',
                content: (movie) => <NavLink to={`/movie-details/${movie._id}`}>{movie.title}</NavLink>
            },
            {
                title: 'Genre',
                path: 'genre.name',
             },
            {
                title: 'Count',
                path: 'numberInStock',
            },
            {
                title: '',
                path: 'like',
                content: (movie) => <Like movie={movie} ontoggleLike={this.handleToggleLike}></Like>
            },
            {
                title: '',
                path: 'delete',
                content: (movie) => <button movie={movie} onClick={() => this.handleDelete(movie)} className="btn btn-danger">Delete</button>
            }
        ],

    };

    handleDelete = movie => {
        console.log(movie);
        deleteMovie(movie._id);
        this.setState({ movies: getMovies() })
    }

    handleToggleLike = movie => {
        console.log(movie);
        const currentPageItems = [...this.state.movies];
        const index = currentPageItems.indexOf(movie);
        Movies[index] = movie;
        if (currentPageItems[index].isLiked === true)
            currentPageItems[index].isLiked = false;
        else
            currentPageItems[index].isLiked = true;

        this.setState({ movies: currentPageItems });
    }

    viewsummary = () => {
        const { length: count } = this.state.movies;
        if (count > 0) {
            return `Showing ${count} movies in the database.`
        }
        else {
            return 'There is no movies in the database.'
        }
    }

    render() {
        const { movies } = this.state;

        return (

            <Table data={movies} columns={this.state.columns}>
            </Table>
        );
    }

}

export default Movies;
