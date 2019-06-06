import React, { Component } from 'react';
import styled from 'styled-components';

const MenuBar = styled.div`

`
const ItemList = styled.ul`
  display:flex;
  justify-content: center;
`
const Items = styled.li`
  margin: 0;
  padding: 0 0 1.5rem 0;
`

const ItemLink = styled.a`
  text-decoration: none;
  padding: 1rem 3rem 0 3rem;
  cursor: pointer;
  &:hover {
    span {
      color: #512772;
      font-weight: 700;
    }
  }
`

const ItemText = styled.span`
  color: #666666;
  font-size: 1rem;
`

class ItemMenuBar extends Component {
  render(){
    return(
      <MenuBar>
        <ItemList>
          <Items>
            <ItemLink><ItemText>전체 카테고리</ItemText></ItemLink>
          </Items>
          <Items>
            <ItemLink><ItemText>베스트</ItemText></ItemLink>
          </Items>
          <Items>
            <ItemLink><ItemText>MD의 추천</ItemText></ItemLink>
          </Items>
          <Items>
            <ItemLink><ItemText>카테고리</ItemText></ItemLink>
          </Items>
      </ItemList>
      </MenuBar>
    )
  }
}
export default ItemMenuBar;