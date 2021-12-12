import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {removeCurrentUser} from'../redux/actions/user.actions'
const ProfilePage = (props) => {
    return (
        <ProfilePageContainer>   
        <InnerContainer>
      
            <h3>
                Welcome to Healthchain <span>
                {
                    props.user.currentUser.name
                }
                </span>
            </h3>
            
            <SignOutLink to='/sign' onClick={props.logout}>
                Sign Out
            </SignOutLink>
        </InnerContainer>
        </ProfilePageContainer>
            
    );
};
const mapStateToProps=(state)=>({
        user:state
})
const mapDispatchToProps=(dispatch)=>({
    logout:()=>{
            dispatch(removeCurrentUser())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage);

const ProfilePageContainer=styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image: linear-gradient(to right bottom, #bc1566, #aa247a, #93338b, #763e96, #53479b, #41489b, #2b499a, #004a99, #004799, #004499, #004198, #023e98);
    
`
const InnerContainer=styled.div`
    height:70%;
    width:30%;
    border:solid 1px rgba(0,0,0,0.3);
    border-radius:20px;
    background:white;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    span{
        margin-left:20px;
    }
    @media (max-width:426px){
        width:90%;
    }
`
const SignOutLink=styled(Link)`
        padding:10px 15px;
        background: red;
        color:white;
        border:none;
        border-radius:5px;
        cursor: pointer;
        text-decoration:none;
`