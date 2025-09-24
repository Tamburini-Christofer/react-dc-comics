const MyShop = () => {
const digitalComics = "../../img/buy-comics-digital-comics.png";
const dcMerchandise = "../../img/buy-comics-merchandise.png";
const sub = "../../img/buy-comics-shop-locator.png";
const comicShop = "../../img/buy-comics-subscriptions.png";
const dcPower= "../../img/buy-dc-power-visa.svg";

  return (
    <>
      <div className="sfondoBlu">
        <div className="principalContainer flex">
          <div>
            <img src={digitalComics} alt="Logo poster Dc" />
            <span>DIGITAL COMICS</span>
          </div>
          <div>
            <img src={dcMerchandise} alt="Maglietta Green Lanter" />
            <span>DC MERCHANDISE</span>
          </div>
          <div>
            <img src={sub} alt="Logo di carte" />
            <span>SUBSCRIPTION</span>
          </div>
          <div>
            <img src={comicShop} alt="Logo negozio" />
            <span>COMIC SHOP LOCATOR</span>
          </div>
          <div>
            <img src={dcPower} alt="Logo carta Visa" />
            <span>DC POWER</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyShop;
