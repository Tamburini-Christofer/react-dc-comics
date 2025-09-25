import MyComics from "./Prodotti/MyComics";

const MyContent = () => {
  return (
    <>
      <section className="sfondoNero">
        <div className="principalContainer flex wrap">
          <div className="label">CURRENT SERIES </div>
          <MyComics />
          <a href=""><button>LOAD MORE</button></a>
        </div>
      </section>
    </>
  );
};

export default MyContent;
