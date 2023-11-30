import Login from "./pages/Login";
import StockComponent from "./component/stockComponent";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      
      <Route path="/stock" element={<StockComponent />}></Route>
      
    </Routes>
    </Router>
    </>
  );
}

export default App;
