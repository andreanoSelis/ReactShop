import React from 'react'
import shoppingLogo from './Image/shop-logo.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import './Header.css'
import { useStateValue } from './StateProvider';
import { auth } from './firebase'
function Header(){
    const [{cart, loggedinUser}, dispatch] = useStateValue();
    const logoutUser = () => {
        if(loggedinUser){
            auth.signOut();
        }
    }
    return(
        <nav className="header">
            <img className="header_logo" src={shoppingLogo} alt="logo" />
            <div className="header_search">
                <input type="text" placeholder="Search on ShopEaZy" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!loggedinUser && "/login"} className="header_link">
                    <div onClick={logoutUser} className="header_option">
                        <span className="header_optionLine1">Hello {loggedinUser?.email}</span>
                        <span className="header_optionLine2">{loggedinUser ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLine1">Returns</span>
                        <span className="header_optionLine2">& Orders</span>
                    </div>
                </Link>
            </div>
            <Link to="/checkout" className="header_link">
                <div className="header_optionCart">
                    <ShoppingCartOutlinedIcon/>
                    <span className="header_productCount">{cart?.length}</span>
                </div>
            </Link>    
        </nav>
    )
}

export default Header