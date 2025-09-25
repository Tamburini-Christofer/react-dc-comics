const MyFooter = () => {
  return (
    <>
      <section className="sfondoFooter">
        <div className="principalContainer flex">
          {/* Bottone */}
          <a href="" className="signBtn">
            SIGN-UP NOW!
          </a>
          <div>
            {/* Scritta Follow Us*/}
            <span className="followText">FOLLOW US</span>
            {/* Facebook*/}
            <a href="">
              <img className="social" src="../../img/footer-facebook.png" alt="Icona Facebook" />
            </a>
            {/* Twetter */}
            <a href="">
              <img className="social"src="../../img/footer-twitter.png" alt="Icona X" />
            </a>
            {/* Youtube */}
            <a href="">
              <img className="social"src="../../img/footer-youtube.png" alt="Icona Youtube" />
            </a>
            {/* Pinterest */}
            <a href="">
              <img className="social" src="../../img/footer-pinterest.png" alt="Icona Pinterest" />
            </a>
            {/* Periscope */}
            <a href="">
              <img className="social" src="../../img/footer-periscope.png" alt="Icona Periscope" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyFooter;
