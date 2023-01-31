import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { EveryProduct } from './everyProduct'

export const ProductRoutes = () => {
  return (
    <>
    <Route exact path="/product" element={<EveryProduct />} />
    </>
  )
}


// cartItem={cartItem} addToCart={addToCart}
