import React from 'react'
import Button from '@material-ui/core/Button';
// import {Animated} from "react-animated-css";
import TextTruncate from 'react-text-truncate'; 
import SearchIcon from '@material-ui/icons/Search';
import Data from './Data.json'
function Main() {
    const products = Data.products
    console.log(products)
    return (
        <div className="main">
            <span className="search">
            <   SearchIcon className="search-icon" style={{color: '#fff'}}/>
                <input type="search" placeholder="Search..."/>
            </span> 
            <span>
                
            </span>
            <div className="main-items">
                <ul>
                    {
                        products.map((product)=>(
                            <li key={product._id}>
                                <div className="main-items-box">
                                    <img src={product.image} alt="sd"/>
                                    <h5>{product.title}</h5>
                                    <TextTruncate
                                        line={1}
                                        element="h5"
                                        truncateText="…"
                                        text={product.description}
                                    />
                                    <span className="cost-btn">
                                    <h5>${product.price}</h5>
                                        <button>Add</button>
                                    </span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Main
