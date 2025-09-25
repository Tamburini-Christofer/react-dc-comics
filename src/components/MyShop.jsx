const MyShop = () => {

  //todo Array di oggetti
  
  const shopItems = [

    //? Oggetto Logo Poster

    {
      img: "../../img/buy-comics-digital-comics.png",
      alt: "Logo poster Dc",
      text: "DIGITAL COMICS",
    },

    //? Oggetto Dc Merchandise

    {
      img: "../../img/buy-comics-merchandise.png",
      alt: "Maglietta Green Lanter",
      text: "DC MERCHANDISE",
    },

    //? Oggetto Subscription

    {
      img: "../../img/buy-comics-shop-locator.png",
      alt: "Logo di carte",
      text: "SUBSCRIPTION",
    },

    //? Oggetto Comic Shop Locator

    {
      img: "../../img/buy-comics-subscriptions.png",
      alt: "Logo negozio",
      text: "COMIC SHOP LOCATOR",
    },

    //? Oggetto Dc Power

    {
      img: "../../img/buy-dc-power-visa.png",
      alt: "Logo carta Visa",
      text: "DC POWER",
    },
  ];
  
  return (
    <>
      <section className="sfondoBlu">
        <div className="shopContainer">
          <ul className="flexShop imgShop">
              {shopItems.map((item, index) => (
                <li key = {index}>
                <a className="shopLink"><img src={item.img} alt={item.alt} />{item.text}</a>   
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default MyShop;
