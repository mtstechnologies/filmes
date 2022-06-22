import MovieStars from "components/MovieStars";
import "./styles.css";

type Props = {
  score: number;
  count: number;
}

function MovieScore( {score, count} : Props) {

  return (
    <div className="mts-score-container">
      <p className="mts-score-value">
        {score > 0 ? score.toFixed(1) : "-"} {/**esta linha é um IF */}
      </p>
      <MovieStars score={score} />
      <p className="mts-score-count">{count} avaliações</p>
    </div>
  );
}
export default MovieScore;
