import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PartnerLogin from "./pages/PartnerLogin";
import PartnerSignup from "./pages/PartnerSignup";
import CourierLogin from "./pages/CourierLogin";
import CourierSignup from "./pages/CourierSignup";
import LegalPage from "./pages/LegalPage";

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal/:slug" element={<LegalPage />} />
          {/* Client Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Partner Auth */}
          <Route path="/partner/login" element={<PartnerLogin />} />
          <Route path="/partner/signup" element={<PartnerSignup />} />
          {/* Courier Auth */}
          <Route path="/courier/login" element={<CourierLogin />} />
          <Route path="/courier/signup" element={<CourierSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
