import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyDetails from "./components/overview/CompanyDetails.jsx";
import IndexTable from "./components/table/index.jsx";
import Products from "./components/products/index.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* For assignment 2 and 3  */}
        <Route path="/" element={<IndexTable />} />
        <Route path="/company/:ticker" element={<CompanyDetails />} />

        {/* For assignment 4 */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
