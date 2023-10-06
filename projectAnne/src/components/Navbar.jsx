import { Link } from 'react-router-dom'

function Navbar() {



    return (
        <nav>
            <Link to={"/"}>
            <h2>Home</h2>
            </Link>
            <ul>
            <Link to="/add-recipe">
                <li>Add page</li>
            </Link>
            </ul>
        </nav>
    )
    }
    
    
    
    
    
    
    
    export default Navbar