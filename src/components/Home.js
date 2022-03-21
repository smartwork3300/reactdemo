
import './Navbar.css'
export const Home = () => {

    return (
        <div>
            <h1>Home </h1>
            <div className="container-fluid header">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'}  className="img-fluid mx-auto d-block"/> 
            </div>
        </div>
    )
}