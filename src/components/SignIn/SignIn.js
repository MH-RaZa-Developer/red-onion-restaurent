import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import  firebaseConfig from './firebase.config';
import { foodContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import logo from '../../img/logo2.png';
import gLogo from '../../img/g-logo.png';

if(firebase.apps.length === 0)
{
  firebase.initializeApp(firebaseConfig);
}

const SignIn = () => {

    const {log} = useContext(foodContext);

    const [LoggedInUser, setLoggedInUser] = log;

    const provider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from: {pathname: "/"}};

    const handleSignGoogle = () =>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
                const {displayName, photoURL, email} = result.user;
                const getUserInfo = {
                    name: displayName,
                    photo: photoURL,
                    email: email
                }
                setLoggedInUser(getUserInfo);
                history.replace(from);
                console.log(result.user);
        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const styleDiv = {
        border: "none",
        paddingBottom: "30px",
        backgroundColor: "white",
        borderRadius: "15px",
        fontSize: "20px",
        width: "250px",
        marginTop: "30px",
        cursor: "pointer"
    }

    return (
        <div style={{textAlign:"center", marginTop:"150px"}}>
            <img src={logo} alt=""></img><br />
            <div style={{display:"inline-block"}}>
                <div style={{boxShadow:"0px 10px 20px gray"}}>
                    <img style={{width: "40px"}} src={gLogo} alt=""></img>
                    <button style={styleDiv} onClick={handleSignGoogle}>Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;