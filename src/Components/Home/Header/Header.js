import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';


const Header = () => {

    const { user, logout , admin} = useAuth();
    console.log(user)
  
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }
    return (
    <div>

    <div>
        <header className='header'>
            <div onClick={handleToggle} id="menu-btn" className="fas fa-bars"></div>


            <NavLink to="/home" className='logo ItemLink'><span>JIM</span>EDUCATION'S</NavLink>
          

          
{
navbarOpen === true ?

<nav className='nav2 shadow'>

<ul>
<li> <NavLink to="/home" className='ItemLink'>Home</NavLink></li>
<li>  <NavLink   to="/allCars" className='ItemLink'>expres</NavLink></li>
<li>    <NavLink to="/service" className='ItemLink'>Service</NavLink></li>

{admin &&
    <li>    <NavLink to="/DeashBoard" className='ItemLink'>DashBoard</NavLink></li>
}
<li>
<NavLink to="/about" className='ItemLink'>About</NavLink></li>
<li>    {
    user.email ?   <NavLink to="/login" className='ItemLink'>logOut</NavLink> : 
    
    
    <NavLink to="/login" className='ItemLink'>login</NavLink>}
    
    </li>




</ul>
</nav>
:
''

} 


                    <nav className='navbar '>

                        <NavLink to="/home" className='ItemLink'>Home</NavLink>
                        <NavLink to="/ALLteacher" className='ItemLink'>Teacher'S</NavLink>
                        <NavLink to="/services" className='ItemLink'>Service</NavLink>
                        <NavLink to="/AllStudent" className='ItemLink'>Student'S</NavLink>
                        <NavLink to="/AdmitionAll" className='ItemLink '>Admition'S</NavLink>


                    { admin &&   <NavLink to="/DeashBoard" className='ItemLink'>DashBoard</NavLink>}
                        <NavLink to="/resultAll" className='ItemLink'>Result'S</NavLink>
                        <NavLink to="/login" className='ItemLink'>login</NavLink>
                        <NavLink to="/login" className='ItemLink'> {user.displayName}</NavLink>


                       
            

           
                      
                    </nav>



                    {
                        user?.email ?
<>
                            <Link to="/login">
                                <div id='login-btn'>
                              
                                    <button onClick={logout} className='btn'>LogOut
                                    
                                   
                                    </button>
                                    <i className="far fa-user"></i>

                                </div>
                            </Link>
                           
                           </>
                            :
                            <Link to="/login">
                                <div id='login-btn'>
                                    <button className='btn'>Login</button>
                                    <i className="far fa-user"></i>

                                </div>
                            </Link>
                    }

 <Link style={{marginRight:'-60px'}}   to="/allOrder"  ><span id="font-shop" className=''>
                 {/* CARD */}
                 <i class="fas fa-shopping-cart"></i>
                                
                                </span> </Link>
                </header>

                {/* LOGIN */}


            </div>

        </div>
    );
};

export default Header;