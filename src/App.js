import { Routes, Route,Navigate}  from 'react-router-dom'

import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Home} from './components/Home'
import { Consign } from './components/consign/Consign'
import {Contact} from './components/contact/Contact'


function App() {
  return (
    <div>
     <Header></Header>
   <Routes>
    
     {/* <Route  exact path='/reactdemo' element={<Home />}></Route>
     <Route  exact path='/home' element={<Home />}></Route> */}
     <Route  exact path='/home' element={<Home />}></Route>
     <Route   path='/reactdemo' element={<Navigate replace to ='/home' />}></Route>

     <Route  exact path="/consign" element={<Consign />}></Route>



     <Route exact  path='/contact' element={<Contact />}></Route>
     
     
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
