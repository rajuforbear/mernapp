import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBord from "./pages/dashbord";
import Login from "./pages/login";
import Register from "./pages/register";
import Header from "./componets/Header";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<DashBord />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
