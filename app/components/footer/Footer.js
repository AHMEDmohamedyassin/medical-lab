import React from 'react'
import FooterContainer from './FooterContainer'
import FooterUpper from './FooterUpper'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterUpper/>
        <FooterMiddle/>
        <FooterBottom/>
    </FooterContainer>
  )
}

export default Footer