import { useEffect, useState } from "react";
import Quora from "./components/Quora";
import Navbar from "./components/Navbar";
import "./css/App.css";
import LoginPage from "./components/Login";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoutes";

function App() {
  const user = useSelector((state) => state.user);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log("tqdj", user.loggedin);
    if (user.loggedin) {
      setLoggedIn(() => Boolean(user.loggedin));
    } else {
      setLoggedIn(() => null);
    }
  }, [user.loggedin]);

  return (
    <div className='App'>
      <Router>
        {console.log(loggedIn)}
        <Routes>
          <Route path='/' element={<Quora />}></Route>
          <Route
            path='/login'
            element={
              <ProtectedRoute>
                <LoginPage />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
