import "./styles.css";

function Form() {
  const filme = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div className="mts-form-container">
      <img
        className="mts-filme-card-image"
        src={filme.image}
        alt={filme.title}
      />
      <div className="mts-card-bottom-container">
        <h3>{filme.title}</h3>
        <form className="mts-form">
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
        <button className="btn btn-primary mts-btn mt-3">Cancelar</button>
      </div>
    </div>
  );
}

//aqui no pages ficaram as minhas rotas para cada pagina.
export default Form;
