// import React from 'react';
// import Header from './component/Header/Header';
// import MainContainer from './component/MainContainer/MainContainer';
// import Footer from './component/Footer/Footer';

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <MainContainer />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Tournaments from "./component/Tournaments/Tournaments";
import Winners from "./component/Winners/Winners";
import Register from "./component/Register/Register";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/winners" element={<Winners />} />
            <Route path="/register" element={<Register />} />
            <Route path="/footer" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
