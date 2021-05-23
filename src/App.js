import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Nav from './components/nav.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import DecToRoman from './pages/decToRom.js';
import RomanToDec from './pages/romToDec.js';


function App () {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Nav />
          <Header />

          <Route path="/" exact component={Home} />
          <Route path="/dec" component={DecToRoman} />
          <Route path="/roman" component={RomanToDec} />

          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
