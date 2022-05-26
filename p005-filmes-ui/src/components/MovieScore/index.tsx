import MovieStars from "components/MovieStars";
import "./styles.css";

function MovieScore() {

    const score = 3.5;
    const count = 17;

  return (
    <div className="mts-score-container">
      <p className="mts-score-value">
        {score > 0 ? score.toFixed(1) : "-"} {/**esta linha é um IF */}
      </p>
      <MovieStars />
      <p className="mts-score-count">{count} avaliações</p>
    </div>
  );
}
export default MovieScore;
