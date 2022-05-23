import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import react, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  setTimeout(()=>{setAlert(null); } ,1500);
  }


  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled!","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled!","success");

    }
  }
  return (
    <>
    {/* <Router>  */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Textform heading="Enter Text To Analyze" mode={mode} showAlert={
   showAlert}/>
   </div>
    {/* <div className="container my-3">
    <Routes>
          <Route path="/" element = {<Textform heading="Enter Text To Analyze" mode={mode} showAlert={
   showAlert}/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
   </div> 
   </Router> */}
 {/* <div className="container my-3"><About/> </div> */}
    </>
 );
}

export default App;
