import { 
    signInWithPopup,
    GoogleAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged ,
    signOut,
} from "firebase/auth";

import { returnErrors } from './errorActions';
import { createMessage } from './messageActions';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { fbApp } from "../../Firebase";

// GOOGLE LOGIN
export const googleLogin = () => (dispatch) => {
    const auth = getAuth(fbApp);

    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
        .then((result) => { 
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token: result.user.accessToken,
                    user: {
                        email: result.user.email,
                        uid: result.user.uid,
                    }
                },
            });
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

// LOAD USER
export const loadUser = () => (dispatch) => {
    dispatch({ type: USER_LOADING });

    const auth = getAuth(fbApp);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch({
                type: USER_LOADED,
                payload: {
                    token: user.accessToken,
                    user: {
                        email: user.email,
                        uid: user.uid,
                    }
                }
            });
        } else {
            dispatch({
                type: AUTH_ERROR
            });
        }
    });
}

// REGISTER USER
export const registerUser = (user) => (dispatch) => {

    const auth = getAuth(fbApp);

    const {email, password} = user;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            dispatch(createMessage({
                userRegistered: 'Account Registered!'
            }));
            dispatch({
                type: REGISTER_SUCCESS,
                payload: {
                    token: userCredential.user.accessToken,
                    user: {
                        email: userCredential.user.email,
                        uid: userCredential.user.uid,
                    }
                },
            });
            return true;
        }).catch((err) => {
            if (err){
                dispatch(returnErrors(err));
            }
            dispatch({
                type: REGISTER_FAIL
            })
            return false;
        });
}

// LOGIN USER
export const loginUser = (email, password) => dispatch => {

    const auth = getAuth(fbApp);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token: userCredential.user.accessToken,
                    user: {
                        email: userCredential.user.email,
                        uid: userCredential.user.uid,
                    }
                },
            });
        }).catch((err) => {
            if (err){
                dispatch(returnErrors(err));
            }
            dispatch({
                type: LOGIN_FAIL
            })
        });
}

// LOGOUT USER
export const logout = () => (dispatch) => {

    const auth = getAuth(fbApp);

    signOut(auth)
        .then(() => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }).catch((err) => {
            if (err){
                dispatch(returnErrors(err));
            }
        });
}