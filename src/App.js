import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Aboutme from './Components/Aboutme';
import Header from './Components/Header'
import Experience from './Components/Experience'
import Myproject from './Components/Myproject';
import Aboutprojects from './Components/Aboutprojects';
import Teacher from './Components/Teacher'




function App(){
  return(
    <>
  <Navbar />
  <Header />
  <Aboutme />
  <Experience />
  <Myproject />
  <Aboutprojects />
  <Teacher />
    </>
  )
}
export default App;