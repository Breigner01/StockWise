import { useEffect, useRef, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeErrors } from "../../redux/actions/errorActions";
import { removeMessages } from '../../redux/actions/messageActions';

const Alerts = (props) => {

    const updateRef = useRef(true);

    useEffect(() => {

        // Avoid initial mount with this if stment
        if (updateRef.current){
            // actual update code

            // Custom msgs per error returned

            props.removeErrors();
        }

    }, [props.error]);

    useEffect(() => {

        // Avoid initial mount with this if stment
        if (updateRef.current){
            if (props.message.createInventory) props.alert.success(props.message.createInventory);
            if (props.message.deleteInventory) props.alert.error(props.message.deleteInventory);
            if (props.message.createProduct) props.alert.success(props.message.createProduct);
            if (props.message.deleteProduct) props.alert.error(props.message.deleteProduct);

            props.removeMessages();
        }

    }, [props.message]);


    return (
        <Fragment />
    );
}

Alerts.propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    error: state.errorReducer,
    message: state.messageReducer
});

export default connect(mapStateToProps, { removeErrors, removeMessages })(withAlert()(Alerts));