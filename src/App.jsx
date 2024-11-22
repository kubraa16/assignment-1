import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyDetails from "./components/core/overview/CompanyDetails.jsx";

import IndexTable from "./components/core/table/index.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexTable />} />
        <Route path="/company/:ticker" element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
