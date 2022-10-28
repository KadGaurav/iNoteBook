
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NoteState from './context/NoteState';
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>,
      </NoteState>
    </>
  );
}

export default App;
