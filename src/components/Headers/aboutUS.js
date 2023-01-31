import React from 'react'
import {useParams} from 'react-router-dom'


export const AboutUS = () => {
  const {id}=useParams()
  return (
    <>
    <h1>ABout us {id}</h1>
    </>
  )
}
