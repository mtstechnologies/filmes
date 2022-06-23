import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";
import "./styles.css";

type Props = {
  movieId : string
}

function FormCard({movieId} : Props) {

  const navegacao = useNavigate();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`)
      .then(response => {
        setMovie(response.data);
      });
  }, [movieId]);

const salvaFormulario = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //para evitar o evento padrão de atualizar a tela, assim, envios os dados parasalvar sem atualizar a pagina

    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    if(!validateEmail(email)){
      return;
    }
    //enviando o corpo na requisição para salvar
    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'PUT',
      url: '/scores',
      data: {
        email: email,
        movieId: movieId,
        score: score
      }
    } 
    
    axios(config).then(response => {
      navegacao("/"); //apos salvar minha avaliação, volto para a pagina de listagem de filmes
    });
}

  return (
    <div className="mts-form-container">
      <img
        className="mts-filme-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="mts-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="mts-form" onSubmit={salvaFormulario}>
          <div className="form-group mts-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group mts-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="mts-form-btn-container">
            <button type="submit" className="btn btn-primary mts-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">{/**retornando para a pagina principal */}
          <button className="btn btn-primary mts-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

//aqui no pages ficaram as minhas rotas para cada pagina.
export default FormCard;
