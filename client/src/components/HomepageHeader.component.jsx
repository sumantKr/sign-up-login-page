import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
const HomepageHeader = () => {
  return (
    <LettersHeaderContainer>
      <LettersHeader>
        <HeaderTitle as={Link} to='/home'>
          Letters.
        </HeaderTitle>
        <ProfileContainer>
          <Route path="/home">
            <YourLettersButton as={Link} to="/profile">
              Your Letters
            </YourLettersButton>
          </Route>
          <Route path="/profile">
            <SignOutButton >
              Sign Out
            </SignOutButton>
          </Route>
        </ProfileContainer>
      </LettersHeader>
    </LettersHeaderContainer>
  );
};

export default HomepageHeader;


const LettersHeaderContainer = styled.div`
    width:100%;
    height:7vh;
    background:#2392b8;
    background-image: linear-gradient(to right , #bc1566, #aa247a, #93338b, #763e96, #53479b, #41489b, #2b499a, #004a99, #004799, #004499, #004198, #023e98);

    box-shadow: 0 3px 3px rgba(0,0,0,0.2);
`
const LettersHeader = styled.div`
      width:55%;
      margin:auto;
      display:flex;
      justify-content:center;
      align-items:center;
      @media (max-width:426px){
        width:90%;
        /* justify-content:space-between; */
      }

`
const HeaderTitle = styled.div`
  height:100%;
  margin:auto;
  flex:1;
  font-family: 'Secular One', sans-serif;
  font-size:2rem;
  color:#ffffff; 
  text-decoration:none;
  cursor: pointer;  
`
const ProfileContainer = styled.div`
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  
  
`

const YourLettersButton = styled.div`
   font-weight:600;
    cursor: pointer;
    outline:none;
    background: #ffffff;
    border:none;
    border-radius:2px;
    padding:5px 8px;
    text-decoration:none;
    &:hover{
      color:white;
      background:#102d37;
    }
`
const SignOutButton = styled.div`
   font-weight:600;
    cursor: pointer;
    outline:none;
    background: red;
    border:none;
    border-radius:2px;
    padding:5px 8px;
    text-decoration:none;
    &:hover{
      color:red;
      background:white;
    }
`