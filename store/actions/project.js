const { autoTypeGen, } = require('myreduxtypes');
 const [types, actions] = autoTypeGen('project');
console.log(types);
console.log(actions);
module.exports ={
    types, 
    actions
}