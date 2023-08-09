
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
      setAlert({
        msg: message, type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000)
    }
    const removeBodyClasses= ()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success"); 
  }
  const toggleMode = (cls) => {
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add("bg-"+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() =>{
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() =>{
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode";

    }
  }
  const toggleGreenMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroudColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title="TextUtils" aboutText="About"/>     */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" about='About' mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          {/* /users --> Component 1 */}
          {/* /users/home --> Component 2 */} /* If we do not specify exact path on url /users/home it will render component 1
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra spaces" mode={mode} />
            {/* <Dashboard />    */}
          </Route>  
        </Switch>
        {/* <About/> */}
      </div>
      {/* <About/> */}
      </Router>  
    </>
  );
}

export default App;   
