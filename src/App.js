import "./App.css";
import { createUseStyles } from "react-jss";
import Counter from "./Components/Counter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import Private from "./Private";
//css
const styles = createUseStyles({
  heading: {
    color: "red",
  },
});

function App() {
  //js
  const css = styles();
  let name = "Masuma";
  console.log(`Hello ${name}`);
  let isLoggedInUser = localStorage.getItem("userData");

  //html
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Private>
              <Home />
            </Private>
          }
        ></Route>
        <Route
          exact
          path="/about"
          element={
            <Private>
              <About />
            </Private>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={isLoggedInUser ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          exact
          path="/registration"
          element={
            isLoggedInUser ? <Navigate to="/" /> : <Registration />
          }
        ></Route>
        {/* <Route exact path="/" element={<Counter styleCss={css} />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
