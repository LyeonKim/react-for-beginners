import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieList({  id, coverImg, title, summary, }) {
  function truncate(str) {
    if( str.length > 60 ) {
      return str.substring(0, 60) + "..." 
    } else {
      return str;
    } 
  }

  return (
    <div className="movie">
      <Link to={`/movie/${id}`} className="link">
          <img src={coverImg} alt={title} />
      </Link>
      <div className="info">
        <h2 className="title">{ title.length > 25 ? title.substring(0, 25) + "..." : title }</h2>
        {/* <h2 className="title">{ title.length > 25 ? title.substring(0, 25) + "..." : title.toUpperCase() }</h2> */}
        <p className="desc">
          { summary ? truncate(summary) : ( <span className="empty">Preparing Description Soon - !</span> ) }
        </p>
      </div>
    </div>
  );
}

MovieList.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default MovieList;