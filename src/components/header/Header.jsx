import "./Header.scss";

function Header() {
  return (
    <header className="header" id="header">
      <nav className="header__nav">
        <a href="#home">Accueil</a>

        <a href="#infos">Infos</a>

        <a href="#projets">Projets</a>

        <a href="#projets">Compétences</a>
      </nav>
    </header>
  );
}

export default Header;
