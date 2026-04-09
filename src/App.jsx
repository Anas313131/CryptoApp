import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4] p-5">
      <div className="w-93.75 min-h-203 bg-[#f7f8f9] border border-gray-300 relative overflow-hidden">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;