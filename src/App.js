import { Routes, Route} from "react-router-dom";
import ContactForm from './Contact';
import Container from './Container';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Container />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
