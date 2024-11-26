import { Routes, Route } from 'react';
import HomePage from "./pages/home"
import './index.css';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default App
