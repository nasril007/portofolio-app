import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
   <Particles
   params={{
     particles:{
       number: {
         value: 30,
         density: {
           enable: true,
           value_area:900
         }
       },
       shape: {
         type: "triangle",
         stroke: {
           width: 6,
           color: "#059dc0"
         }
       }
     }
   }}
  />
   <Navbar />
   <Header />
   </>
  );
}

export default App;
