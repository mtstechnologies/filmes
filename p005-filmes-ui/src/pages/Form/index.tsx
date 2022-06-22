import FormCard from "components/FormCard";
import { useParams } from "react-router-dom";

//estamos pegando o paramentro da requisição e repassando para o FormCard
function Form() {

  const params = useParams();
    return (
      <FormCard movieId={`${params.movieId}`} />
    );
}
export default Form;
