import React, { Component } from 'react';
import styled from "styled-components"
import { HashRouter as Router, withRouter } from "react-router-dom";
import Header from "./components/navigation/header";
import MainContainer from "./components/main/main"
import Footer from "./components/footer/footer"
import Routes from './Routes';
import "./App.css"

const Wrapper = styled.div`
  height: 700px;
  margin-bottom: 20px;
`

const isLoggedIn = ''
class App extends Component {
  render(){
    return(
      <Router>
      <div className="App">
        <Header></Header>
        <Wrapper>
          <Routes isLoggedIn={isLoggedIn} />
        </Wrapper>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default withRouter(App);
