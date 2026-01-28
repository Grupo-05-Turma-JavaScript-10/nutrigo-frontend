import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
