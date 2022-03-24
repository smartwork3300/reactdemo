import "./Delivery.css"
import { Link } from "react-router-dom"

export const Delivery = () =>{
    return (
        <div>

<div class="container text-center">
        <h5>Out For Delivery</h5>
        <div class="row">
            <div class="col-md-12">
                <div>
                    <label>Consignment ID</label>
                    <input type="number"/>
                </div>
                <div>
                    <label>Receiver Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Receiver Contact Number</label>
                    <input type="number"/>
                </div>
                <div>
                    <label>Receiver Address</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Assign Person Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Assign Person Contact Number</label>
                    <input type="number"/>
                </div>
            </div>
        </div>


        <div class="row">
        <div class="col-md-5"></div>
        <div class="col-md-3">
        <Link to="/home"><button class="button">Submit</button></Link>

        </div>
        <div class="col-md-4"></div>

    </div>
    </div>

        </div>
    )
}