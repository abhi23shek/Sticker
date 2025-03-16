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
import { useEffect } from "react";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Page from "./components/Page";
import Manage from "./components/Manage";
import LabelPage from "./components/LabelPage";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./components/AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { auth } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!auth) {
//       navigate("/login"); // Redirect to login page if not authenticated
//     }
//   }, [auth, navigate]);

//   return children;
// };

function App() {
  return (
    <Router>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route
          path="/manage"
          element={
            // <ProtectedRoute>
            <Manage />
            // </ProtectedRoute>
          }
        />
        <Route path="/label" element={<LabelPage />} />
      </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
