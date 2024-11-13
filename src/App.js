import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { Route , Routes } from "react-router-dom";
// import Footer from "./components/Footer";
function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode ";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode ";
    }
  };


  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <Routes>
        <Route exact path = "/" element = {<TextForm
        heading="Enter your text to analyze below"
        mode={mode}
        showAlert={showAlert} />} />

        <Route exact path = "about" element = {<About mode={mode}/>} />
      </Routes>

      {/* <Footer mode={mode}/> */}
    </>
  );
}

export default App;





// old code
/*
  { <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      {
        <TextForm
        heading="Enter your text to analyze below"
        mode={mode}
        showAlert={showAlert} />
        <About/>
      }
      </div> }


*/