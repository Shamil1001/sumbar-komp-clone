import React from 'react'
import DATA from '../DATA Folder/CasesData'
import './products.css'

export const Routers = ({productItems,addToCart}) => {
    var products=DATA.productItems

  return (
    <>
            <h4 className='rtitle'>ROUTERS</h4>
    <div className="router box">
            <div className="heading f-flex">

            <div className="product mtop">
                <div className="compare">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Compare
                    </label>
                  <i className="fa fa-heart"></i>
                </div>
              <div className="img">
                    <img src={products[17].img1} />
                  </div>
              </div>
              <div className="product-details">
                <h5>{products[17].name}</h5>
                <div className="price">
                  <h5>{products[17].price}.00 TMT</h5>
                  <button className="btn btn-danger" onClick={()=> addToCart(products[17])}>ADD TO CART</button>
                </div>
              </div>
            </div>
            </div>
          </div>
    </>

  )
}
