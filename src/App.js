import { Routes, Route} from "react-router-dom";
import ContactForm from './Contact';
import Container from './Container';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Container />
      <Routes>
        <Route path="/contact" element={<ContactForm />} />
      </Routes> */}
     <ContactForm />
    </div>
  );
}

export default App;
