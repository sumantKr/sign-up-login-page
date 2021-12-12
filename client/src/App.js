import React from "react";
import styled from "styled-components";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
//components
import SignUpPage from './pages/SignUpPage.component'
import ProfilePage from './pages/profilePage.component'
const App = (props ) => (
  <MainPage>
 {
   console.log(props)

}
{
  props.user.currentUser
  ?
  <Redirect to="/profile"/>
  :
  <Redirect to="/sign"/>
}
<Route  path='/profile/' component={ProfilePage}/>
<Route  path='/sign/' component={SignUpPage} />
</MainPage>
)

const mapStateToProps=(state)=>({
    user:state
})
export default connect(mapStateToProps)(App);
const MainPage = styled.div`
  height:100vh;
  width:100vw;
  overflow-x:hidden;
`