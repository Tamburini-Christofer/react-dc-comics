const MyShop = () => {
  const digitalComics = "../../img/buy-comics-digital-comics.png";
  const dcMerchandise = "../../img/buy-comics-merchandise.png";
  const sub = "../../img/buy-comics-shop-locator.png";
  const comicShop = "../../img/buy-comics-subscriptions.png";
  const dcPower = "../../img/buy-dc-power-visa.png";

  return (
    <>
      <div className="sfondoBlu">
        <div className="shopContainer">
          <ul className="flex imgShop">
            <li>
              <img src={digitalComics} alt="Logo poster Dc" />
              <span className="shopSpan">DIGITAL COMICS</span>
            </li>
            <li>
              {" "}
              <img src={dcMerchandise} alt="Maglietta Green Lanter" />
              <span className="shopSpan">DC MERCHANDISE</span>
            </li>
            <li>
              <img src={sub} alt="Logo di carte" />
              <span className="shopSpan">SUBSCRIPTION</span>
            </li>
            <li>
              {" "}
              <img src={comicShop} alt="Logo negozio" />
              <span className="shopSpan">COMIC SHOP LOCATOR</span>
            </li>
            <li>
              <img src={dcPower} alt="Logo carta Visa" />
              <span className="shopSpan">DC POWER</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyShop;
