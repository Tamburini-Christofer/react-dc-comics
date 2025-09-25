const MyShop = () => {
  const digitalComics = "../../img/buy-comics-digital-comics.png";
  const dcMerchandise = "../../img/buy-comics-merchandise.png";
  const sub = "../../img/buy-comics-shop-locator.png";
  const comicShop = "../../img/buy-comics-subscriptions.png";
  const dcPower = "../../img/buy-dc-power-visa.png";

  return (
    <>
      <section className="sfondoBlu">
          <div className="shopContainer">
            <ul className="flex imgShop">
              <li>
                <img src={digitalComics} alt="Logo poster Dc" />
                <a className="shopLink">DIGITAL COMICS</a>
              </li>
              <li>
                {" "}
                <img src={dcMerchandise} alt="Maglietta Green Lanter" />
                <a className="shopLink">DC MERCHANDISE</a>
              </li>
              <li>
                <img src={sub} alt="Logo di carte" />
                <a className="shopLink">SUBSCRIPTION</a>
              </li>
              <li>
                {" "}
                <img src={comicShop} alt="Logo negozio" />
                <a className="shopLink">COMIC SHOP LOCATOR</a>
              </li>
              <li>
                <img src={dcPower} alt="Logo carta Visa" />
                <a className="shopLink">DC POWER</a>
              </li>
            </ul>
          </div>
      </section>
    </>
  );
};

export default MyShop;
