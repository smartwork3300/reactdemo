import "./Dispatch.css"
import { Link } from "react-router-dom"

export const Dispatch = ()=>{
    return (
        <div>



<div class="container">
        <h5>Dispatch Cargo  Page</h5>

        <div class="row">
            <div class="col-md-6">
                <div>

                    <label >Destination</label>
                    <input  type="text" />
                </div>
                <div>
                    <label >Consignment ID</label>
                    <input  type="text" />

                </div>
               
                <div>
                    <label >Consignment Description</label>
                    <input  type="text" />
                </div>
                
                <div>
                    <label >Courier Number</label>
                    <input  type="text" />
                </div>
               
                <div>
                    <label >Driver Name</label>
                <input  type="text" />
                </div>
                <div>
                    <label >Agent ID</label>
                <input  type="text" />
                </div>
               <div>
                <label >Agent Contact Number</label>
                <input  type="text" />
               </div>
            </div>
            <div class="col-md-6">
                <div>
                    <label >Source</label>
                    <input  type="text" />
                </div>
               
                <div>
                    <label >Manifest ID</label>
                    <input  type="text" />
                </div>
                <div>
                    <label >Enroute</label>
                    <input  type="text" />
                </div>
                
               
            </div>
        </div>
    </div>



    <div class="container">
       <div class="row">
        <div class="col-md-5"></div>
        <div class="col-md-3">
        <Link to="/receive"><button class="button">Submit</button></Link>
        </div>
        <div class="col-md-4"></div>
        </div>
        </div>





        </div>
    )
}