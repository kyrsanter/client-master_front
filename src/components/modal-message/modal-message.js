import React, {useEffect} from "react";
import modalStyles from './modalmessage.module.css';
import {connect} from 'react-redux';
import {clearMessage} from "../../actions/message.action";

const ModalMessage = (props) => {
    let {message, clearMessage} = props;

    useEffect(() => {
        let timeout = !!message ? setTimeout(clearMessage, 3000 * message.length) : null;
        return () => {
            clearTimeout(timeout)
        }
    }, );

    let style = !!message ? modalStyles.modalWrap + ' ' + modalStyles.message : modalStyles.modalWrap;
    return (
        <ul className={style}>
            {
                !!message ? message.map( (m, i) => <li key={i}>{m.msg}</li>) : message
            }
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        message: state.messageReducer.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearMessage: () => dispatch(clearMessage())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalMessage)