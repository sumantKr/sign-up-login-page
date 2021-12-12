import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

//components 
import SignUpComponent from '../components/Signup.component';
import LoginComponent from '../components/LoginComponent';
const SignUpPage = () => {
    return (
        <LoginAndSignUpPageContainer>
            <LeftContainer>
                <Hero>
                    <div>
                    <h1>MediChain</h1>
                    <h2>Your Healthcare Data. Our priority.</h2>
                    </div>
                </Hero>
            </LeftContainer>
            <RightContainer>
                <RightInnerContainer>
                    <Route exact path='/sign/' component={SignUpComponent} />
                    <Route exact path='/sign/in' component={LoginComponent} />
                </RightInnerContainer>
            </RightContainer>
        </LoginAndSignUpPageContainer>
    );
};
export default SignUpPage;




const LoginAndSignUpPageContainer = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    @media (max-width:768px){
        flex-direction:column;
    }
`

const LeftContainer = styled.div`
    height:100%;
    width:60%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    background-image: linear-gradient(to right bottom, #bc1566, #aa247a, #93338b, #763e96, #53479b, #41489b, #2b499a, #004a99, #004799, #004499, #004198, #023e98);
    @media (max-width:768px){
        height:30%;
        width:100%;
        justify-content:center;
    }
`

const Hero = styled.div`
        height:80%;
        width:80%;
        display:flex;
      
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        border-radius: 20px 0 0 20px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        div{
           width:80%;
           height:70%;
           margin:auto;
           
        &>*{
            margin-top:10px;
        }
            h1{
                font-family: 'Secular One', sans-serif;
                font-size:100px;
                color:#ffffff;    
            }
            h2{
                font-size:29px;
                color:#3f10ae;
            } 
          
        
        }
        
        @media (max-width:768px){
            border-radius: 20px;
            height:fit-content;
        div{
            height:100%;
            width:90%;
            h1{
                text-align:center;
                font-size:4rem;
            }
            h2{
                font-size:20px;
                text-align:center;
                margin-top:0;
                margin-bottom:10px;
            }
            
           
        
        }
        
    }
    @media (max-width:426px){
        div h1{
            font-size:2.5rem;
        }
    }


    
    
`

const RightContainer = styled.div`
    height:100%;
    width:40%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    @media (max-width:768px){
        height:65%;
        width:100%;
        justify-content:center;
    }
`


const RightInnerContainer = styled.div`
    height:80%;
    width:70%;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 0 10px 10px 0;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    @media (max-width:768px){
        height:95%;
        width:85%;
        justify-content:center;
        border-radius: 25px ;
    }
`