const MyHeader = () => {
    const logo = "../../img/dc-logo.png";
  return (
    <>
      <header>
        <div className="principalContainer">
          <div className="containerHeader">
            <img className="logo" src= {logo} alt="Logo DC" />
              <nav>
                <ul className="principalNav">
                  <li>CHARACTERS</li>
                  <li>COMICS</li>
                  <li>MOVIES</li>
                  <li>TV</li>
                  <li>GAMES</li>
                  <li>COLLECTIBLES</li>
                  <li>VIDEOS</li>
                  <li>FANS</li>
                  <li>NEWS</li>
                  <li>SHOP</li>
                </ul>
              </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default MyHeader;
