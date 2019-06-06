import React from 'react';
import styled from 'styled-components';

const SignupDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  background-color: #F9F9F9;
`
const Header = styled.p`
  font-size: 3rem;
  color: #512772;
  font-weight: 500;
  padding: 2rem;
`
const SignupForm = styled.form`
  padding: 2rem 0;
  display:flex;
  flex-direction: column;
  width: 20%;
  margin: auto;
  border: 2px solid purple;
  background-color: white;
  
`

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
`

const InputSpan = styled.span`
  color: #181818;
  font-weight: 500;
`

const InputValue = styled.input`
  font-size: 0.8rem;
  width: 60%;
  margin-right: 1rem;
  &:focus {
    outline: 1px solid purple;
    border:1px solid purple;
    box-shadow: 0 0 4px;
  }
`

const RadioDiv = styled.div`
  display: flex;
  font-size: 0.8rem;
  width: 60%;
  margin-right: 3rem;
  margin-top: 0.5rem;
  margin-left: 2rem;
`

const RadioSpan = styled.span`
  margin: -0.1rem 1rem 0.2rem 0.4rem;
`

const SubmitButton = styled.button`
  width: 60%;
  margin: auto;
  background-color: #512772;
  color: white;
`

class SignUp extends React.Component {
  state= {
    id:'',
    password:'',
    age:'',
    gender:''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.handleClick();
  }
  
  handleChange= (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    
  }
  handleClick = () => {
    console.log(this.state)
    console.log('WOW')
  }
  
  render(){
    return (
      <SignupDiv>
        <Header>회원 가입</Header>
        <SignupForm onSubmit={this.handleSubmit}>
          <InputDiv>
            <InputSpan>아이디</InputSpan>
            <InputValue onChange={this.handleChange} type="text" name="id" placeholder="아이디를 입력하세요"/>
          </InputDiv>
          <InputDiv>
            <InputSpan>비밀번호</InputSpan>
            <InputValue onChange={this.handleChange} type="password" name="password" placeholder="비밀번호를 입력하세요"/>
          </InputDiv>
          <InputDiv>
            <InputSpan>나이</InputSpan>
            <InputValue onChange={this.handleChange} type="number" name="age" placeholder="나이를 입력하세요"/>
          </InputDiv>
          <InputDiv>
            <InputSpan>성별</InputSpan>
            <RadioDiv>
              <input onChange={this.handleChange} type="radio" name="gender" value="1" /><RadioSpan>남성</RadioSpan>
              <input onChange={this.handleChange} type="radio" name="gender" value="2" /><RadioSpan>여성</RadioSpan>
            </RadioDiv>
          </InputDiv>
          <SubmitButton type="submit">회원가입</SubmitButton>
        </SignupForm>
      </SignupDiv>
    )
  }
}

export default SignUp