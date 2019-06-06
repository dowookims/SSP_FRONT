import React from "react"
import ControlledCarousel from "./main_carousel"
import styled from "styled-components";
import FirstData from "./first_data/first_data"

const CarouselLayout = styled.div`
  height: 20vh;
  max-height: 20vh;
  margin-top:2rem;
`

const FirstDataLayout = styled.div`

  margin-top: 14rem;
`


class MainContainer extends React.Component {
  render(){
    return (
      <>
        <CarouselLayout>
          <ControlledCarousel></ControlledCarousel>
        </CarouselLayout>
        <FirstDataLayout>
          <h1>What a pity</h1>
          <FirstData/>
        </FirstDataLayout>
      </>
    )
  }
}

export default MainContainer;