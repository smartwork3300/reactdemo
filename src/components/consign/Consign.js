import "./Consign.css"

export const Consign = () =>{
    return (
        <div>
                    <img src={process.env.PUBLIC_URL + '/images/rtc.jpg'}  class="img-fluid"/>   



                    <div class="container">
                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-4" >
                            <form className="form consign">
                    

                <label >FirstName</label>
                <input type="text"></input>
                <label >LastName</label>
                <input type="text"></input>
                <label >Email Id</label>
                <input type="text"></input>

                <button  className="btn submit">Submit</button>
            </form>
                            </div>

                            <div class="col-md-4"></div>

                        </div>
                    </div>








                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                            <form className="form consign">
                    

                    <label >FirstName</label>
                    <input type="text"></input>
                    <label >LastName</label>
                    <input type="text"></input>
                    <label >Email Id</label>
                    <input type="text"></input>
    
                    <button  className="btn submit">Submit</button>
                </form>
                            </div>
                            <div class="col-md-4" >
                            
                            </div>

                            <div class="col-md-4">
                            <form className="form consign">
                    

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

        </div>
    )
}