import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch( `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2` )
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    };
    console.log(movies);

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className="home">
            <Header />
            {loading ? (
                <p className="load">Loading...</p>
            ) : (
                <div className="movie-list">
                    {movies.map((movie) => (
                        <MovieList
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                        />
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
}
export default Home;