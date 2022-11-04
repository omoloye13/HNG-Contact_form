import { Routes, Route} from "react-router-dom";
import Contact from './Contact';
import Container from './Container';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
