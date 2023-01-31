import React from 'react'
import { Head } from './head'
import { Search } from './search'
import { Navbar } from './navbar'

export const Header = ({cartItem, handleSearch}) => {
  return (
    <>
    <Head />
    <Search cartItem={cartItem} handleSearch={handleSearch}/>
    {/* <Navbar/> */}
    </>
  )
}
