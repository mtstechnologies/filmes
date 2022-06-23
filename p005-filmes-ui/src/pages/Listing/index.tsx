import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";


function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    //este estado irá guardar a pagina que foi carregada na requisição
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
        .then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        });
    }, [pageNumber]); //quando mudar o pageNamber a pagina será refeita 

    const trocaPagina = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return(
        /**aqui estou usando o fragment para exportar mais de 1 component, tbm poderia usar DIV */
        <> 

        <Pagination page={page} onChange={trocaPagina}/>
        {/** o moviecard ficara dentro desta div(container, grade e colunas) para formatar usando o bootstrap, 
         * ivitando que ocupe toda a largura da tela*/}
        <div className="container">
            <div className="row">
                {/**este for irá acessar função de auta ordem .map, executando uma coisa com cada item da minha coleção , 
                 * pra cada filme, execultaa div abaixo*/}
                {page.content.map(movie => {
                    return(
                        //uma exigencia do REACT é que para cada item renderizado deverá ter um atributo key, nesse caso, estou usando o proprio id
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">{/** definido as opções de grid*/}
                            <MovieCard movie={movie}/>
                        </div>
                    )
                })}
            </div>
        </div>
        
        </>
    );
}

//aqui no pages ficaram as minhas rotas para cada pagina.
export default Listing;