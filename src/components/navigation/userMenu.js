import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, Route, Switch } from 'react-router-dom';

const MenuBox = styled.div`
  margin-top: 1rem;
  margin-right: auto;
`

const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`
const MenuItem = styled.li`
  color: blue;
  margin: 0 0.7rem;
  &:hover {
    span{
      color: #512772;
      font-weight: 700;
    }
  }
`

class UserMenu extends Component {
  render(){
    return (
      <MenuBox>
        <MenuList>
          <MenuItem>
            <NavLink to="/"><span>메인</span></NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/signup"><span>회원가입</span></NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/login"><span>로그인</span></NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="#"><span>히오스</span></NavLink>
          </MenuItem>
        </MenuList>
        <Switch>
          <Route path="/" exact component={''} />
          <Route path="/login" exact component={''} />
          <Route path="/signup" component={''} />
          <Route path="/users/" component={''} />
        </Switch>
      </MenuBox>

      
    )
  }
}

export default UserMenu;