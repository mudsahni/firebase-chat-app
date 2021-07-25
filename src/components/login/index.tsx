import * as React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import 'firebase/app'
import {auth} from '../../firebase'
import firebase from 'firebase/app';
export interface LoginProps {
}

const Login = (props: LoginProps) => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to the talk!</h2>
                <div 
                className="login-button google"
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <FaGoogle /> Sign in with Google
                </div>
                <br /><br/>
{/* 
                <div className="login-button facebook">
                    <FaFacebook /> Sign in with Facebook
                </div> */}

            </div>
        </div>
    );
}


export default Login