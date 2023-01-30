import React, { useContext } from 'react'
import { globalinfo } from './Navbar'
export const Skills = () => {
  const {skillcolor} = useContext(globalinfo)
  console.warn("skillcolor",skillcolor)
  return (
    <div className='skills' style={{border:skillcolor}}>Skills  </div>
  )
}
