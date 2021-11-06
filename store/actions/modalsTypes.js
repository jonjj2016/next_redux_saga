const { customTypeGen } = require('myreduxtypes');
const [ logintypes, loginactions ] = customTypeGen("modal_login","open","close",'toggle');
const [ registertypes,registeractions ] = customTypeGen("modal_register","open","close",'toggle');

module.exports ={
    logintypes, 
    loginactions
}