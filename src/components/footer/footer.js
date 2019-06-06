import React from "react"
import styled from "styled-components"

const FooterDiv = styled.div`
  margin-top: 70px;
  padding: 70px 3rem;
  color: white;
  background-color: #333333;
  bottom: 0;
  width: 100%;
`
const Footer = () => (
    <FooterDiv>
       © Market Hufs
    </FooterDiv>
  )

export default Footer;