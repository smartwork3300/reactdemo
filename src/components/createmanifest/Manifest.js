import "./Manifest.css"
import { Link } from "react-router-dom"

export const Manifest = ()=>{
    return (
        <div>
<div class="container">
        <div class="page-header">
            <h5>Create Manifest Page</h5>
            <label >Manifest ID</label>
    <input  type="number"/>

        </div>
    
        <div class="row">
    
            <div class="col-md-4">
                <div>
                    <label >Date</label>
    <input type="number"/>
                </div>
   <div>
    <label >From</label>
    <input type="text"/>
   </div>
            </div>
            <div class="col-md-4">
               <div>
                <label >Bus Number</label>
                <input  type="number" />
               </div>
                <div>
                    <label >To</label>
    <input type="text"/>
                </div>
            </div>
            <div class="col-md-4">
              <div>
                <label >Depo</label>
                <input  type="text"/>
              </div>
            </div>
        </div>
    </div>


    
    <div class="container">
        <div class="row">
            <div class="col-md-6">
               <div>
                <label >Total Packages</label>
                <input  type="text" />
               </div>
                <div>
                    <label >Crew Charges</label>
                <input  type="text" />
                </div>
            </div>
            <div class="col-md-6">
               <div>
                <label >Actual Weight</label>
                <input  type="text" />
               </div>
               <div>
                <label >Driver/Conductor Name</label>
                <input  type="text" />
               </div>
                <div>
                    <label >Driver/Conductor Contact Number</label>
                <input  type="text" />
                </div>

            </div>
        </div>
    </div>


    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div>
                    <label >Agent ID</label>
                <input  type="text" />
                </div>
               <div>
                <label >Agent Contact Number</label>
                <input  type="text" /> 
               </div>
            </div>
            <div class="col-md-4"></div>

        </div>
    </div>


    <div class="container">
       <div class="row">
        <div class="col-md-5"></div>
        <div class="col-md-3">
        <Link to="/dispatch"><button class="button">Submit</button></Link>
        </div>
        <div class="col-md-4"></div>
        </div>
        </div>


        </div>
    )
}