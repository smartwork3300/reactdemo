
import './Styles.css'
import { Link } from 'react-router-dom'



export const Home = () => {

    return (
        <div className="home">
            
              

            <div class="container"  >
                <div class="row">
                    <div class="col-md-8" >
                    <div className="img">
                    <img src={process.env.PUBLIC_URL + '/images/RTC.png'}    class="img-fluid" />   
                    </div>

                    </div>



                    <div class="col-md-4" >
  
                    <form className="form">
                    <img src={process.env.PUBLIC_URL + '/images/form-logo.png'}  class="img-fluid"/>   

                <label >FirstName</label>
                <input type="text"></input>
                <label >LastName</label>
                <input type="text"></input>
                <label >Email Id</label>
                <input type="text"></input>

                <button  className="btn submit">Submit</button>
            </form>
                    </div>
                </div>
            </div>

            

            <div class="container">
    <div class="row">
        <div class="col-md-5"></div>
        <div class="col-md-3">
        <Link to="/manifest"><button class="button">Next Page</button></Link>

        </div>
        <div class="col-md-4"></div>

    </div>
    </div>

             


            


            
            
        </div>
    )
}