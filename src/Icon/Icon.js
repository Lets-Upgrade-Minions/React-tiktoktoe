import React from 'react'
import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";
const Icon = ({icon})=>{
    switch(icon){
        case 'cross':
            return <FaTimes />
        case 'circle':
            return <FaRegCircle />
        default:
            return <FaPen />
    }
}
export default Icon;