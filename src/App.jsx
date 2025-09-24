import "./App.css";
import MyHeader from "./components/MyHeader";
import MyContent from "./components/MyContent";
import MyShop from "./components/MyShop";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <body>
        <header>
          <MyHeader />
        </header>
        <main>
          <MyContent />
          <MyShop />
        </main>
        <footer>
          <MyNav />
          <MyFooter />
        </footer>
      </body>
    </>
  );
}

export default App;
