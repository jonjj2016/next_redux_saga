import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux';
import {loginactions} from '../store/actions/modalsTypes'
import Modal from './base/modals/login';
console.log(loginactions);
const MyHeader = () => {
    const dispatch = useDispatch()
    const onLogin = () => {
        dispatch(loginactions.modal_login_open())
    }
    return (
        <>
        <Modal/>
        <Menu>
            <Menu.Item position='right'>
            <Button primary>Sign up</Button>
            </Menu.Item>

            <Menu.Item>
            <Button onClick={onLogin}>Log-in</Button>
            </Menu.Item>
        </Menu>
        </>
    )
}

export default MyHeader
