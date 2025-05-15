import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
/* import scifi from "./data/scifi.json";
import history from "./data/history.json";
import romance from "./data/romance.json";
import horror from "./data/horror.json";
 */
// import BookList from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav brandName="Ciccio pasty"></MyNav>
      <Welcome alertColor="info" alertContent="Ciaooooo!" textContent="Come stai?" />
      <BookList genre={fantasy} />
      <Footer />
    </>
  );
}

export default App;
