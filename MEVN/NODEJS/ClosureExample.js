/**
 * Three function exapmle that i came across.
 */
function outerScope() {
    const result = [];
    function innerscope() {
        for(let i=0; i<5; i++) {
    // this is just storing the execution of the inner function
    result[i] = (function inner(x) {
    // aditional enclosing context
    return function() {
    console.log(x);
    };
    })(i);
        }
    }
     innerscope();
     for(let i=0; i<5; i++) {
     result[i]();
    }
}
outerScope();