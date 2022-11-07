import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import "./Navbar.scss"

const Navbar = () => {

    
  return (
    <div class="navbar">
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>                
                {
                // Come back and optimize navbar, Following a tutorial rn
            }
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>Homepage</span>
            </div>
            <div className="right">
                <Search className="icons"/>
                <span>KIDS</span>
                <Notifications className="icons"/>
                <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                
                <div className="profile">
                    <ArrowDropDown className="icons"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar