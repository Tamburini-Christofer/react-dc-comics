const MyHeader = () => {

  return (
    <>
      <header>
        <div className="principalContainer">
          <div className="containerHeader">
            <img src={logo} alt="Logo DC" />
            <div>
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
        </div>
      </header>
    </>
  );
};

export default MyHeader;
