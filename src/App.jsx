import "./App.css";
import TopBar from "./Components/Dashboard/TopBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Holdings from "./Components/Holdings/Holdings";
import Transactions from "./Components/Transactions/Transactions";
import Accounts from "./Components/Accounts/Accounts";
function App() {
  return (
    <>
      <div className="h-screen">
        <div
          style={{ "background-color": "#edeff3" }}
          className="min-h-full overflow-hidden shadow"
        >
          <TopBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
          
        
          
          
        </div>
      </div>
    </>
  );
}

export default App;
