import CompanyCard from "./components/CompanyCard";
import { Button } from "react-bootstrap";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center m-3">Company Directory</h1>
      <CompanyCard />
      <div className="text-center m-3">
        <Button>Add Company</Button>
      </div>
    </div>
  );
};

export default App;
