import "./Cargostatus.css"
import { Link } from "react-router-dom"

export const CargoStatus = () =>{
    return (

        <div>
             <div class="container">
        <h5>Current Cargo Status</h5>

        <div class="cons-id">
            <label >Consignment ID</label>
            <input  type="text" /><br/>
    <button class="button">Check</button>
        </div>
        

        <div class="row">
            <div class="col-md-6">
                <div>

                    <label >Destination</label>
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

                    <label > Driver Contact Number</label>
                    <input  type="text" />
                </div>
                <div>

                    <label >Status</label>
                    <input  type="text" />
                </div>
                <div>

                    <label >Receiver Name</label>
                    <input  type="text" />
                </div>
                <div>

                    <label >Receiver Contact Number</label>
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

                    <label >Description</label>
                    <input  type="text" />
                </div>
                <div>

                    <label >Manifest ID</label>
                    <input  type="text" />
                </div>

                <ul class="unorderedlist">
                    <li>Enroute</li>
                    <li>Reached Final Station</li>
                    <li>Ready to Dispatch </li>
                    <li>Delivered</li>
                    <li>Out for Delivery</li>
                  </ul>  

            </div>
        </div>
    </div>



    <div class="row">
        <div class="col-md-5"></div>
        <div class="col-md-3">
        <button class="button">Submit</button>

        </div>
        <div class="col-md-4"></div>

    </div>


    <div class="container">
       <div class="row">
        <div class="col-md-5"></div>
        <div class="col-md-3">
        <Link to="/delivery"><button class="button">Next Page</button></Link>
        </div>
        <div class="col-md-4"></div>
        </div>
        </div>
        </div>
    )
}