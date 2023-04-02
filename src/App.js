import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {

  const [mode, setMode] = useState('light') //whether the drak mode is enabled
  const [modeText, setModeText] = useState("Dark")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setModeText("Light")
      document.body.style.backgroundColor = '#18122B'
      showAlert("Dark mode has been enabled", "Success")
    } else {
      setMode('light')
      setModeText("Dark")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "Success")
    }
  }

  return (
    // <Navbar title="TextUtils2" aboutText="About Us" />
    // <About className="container my-3" />
    <>
      <Router>
        <Navbar title="FunText" mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} />} />
            <Route path='/about' element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
