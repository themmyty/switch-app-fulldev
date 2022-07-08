import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home';
import Customer from './Pages/Customer';
import Payment from './Pages/Payment';
import Support from './Pages/Support';
import Report from './Pages/Report';
import More from './Pages/More';
function App() {
  return (
    <div className="App">
     <Nav/>
     <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/customer" element={ <Customer/> }/>
        <Route path="/report" element={ <Report/> } />
        <Route path="/payment" element={ <Payment/> } />
        <Route path="/support" element={ <Support/> } />
        <Route path="/more" element={ <More/> } />
      </Routes>
      </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
