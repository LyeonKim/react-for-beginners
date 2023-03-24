import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// import Movie from "../components/Movie";

function Detail() {
    const [ movie, setMovie ] = useState([]);

    const { id } = useParams(); 
    console.log(id); //{id: '45962'}
    // useParam는 App.js의 <Route path="/movie/:id">, :id를 받아온다
        // 변형되는(바뀌는) 값을 인식하여 받아오는 React-router-dom의 함수.

    const getMovie = async () => {
        const json = await ( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        setMovie(json.data.movie);
    }
    
    useEffect(() => {
        getMovie();
    }, [])



    return (
        <div className="movie-wrap">
            <Link to="/" className="head" >Movie App</Link>
            <div className="movie">
                <h1 className="title">{movie.title}</h1>
                <div className="img">
                    <img src={movie.large_cover_image} />
                </div>
                <div className="info">

                    <p>
                        <span className="tit">Open Year</span>: &nbsp;
                        {movie.year}
                    </p>
                    <div>
                        <span className="tit">Keywords</span>: &nbsp;
                        <ul className="keywords">
                            {/* first asking if the array existed. 배열이 있는 지 물어본 뒤 map 실행하니 오류 사라짐!1 
                                408: map Error 해결방법 3가지
                                { movie.genres?.map((g) => ( //옵셔널 체이닝(optional chaining) ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근 가능
                                { movie.genres && movie.genres.map((g) => (
                                { (movie.genres || []).map((g) => ( 
                            */}
                            { movie.genres?.map((g) => ( 
                                <li key={g}>{g}</li>
                            ))}
                        </ul>
                    </div>
                    <p>
                        <span className="tit">Rating</span>: &nbsp;
                        {movie.rating} / 10점
                    </p>
                    <span className="tit">description</span>
                    <p className="desc">
                        {movie.description_full}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Detail;