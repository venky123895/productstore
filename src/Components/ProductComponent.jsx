import React from 'react'
import './product.css'
import { useContext } from 'react'
import { GlobalData } from '../App'
const ProductComponent = () => {
    const {state}=useContext(GlobalData)
  return (
    <div className='product'>
      {
        state.map((ele)=>{
            return(
                <div className="card">
                <h3 className='title'>{ele.title}</h3>
                <img src={ele.image} alt='productImage' className='productImage'/>
                <h4 className='price'>Price: $ <span>{ele.price}</span></h4>
                <button className='but'>Add To Cart</button>
            </div>
            )
        })
      }
    </div>
  )
}

export default ProductComponent