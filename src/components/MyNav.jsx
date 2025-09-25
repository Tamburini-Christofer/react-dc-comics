const MyNav = () => {

  //todo Array di dcComicsLinks

  const dcComicsLinks = ["Characters", "Comics", "Movies", "TV", "Games","Videos", "News"];

  //todo Array di shopLinks

  const shopLinks = ["Shop DC", "Shop DC Collectibles"];

  //todo Array di dcLinks

  const dcLinks = ["Terms Of Use", "Privacy policy News", "Ad Choices", "Adversting", "Jobs", "Subscription", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"];

  //todo Array di sitesLinks

  const sitesLinks = ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"];

  return (
    <section className="sfondoImg sfondoImgLogo">
      <div className="principalContainer grid">
        
        {/*Prima colonna*/}

        <div>
          <h3>DC COMICS</h3>
          <ul className="footerNav">
            {dcComicsLinks.map((link, index) => (
              <li key={index}>
                <a href="">{link}</a>
              </li>
            ))}
          </ul>
          <div>
            
        {/*Seconda colonna*/}

            <h3>SHOP</h3>
            <ul className="footerNav">
              {shopLinks.map((link, index) => (
                <li key={index}>
                  <a href="">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      {/*Terza colonna*/}

        <div>
          <h3>DC</h3>
          <ul className="footerNav">
            {dcLinks.map((link, index) => (
              <li key={index}>
                <a href="">{link}</a>
              </li>
            ))}
          </ul>
        </div>

      {/*Quarta colonna*/}

        <div>
          <h3>SITES</h3>
          <ul className="footerNav">
            {sitesLinks.map((link, index) => (
              <li key={index}>
                <a href="">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyNav;
