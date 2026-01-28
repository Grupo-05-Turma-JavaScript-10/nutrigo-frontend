import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
