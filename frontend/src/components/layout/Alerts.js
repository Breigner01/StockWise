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
            // These error codes will depend on what the gateway throws as an error
            if (props.error.code && (props.error.code == "add product error")) {
                props.alert.error("Error Adding Product");
            }
            if (props.error.code && (props.error.code == "update product error")) {
                props.alert.error("Error Updating Product");
            }
            if (props.error.code && (props.error.code == "delete product error")) {
                props.alert.error("Error Deleting Product");
            }
            if (props.error.code && (props.error.code == "add inventory error")) {
                props.alert.error("Error Adding Inventory");
            }
            if (props.error.code && (props.error.code == "decreasing inventory error")) {
                props.alert.error("Error Decreasing Inventory");
            }
            if (props.error.code && (props.error.code == "storing inventory error")) {
                props.alert.error("Error Storing Inventory");
            }

            props.removeErrors();
        }

    }, [props.error]);

    useEffect(() => {

        // Avoid initial mount with this if stment
        if (updateRef.current){
            if (props.message.productCreated) props.alert.success(props.message.productCreated);
            if (props.message.productUpdated) props.alert.success(props.message.productUpdated);
            if (props.message.productDeleted) props.alert.error(props.message.productDeleted);
            if (props.message.inventoryAdded) props.alert.success(props.message.inventoryAdded);
            if (props.message.inventoryDecreased) props.alert.success(props.message.inventoryDecreased);
            if (props.message.inventoryStored) props.alert.success(props.message.inventoryStored);

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