import { FaAngleLeft } from "react-icons/fa6";

import React from 'react'

function Item({title, style , clickHandler, item}) {
  return (
    <div onClick={()=>clickHandler(item)}
    style={
        style
          ? { backgroundColor: "rgb(152, 217, 221)", color: "#0ea5e9" }
          : null
      }
    >
        {title}
        <FaAngleLeft/>
    </div>
  )
}

export default Item