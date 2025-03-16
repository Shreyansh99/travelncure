import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/LoginPage";
import Register from "./container/Register";
import EditProfile from "./container/EditProfile";
import ContactInfo from "./components/Contact";
import Hospitals from "./container/Hospitals";
import Doctors from "./container/Doctors";
import BookConsultation from "./container/Consultation";
import Footer from "./components/Footer";
import WhyUs from "./container/whyUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<WhyUs />} />
        <Route path="/contact" element={<ContactInfo />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/consultation" element={<BookConsultation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
