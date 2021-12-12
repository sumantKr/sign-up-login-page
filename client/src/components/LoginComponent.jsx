import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios';
//redux actions
import { addCurrentUser } from '../redux/actions/user.actions.js';
//api
import { URL } from '../api/api.js'

class LoginComponent extends React.Component {
    async loginUser(e,callback) {
        const dataToBeVerified = {
            email: e.target[0].value,
            password: e.target[1].value,
        }
        console.log(dataToBeVerified);
        try {
            await axios.get(
                URL + '/user/login-user', {
                params: dataToBeVerified
            }
            )
                .then((dataThatCameBack) => {
                    if (dataThatCameBack.status !== 201)
                        alert(dataThatCameBack.data);
                    else if (dataThatCameBack.status === 201)
                            callback(dataThatCameBack.data);
                    console.log(dataThatCameBack.data)
                })
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        console.log(this.props)
        return (
            <FormContainer>
                <Heading>Welcome back </Heading>

                <SignInForm onSubmit={(e)=>{
                    e.preventDefault();
                    this.loginUser(e,this.props.setCurrentUser)
                }}
                >
                    <label >Email</label>
                    <input
                        type="email"
                        name="email"
                    // required
                    />
                    <label >Password</label>
                    <input
                        type="password"
                        name="password"
                    // required
                    />
                    <SignInButton type="submit">Sign In With Mail</SignInButton>
                    <hr />
                </SignInForm>
                <div>
                    <p>New here?<span><SignUpLink to='/sign/' >Sign Up.</SignUpLink></span></p>
                </div>
            </FormContainer>
        )
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: (userToSet) => {
        dispatch(addCurrentUser(userToSet))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);



const FormContainer = styled.div`
    height:90%;
    width:90%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    &:last-child p{
        font-size:12px;
    }
    @media (max-width:768px){
        &:last-child p{
            margin-top:5px;
        }
    }
    `
const SignUpLink = styled(Link)`
    text-decoration:none;
            color:#4547c9;
`
const Heading = styled.div`
    font-family: 'Vollkorn', serif;
    font-weight:500;
    font-size:1.5rem;
    @media (max-width:768px){
        font-size:1.2rem;
        margin:2rem 0 1rem 0 ;
        }
    `
const SignInForm = styled.form`
    height:65%;
    width:fit-content;
    padding:10%;
    display:flex;
    text-align:center;
    flex-direction:column;
    border:solid 1px rgb(213,213,213,0.6);
    border-radius:20px;
    label{
        font-size:10px;
        font-weight:500;
        margin: 5px 0;
        text-align:start;
    }
    input{
        border: solid 1px #4547c9;
        border-radius:8px;
        margin:2px;
        padding:7px 15px;
        outline:none;
        &:focus{
        border: solid 3px #4547c9;
        margin:0;
        }
    }
    hr{
        width:80%;
        background:rgb(213,213,213,0.7);
        margin :20px auto;
    }   
    @media (max-width:768px){
        height:fit-content;
        padding:5px 15px;;
        }
    /* @media (max-width:768px){
        height:90%;
        } */
    `
const SignInButton = styled.button`
    margin-top:20px;
    background-color:white;
    font-weight:600;
    padding:10px 15px;
    border-radius:3px;
    cursor:pointer;
    border: solid 2px #4547c9;
    &:hover{
        color:white;
        background-color:#4547c9;
    }
    `
