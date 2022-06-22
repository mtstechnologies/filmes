import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
movie: Movie;
}

function MovieCard({ movie } : Props) {
  
  return (
    <div>
      <img
        className="mts-filme-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="mts-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />

        <Link to={`/form/${movie.id}`}>
            <div className="btn btn-primary mts-btn">Avaliar</div>
        </Link>        
      </div>
    </div>
  );
}
export default MovieCard;
