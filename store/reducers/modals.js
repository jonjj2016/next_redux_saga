import { logintypes} from '../actions/modalsTypes';
console.log( 'logintypes' );

const initState = {
    loginModalOpen : false,
    registerModalOpen : false,
}

const modals = (state = initState, {type, payload}) => {
    console.log(type)
  switch(type){
      case logintypes.MODAL_LOGIN_OPEN:
        return {...state, loginModalOpen: true};
      case logintypes.MODAL_LOGIN_CLOSE:
        return {...state, loginModalOpen: false};
      default :
        return state
  }
};

export default modals