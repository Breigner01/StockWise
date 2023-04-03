import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from './types';

const entryPoint = "http://localhost/a1/api/auth/";

// HELPER FUNCTION FOR API TOKEN SETUP
export const apiconfig = (getState) => {

    // GET TOKEN FROM THE STATE
    const token = getState().authReducer.token;

    // SET UP HEADERS
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    // CHECK IF TOKEN EXISTS FOR AUTHORIZATION
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    const config = apiconfig(getState);

    // dispatch({
    //     type: AUTH_ERROR
    // });

    dispatch({
        type: USER_LOADED,
        payload: {
            type: "A",
            user: {
                email: "user@gmail.com",
                password: "test",
            },
            token: "sdfsdfsdfsdfsdf"
        }
    });

    // axios.get(entryPoint+'user.php', config)
    //     .then(res => {
    //         dispatch({
    //             type: USER_LOADED,
    //             payload: res.data
    //         });
    //     }).catch(err => {
    //         if (err.response){
    //             console.log(err.response.data);
    //             console.log(err.response.status);
    //         }
    //         dispatch({
    //             type: AUTH_ERROR
    //         })
    //     });    
}

// LOGIN USER
export const loginUser = (email, password) => dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const body = JSON.stringify({email, password});

    dispatch({
        type: LOGIN_SUCCESS,
        payload: {
            type: "A",
            user: {
                email: email,
                password: password,
            },
            token: "sdfsdfsdfsdfsdf"
        }
    });

    // axios.post(entryPoint+'login.php', body, config)
    //     .then(res => {
    //         dispatch({
    //             type: LOGIN_SUCCESS,
    //             payload: res.data
    //         });
    //     }).catch(err => {
    //         if (err.response){
    //             console.log(err.response.data);
    //             console.log(err.response.status);
    //         }
    //         dispatch({
    //             type: LOGIN_FAIL
    //         })
    //     });
}

// LOGOUT USER
export const logout = () => (dispatch, getState) => {

    const config = apiconfig(getState);

    dispatch({
        type: LOGOUT_SUCCESS
    });

    // axios.post(entryPoint+'logout.php', null, config)
    //     .then(res => {
    //         dispatch({
    //             type: LOGOUT_SUCCESS
    //         });
    //     }).catch(err => {
    //         console.log(err.response.data);
    //         console.log(err.response.status);
    //     });
}

// // POST STUDENT API CALL
// export const registerStudent = (student) => (dispatch, getState) => {

//     const config = apiconfig(getState);

//     axios.post('http://localhost/a1/api/student/post.php', student, config)
//         .then(res => {
//             console.log("REGISTER_SUCCESS");
//             dispatch({
//                 type: REGISTER_SUCCESS,
//                 payload: res.data
//             });
//         }).catch(err => {
//             console.log(err.response.data);
//             console.log(err.response.status);
//             dispatch({
//                 type: REGISTER_FAIL
//             });
//         });
// }

// // POST ADMIN API CALL
// export const registerAdmin = (student) => (dispatch, getState) => {

//     const config = apiconfig(getState);

//     axios.post('http://localhost/a1/api/administrator/post.php', student, config)
//         .then(res => {
//             console.log("REGISTER_SUCCESS");
//             dispatch({
//                 type: REGISTER_SUCCESS,
//                 payload: res.data
//             });
//         }).catch(err => {
//             console.log(err.response.data);
//             console.log(err.response.status);
//             dispatch({
//                 type: REGISTER_FAIL
//             });
//         });
// }