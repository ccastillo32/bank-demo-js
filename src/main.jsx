import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import "@fontsource/comfortaa";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

import './main.css'
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
