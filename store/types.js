const { autoTypeGen, } = require('myreduxtypes');
 const [types, actions] = autoTypeGen('posts')
console.log(types);
console.log(actions);
module.exports ={
    types, 
    actions
}