import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; //esses componentes servem para config. as rotas
import Listing from 'pages/Listing';//importanto os componentes criados, para ativar o componente em cada rota
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter> {/*inicia a config das rotas */}
      <Navbar />{/*ficou fora de  todas as rotas, para poder aparecer em todas as páginas */}
      <Routes>{/*aqui será config rota por rota */}
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

