import Navbar from "./component/navbar/Navbar";
import Body from "./component/frontbody/Body";
import Footer from "./component/footer/Footer";
import Applicationform from "./component/application/applicationform";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
 <div className="p-0 m-0 w-full bg-slate-200 ">
 <Router>
 <Navbar />
<Routes>
 <Route exact path='/' element={ <Body/>}/>
 <Route exact path='/application' element={ <Applicationform/>}/>

 </Routes>
 <Footer/>
 </Router>
 </div>

  );
}

export default App;
