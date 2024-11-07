import {Routes, Route} from "react-router-dom";
import Header from "./components/common/Header";
import Dashboard from "./pages/Dashboard";
import CoinDetail from "./pages/CoinDetail";
import Home from "./pages/Home";
import './App.css'

function App() {
  

  return (
   <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
   
   </>
  )
}

export default App
