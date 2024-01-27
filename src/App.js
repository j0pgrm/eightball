import Main from './Pages/Main.js'; 
import Game from './Pages/Game.js'; 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/eightball" element={<Main />} /> 
        <Route path="/eightball/Game" element={<Game />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
