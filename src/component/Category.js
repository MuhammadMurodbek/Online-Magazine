import React from 'react'
import {NavLink} from 'react-router-dom'
import Data from './Data.json'
const Category = () => {

    let products=Data.products
    let proFilter = products.map(item=>item.category)
    let checkProFilter=[], lastFilter=[]

    proFilter.forEach(item=>{
        if(!checkProFilter.includes(item)){checkProFilter.push(item)}
    })
    checkProFilter.forEach(last=>{
        lastFilter.push(products.filter(item=>item.category===last)[0])
    })
    console.log(lastFilter)
    return (
        <div className="category">
            <ul className="category-wrapper">
                {
                    lastFilter.map((item,index)=>(
                        <li key={index}>
                             <div className="cat-box-wrapper">
                                 <div className="c-img-wr">
                                     <img src={item.image} alt={item.title}/>
                                 </div>
                                <NavLink to="/dash" className="navlink-text">{item.title}</NavLink>
                             </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Category
