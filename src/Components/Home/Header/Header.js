import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { getStoredCart } from '../../Utilitis/FakeDb';
import './Header.css';


const Header = () => {

    const { user, logout, admin } = useAuth();
    // console.log(user)

    const [navbarOpen, setNavbarOpen] = useState(false)

    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);

    // console.log(products);


    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }


    // LOCAL STORE
    useEffect(() => {
        fetch('http://localhost:5000/admition')
            .then(res => res.json())
            .then(data => {


                setProducts(data);
                // console.log(data);
            })
    }, [])


    useEffect(() => {
        if (products.length) {

            const savedCart = getStoredCart();
            const storedCart = [];
            for (const _id in savedCart) {
                const addedProduct = products.find(product => product._id === _id);
                if (addedProduct) {
                    const quantity = savedCart[_id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCard(storedCart);
        }






    }, [products])





    let totalQuantity = 0;
    let total = 0;

    for (const product of card) {
        // console.log(product);

        if (!product.quantity) {
            product.quantity = 1;
        }
        // price =product.admition.price  ;
        total = total + product.admition.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        // console.log(totalQuantity);

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
                                    <li>  <NavLink to="/allCars" className='ItemLink'>expres</NavLink></li>
                                    <li>    <NavLink to="/service" className='ItemLink'>Service</NavLink></li>

                                    {admin &&
                                        <li>    <NavLink to="/DeashBoard" className='ItemLink'>DashBoard</NavLink></li>
                                    }
                                    <li>
                                        <NavLink to="/about" className='ItemLink'>About</NavLink></li>
                                    <li>    {
                                        user.email ? <NavLink to="/login" className='ItemLink'>logOut</NavLink> :


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


                        {admin && <NavLink to="/DeashBoard" className='ItemLink'>DashBoard</NavLink>}
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

                    <Link style={{ marginRight: '-60px' }} to="/allOrder"  >

                        <span id="font-shop" className=''>
                            {/* CARD */}


                            <i class="fas fa-shopping-cart"></i>


                            {
                                totalQuantity.length === 0 ?
                                    <div className="spinner-border text-light" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>

                                    :

                                    <span className='SHOP'> {totalQuantity}  </span>
                            }

                        </span>

                    </Link>
                </header>

                {/* LOGIN */}


            </div>

        </div>
    );
};

export default Header;