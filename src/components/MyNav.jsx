const MyNav = () => {
  return (
    <>
      <section className="sfondoImg sfondoImgLogo">
        <div className="principalContainer grid">
          {/* Prima colonna */}
          <div>
            <h3>DC COMICS</h3>
            <ul className="footerNav">
              <li>
                <a href="">Characters</a>
              </li>
              <li>
                <a href="">Comics</a>
              </li>
              <li>
                <a href="">Movies</a>
              </li>
              <li>
                <a href="">TV</a>
              </li>
              <li>
                <a href="">Games</a>
              </li>
              <li>
                <a href="">Videos</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              {/* Seconda colonna */}
              <div>
                <h3>SHOP</h3>
                <ul>
                  <li>
                    <a href="">Shop DC</a>
                  </li>
                  <li>
                    <a href="">Shop DC Collectibles</a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
          {/* Terza colonna */}
          <div>
            <h3>DC</h3>
            <ul className="footerNav">
              <li>
                <a href="">Terms Of Use</a>
              </li>
              <li>
                <a href="">Privacy policy News</a>
              </li>
              <li>
                <a href="">Ad Choices</a>
              </li>
              <li>
                <a href="">Adversting</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">Subscription</a>
              </li>
              <li>
                <a href="">Talent Workshops</a>
              </li>
              <li>
                <a href="">CPSC Certificates</a>
              </li>
              <li>
                <a href="">Ratings</a>
              </li>
              <li>
                <a href="">Shop Hel</a>p
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* Quarta colonna */}
          <div>
            <h3>SITES</h3>
            <ul className="footerNav">
              <li>
                <a href="">DC</a>
              </li>
              <li>
                <a href="">MAD Magazine</a>
              </li>
              <li>
                <a href="">DC Kids</a>
              </li>
              <li>
                <a href="">DC Universe</a>
              </li>
              <li>
                <a href="">DC Power Visa</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyNav;
