import Login from "./pages/Login";
import { CheckoutPage } from "./api/Checkout.tsx";
import StockPage from "./pages/Stock.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Success from "./pages/Success.jsx";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/stock" element={<StockPage />}></Route>
          <Route path="/check" element={<CheckoutPage></CheckoutPage>}></Route>
          <Route path="/success" element={<Success></Success>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
