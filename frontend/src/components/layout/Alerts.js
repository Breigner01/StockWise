import { useEffect, useRef, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeErrors } from "../../redux/actions/errorActions";

const Alerts = (props) => {

    const updateRef = useRef(true);

    useEffect(() => {

        // Avoid initial mount with this if stment
        if (updateRef.current){
            // actual update code

            // Custom msgs per error returned
            if (props.error.err && (props.error.err.code == "auth/user-not-found" || props.error.err.code == "auth/wrong-password")) {
                props.alert.error("incorrect email/password");
            }

            if (props.error.err && props.error.err.code == "auth/email-already-in-use") {
                props.alert.error("email is taken");
            }
            // Check if there is even an error to flag
            // if (props.error.status) props.alert.error("ERROR FOUND");
            props.removeErrors();
        }

    }, [props.error]);

    // useEffect(() => {

    //     // Avoid initial mount with this if stment
    //     if (updateRef.current){
    //         // actual update code
    //         // Check if the payloads are there
    //         if (props.message.passwordsDoNotMatch) props.alert.error(props.message.passwordsDoNotMatch);

    //         props.removeMessages();
    //     }

    // }, [props.message]);


    return (
        <Fragment />
    );
}

Alerts.propTypes = {
    error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    error: state.errorReducer
});

export default connect(mapStateToProps, { removeErrors })(withAlert()(Alerts));