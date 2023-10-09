import { Link } from 'react-router-dom'

function Navbar() {



    return (
        <nav>
            <ul>
            <Link to={"/"}>
            <li>My recipes</li>
            </Link>
            <Link to="/add-recipe">
                <li>Add recipe</li>
            </Link>
            <Link to="/explore">
                <li>Explore recipes</li>
            </Link>
            </ul>
        </nav>
    )
    }
    
    
    
    
    
    
    
    export default Navbar