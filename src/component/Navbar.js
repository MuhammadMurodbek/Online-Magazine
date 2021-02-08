import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {NavLink} from 'react-router-dom'

export  function Navbar() {
    return (
        <div>
            <div className="navbar">
            <div className="navbar-part">
               <span className="navbar-part-info">
                    <a href="#">Online Market</a>
                    <ul>
                        <li><NavLink to="/">Asosiy</NavLink></li>
                        <li><NavLink to="/about">Biz haqimizda</NavLink></li>
                        <li><NavLink to="/connect">Aloqa</NavLink></li>
                        <li><NavLink to="/advice">Taklifnomalar</NavLink></li>
                    </ul>
               </span>
                <span className="navbar-part-shop">
                    <IconButton style={{color:"#fff"}} aria-label="add to shopping cart">
                        <Badge badgeContent={4} color="secondary">
                            <AddShoppingCartIcon />
                        </Badge>   
                    </IconButton>
                </span>
            </div>
        </div> 
        </div>
    )
}
