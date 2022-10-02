import './App.css';
import AllRoutes from "./Pages/AllRoutes"
import Navbar from './Pages/Navbar';
import Header from "./Pages/Header"
import Footer from './Component/Footer'


function App() {


  return (
    <div className="App">

       

    <Header/>
    <Navbar/>
    <AllRoutes/>
    <div  className="logo2"  style={{backgroundColor:"lightgray",marginTop:"50px"}}>

    <img src="https://www.kindmeal.my/images/banner_whykindmeal.png" alt="" />
    </div>

    <Footer/>
    
    
    </div>
  );
}

export default App;
