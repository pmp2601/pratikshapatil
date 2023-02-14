//var:global scope
//require: import the module
//module:alert
//npm install alert
var alert=require('alert');
function init()//function-outer/parent
{//initialization
    var name = 'Chrome'; //name is a local variable created by init
    function displayname() {// displayName()is the inner function, a closure
        //execution: output
        alert(name);
        //use variable declared in the parent function,body of the child function
    }
    //declaring a function doesn't
}