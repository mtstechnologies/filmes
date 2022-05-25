import { ReactComponent as GithubIcon } from "assets/img/github.svg";
//após inserir no arquivo tsconfig.json a linha: "baseUrl": "./src", não será necessário ficar inserindo o caminho completo nos imports : '../../assets/img/github.svg'
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="mts-nav-content">
          <h1>MTS Filmes</h1>
            <a href="https://github.com/mtstechnologies">
                <div className="mts-contact-container">
                    <GithubIcon />
                    <p className="mts-contact-link">/mtstechnologies</p>
                </div>
            </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
