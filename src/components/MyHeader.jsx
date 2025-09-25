const MyHeader = () => {

  //todo Constante con logo

  const logo = "../../img/dc-logo.png";

  //todo Array con la lista dei li futuri
  
  const navPrincipale = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

  return (
    <>
      <header>
        <div className="principalContainer">
          <div className="containerHeader">
            <img id="logo" src={logo} alt="Logo DC" />
            <nav>
              <ul className="principalNav">
                {navPrincipale.map((nomeLista, index) => (
                  <li><a keys={index}>{nomeLista}</a></li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default MyHeader;
