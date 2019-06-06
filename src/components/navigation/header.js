import React, { Component } from 'react';
import styled from 'styled-components';
import UserMenu from './userMenu';
import ItemMenuBar from './ItemMenu';

const NavDiv = styled.div`
  background-color: white;
`

const Container = styled.div`
  width: 80%;
  padding-right:15px;
  padding-left:15px;
  margin-right:auto;
  margin-left:auto
`
const VioletBar = styled.div`
  background-color: #512772;
  height: 3rem;
`

const NavHeader = styled.h1`
  text-align: center;
  color: #512772;
  padding: 1rem;
  margin-bottom: 2rem;
`

class Header extends Component {
  render(){
    return(
      <NavDiv>
        <VioletBar />
        <Container>
          <UserMenu/>
          <NavHeader>Market Hufs</NavHeader>
          <ItemMenuBar/>
        </Container>
      </NavDiv>
    )
  }
}

export default Header;