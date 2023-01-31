import React from 'react'
import { useState } from 'react';
import { SpecificationTable } from './specificationTable';
import {Description} from './description'
import {Review} from './review'

export const LongDescription = ({select}) => {
    const [selectCat, setSelectCat] = useState('specifications');
    

    return (
    <>      
      <div className="box-cat">
        <div className="catName">
          <span onClick={()=> setSelectCat('specifications')}>ALL SPECIFICATIONS</span>
          <span onClick={()=> setSelectCat('description')}>DESCRIPTION</span>
          <span onClick={()=> setSelectCat('reviews')}>REVIEWS</span>
        </div>
      </div>
      {selectCat==='description' &&  <Description select={select}/>}
      {selectCat==='reviews' && <Review/>}
      {selectCat==='specifications' && <SpecificationTable select={select}/>}

    </>
  )
}
