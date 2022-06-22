import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";


function Listing() {

    //testando requisição de forma errada
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(resposta => {
            console.log(resposta.data);
        })

    return(
        /**aqui estou usando o fragment para exportar mais de 1 component, tbm poderia usar DIV */
        <> 
        <Pagination/>
        {/** o moviecard ficara dentro desta div(container, grade e colunas) para formatar usando o bootstrap, ivitando que ocupe toda a largura da tela*/}
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">{/** definido as opções de grid*/}
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard/>
                </div>
            </div>
        </div>
        
        </>
    );
}

//aqui no pages ficaram as minhas rotas para cada pagina.
export default Listing;