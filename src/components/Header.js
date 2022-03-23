import './Styles.css'
export const Header = () => {

    return (
        <div>
            
            <div className="container-fluid header">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'}  className="img-fluid mx-auto d-block"/> 
            </div>
        </div>
    )
}