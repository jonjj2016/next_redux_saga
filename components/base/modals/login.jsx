import React from 'react';
import { Modal } from 'semantic-ui-react';
import {loginactions} from '../../../store/actions/modalsTypes';
import {useDispatch, useSelector} from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const {loginModalOpen} = useSelector((state)=>state.modals);
    const onClose = () => {
        dispatch(loginactions.modal_login_close())
    }
    return (
        <Modal
            open={loginModalOpen}
            onClose={onClose}
            header='Reminder!'
            content='Call Benjamin regarding the reports.'
            actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
        />
    )
}

export default Login
