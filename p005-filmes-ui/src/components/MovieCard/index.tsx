import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

function MovieCard() {
  const filme = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };
  return (
    <div>
      <img
        className="mts-filme-card-image"
        src={filme.image}
        alt={filme.title}
      />
      <div className="mts-card-bottom-container">
        <h3>{filme.title}</h3>
        <MovieScore />

        <Link to={`/form/${filme.id}`}>
            <div className="btn btn-primary mts-btn">Avaliar</div>
        </Link>        
      </div>
    </div>
  );
}
export default MovieCard;
