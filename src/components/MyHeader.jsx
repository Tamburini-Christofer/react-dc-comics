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
                  <li><a href="">CHARACTERS</a></li>
                  <li><a href="">COMICS</a></li>
                  <li><a href="">MOVIES</a></li>
                  <li><a href="">TV</a></li>
                  <li><a href="">GAMES</a></li>
                  <li><a href="">COLLECTIBLES</a></li>
                  <li><a href="">VIDEOS</a></li>
                  <li><a href="">FANS</a></li>
                  <li><a href="">NEWS</a></li>
                  <li><a href="">SHOP</a></li>
                </ul>
              </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default MyHeader;
