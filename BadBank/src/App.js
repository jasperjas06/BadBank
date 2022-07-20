import './App.css';
import Navbar from "./components/nav.js";
import { BrowserRouter as Router,HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import UserContext from './context';
import Signin from './pages/signin';
import Banking from './pages/bank';
import Alldata from './pages/alldata';
import Deposit from './pages/deposit';
import Withdraw from './pages/withdraw';
import Footer from './pages/footer'



function App() {

  return (<>
  <HashRouter>
    <div className="App">
      <div>
      <Navbar/>
    <UserContext.Provider
        class="user"
        value={{
          users: [
            {
              name: "Jasper",
              email: "jas@gmail.com",
              password: "jas@1304",
              balance: 0
            }
          ]
        }}
        >
      <Routes>
          
        <Route path="/" element={<Banking/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/alldata" element={<Alldata />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
          
      </Routes>
      </UserContext.Provider>
      </div>
    </div>
    </HashRouter>
    {/* <Footer/> */}
    </>
  );
}

export default App;
