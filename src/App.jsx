import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav brandName="Ciccio pasty"></MyNav>
      <Welcome alertColor="info" alertContent="Ciaooooo!" textContent="Come stai?" />
      <AllTheBooks />
      <Footer />
    </>
  );
}

export default App;
