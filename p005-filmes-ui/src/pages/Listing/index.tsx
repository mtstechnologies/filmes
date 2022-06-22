import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";


function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(resposta => {
            const data = resposta.data as MoviePage;
            console.log(data);
            setPageNumber(data.number);
        });
    }, []);    

    return(
        /**aqui estou usando o fragment para exportar mais de 1 component, tbm poderia usar DIV */
        <> 

        <p>{pageNumber}</p>
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