import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {
  return (
    <div className="mts-pagination-container">
      <div className="mts-pagination-box">
        <button className="mts-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="mts-pagination-button" disabled={false}>
          <Arrow className="mts-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}
export default Pagination;
