// import { useState } from "react";
// import "./App.css";
// import Page from "./components/Page";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Page />
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Page from "./components/Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
