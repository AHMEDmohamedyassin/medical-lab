import React from 'react'

const ButtonCustom = ({text , textColor , hoverColor}) => {
  return (
    <button className={`py-2 px-6 text-md font-semibold text-${textColor} border-${textColor} border-[1px] hover:text-white hover:bg-${hoverColor}`}>{text}</button>
  )
}

export default ButtonCustom