import React from 'react'
import UpperPartComp from './UpperPartComp'
import MiddlePartComp from './MiddlePartComp'

const HeaderComp = () => {
  return (
    <>
        <header>
            <UpperPartComp/>
            <MiddlePartComp/>
        </header>
      </>
  )
}

export default HeaderComp