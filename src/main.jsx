import ReactDOM from 'react-dom/client'
/* import CarruselPersonajes from './components/CarruselPersonajes' */
import { BrowserRouter } from "react-router-dom";
import App from "../App.jsx";

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarruselPersonajes/>
  </React.StrictMode>,
)
 */


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);