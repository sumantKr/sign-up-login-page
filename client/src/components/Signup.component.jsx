import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios'

//api
import { URL } from '../api/api.js'
class SignUpComponent extends React.Component {

    async submitForm(e) {
        e.preventDefault();
        const userData = {
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,

        }

        try {

            await axios.post(
                URL + '/user/sign-up-user', userData)
                .then((dataThatCameBack) => {
                    alert(dataThatCameBack.data);
                    console.log(dataThatCameBack)
                })
        } catch (e) {
            console.log(e);
        }
    }
    render() {

        return (

            <FormContainer>
                <Heading>Create your free account</Heading>
                <SignUpForm onSubmit={this.submitForm} >
                    <label >Name</label>
                    <input type="name" name="name"
                        required
                    />
                    <label >Email</label>
                    <input type="email" name="email"
                        required
                    />
                    <label>Password</label>
                    <input type="password" name="password"
                        placeholder="at least 6 characters long"
                        required
                    />


                    <SignUpButton type="submit">Sign Up With Mail</SignUpButton>
                    <hr />
                    <div>
                        <p>Already have an account?<span><SignInLink to="/sign/in">Sign In.</SignInLink></span></p>
                    </div>
                </SignUpForm>

            </FormContainer>
        )
    }
}

export default (SignUpComponent);

// <input type="radio" name="Male" value="Male" />
// <label htmlFor="Male" >Male</label>
// <input type="radio" name="Female" value="Female" />
// <label htmlFor="Female">Female</label>
// <input type="radio" name="Non-Binary" value="Non-Binary" />
// <label htmlFor="Non_binary">Non-Binary</label>
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
const SignInLink = styled(Link)`
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
const SignUpForm = styled.form`
    height:73%;
    width:fit-content;
    padding:10%;
    display:flex;
    text-align:center;
    flex-direction:column;
    border:solid 1px rgb(213,213,213);
    border-radius:20px;
    background:rgba(213,213,213,0.3);
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
        padding:5px 15px;
        }
    /* @media (max-width:768px){
        height:90%;
        } */
    `
const SignUpButton = styled.button`
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