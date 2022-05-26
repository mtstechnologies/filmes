import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";


function Listing() {
    return(
        /**aqui estou usando o fragment para exportar mais de 1 component, tbm poderia usar DIV */
        <> 
        <Pagination/>
        {/** o moviecard ficara dentro desta div para formatar usando o bootstrap, ivitando que ocupe toda a largura da tela*/}
        <MovieCard/>
        </>
    );
}

//aqui no pages ficaram as minhas rotas para cada pagina.
export default Listing;