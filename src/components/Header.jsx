import React from 'react'
import {HStack} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>

    <button variant={"unstyled"} style={{"color": "white"}}>
        <Link to="/">Home</Link>
    </button>
    <button variant={"unstyled"} style={{"color": "white"}}>
        <Link to="/exchanges">Exchanges</Link>
    </button>
    <button variant={"unstyled"} style={{"color": "white"}}>
        <Link to="/coins">Coins</Link>
    </button>
   </HStack>
  )
}

export default Header
