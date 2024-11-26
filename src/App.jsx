import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyDetails from "./components/core/overview/CompanyDetails.jsx";

import IndexTable from "./components/core/table/index.jsx";
import Products from "./components/core/products/index.jsx";
import ProductByCategoryList from "./components/core/products/ProductByCategoryList.jsx";
import CustomTab from "./components/core/products/CustomTab.jsx";
import ProductsList from "./components/core/products/ProductsList.jsx";
function App() {
  return (
    <Router>
      <Routes>
        {/* For assignemnt 2 and 3  */}
        {/* <Route path="/" element={<IndexTable />} /> */}
        {/* <Route path="/company/:ticker" element={<CompanyDetails />} /> */}

        {/*  For assignment 4  */}
        <Route
          path="/"
          element={
            <Products>
              <ProductsList />{" "}
            </Products>
          }
        />
        <Route
          path="/products/:category"
          element={
            <Products>
              <ProductByCategoryList />{" "}
            </Products>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
