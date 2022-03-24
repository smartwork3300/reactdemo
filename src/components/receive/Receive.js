import "./Receive.css"
import { Link } from "react-router-dom"

export const Receive = () =>{
    return (
        <div>


<div class="container">
        <h5>Receive Cargo  Page</h5>
         
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div>

                <label >Manifest ID</label>
                <input  type="text" />
            </div>
            <div>
            <button class="button">Submit</button>

            </div>
            <div>

                <label >Dispatch Station</label>
                <input  type="text" />
            </div>
            <div>

                <label >Arrived at</label>
                <input  type="text" />
            </div>
            <div>

                <label >Bus Service</label>
                <input  type="text" />
            </div>
            <div>

                <label >Driver Name</label>
                <input  type="text" />
            </div>
            <div>

                <label >Driver Contact Number</label>
                <input  type="text" />
            </div>
        </div>
        <div class="col-md-4"></div>
        
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

            <button class="button">Submit</button>

            </div>
            <div class="col-md-4"></div>

        </div>
    </div>


    <div class="container">
       <div class="row">
        <div class="col-md-5"></div>
        <div class="col-md-3">
        <Link to="/status"><button class="button">Next Page</button></Link>
        </div>
        <div class="col-md-4"></div>
        </div>
        </div>

        </div>
    )
}