import { useEffect, useRef, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeErrors } from "../../redux/actions/errorActions";
import { removeMessages } from '../../redux/actions/messageActions';

const AuthAlerts = (props) => {

    const updateRef = useRef(true);

    useEffect(() => {

        // Avoid initial mount with this if stment
        if (updateRef.current){
            if (props.error.code && (props.error.code == "auth/user-not-found" || props.error.code == "auth/wrong-password")) {
                props.alert.error("incorrect email/password");
            }

            if (props.error.code && props.error.code == "auth/email-already-in-use") {
                props.alert.error("email is taken");
            }
            props.removeErrors();
        }

    }, [props.error]);

    useEffect(() => {

        // Avoid initial mount with this if stment
        if (updateRef.current){
            if (props.message.userRegistered) props.alert.success(props.message.userRegistered);
            if (props.message.passwordsDoNotMatch) props.alert.error(props.message.passwordsDoNotMatch);

            props.removeMessages();
        }

    }, [props.message]);


    return (
        <Fragment />
    );
}

AuthAlerts.propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    error: state.errorReducer,
    message: state.messageReducer
});

export default connect(mapStateToProps, { removeErrors, removeMessages })(withAlert()(AuthAlerts));