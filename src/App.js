import { Routes, Route,Navigate}  from 'react-router-dom'

import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Home} from './components/Home'
import { Manifest } from './components/createmanifest/Manifest'
import { Dispatch } from './components/dispatch/Dispatch'
import { Receive } from './components/receive/Receive'
import { CargoStatus } from './components/cargostatus/Cargostatus'
import { Delivery } from './components/delivery/Delivery'




function App() {
  return (
    <div>
     <Header></Header>
   <Routes>
    
     {/* <Route  exact path='/reactdemo' element={<Home />}></Route>
     <Route  exact path='/home' element={<Home />}></Route> */}
     <Route  exact path='/home' element={<Home />}></Route>
     <Route   path='/reactdemo' element={<Navigate replace to ='/home' />}></Route>

     
     <Route exact path="/manifest" element={<Manifest />}></Route>
     <Route exact path="/dispatch" element={<Dispatch />}></Route>
     <Route exact path="/receive" element={<Receive />}></Route>
     <Route exact path="/status" element={<CargoStatus />}></Route>
     <Route exact path="/delivery" element={<Delivery />}></Route>




     
     
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
