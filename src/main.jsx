import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import '.pages/home/homePage.css';
import './input.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom';





ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)