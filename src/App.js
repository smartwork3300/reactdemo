import { Routes, Route}  from 'react-router-dom'
import {Home} from './components/Home'
import {About} from './components/About'
import {Contact} from './components/contact/Contact'
import {Navbar} from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar></Navbar>
   <Routes>
    
     {/* <Route  exact path='/reactdemo' element={<Home />}></Route>
     <Route  exact path='/home' element={<Home />}></Route> */}
     <Route   path='/' element={<Home />}></Route>
     <Route  exact path='/home' element={<Home />}></Route>
     



     <Route exact  path='/about' element={<About />}></Route>
     <Route exact  path='/contact' element={<Contact />}></Route>
     
     
   </Routes>
    </div>
  );
}

export default App;
