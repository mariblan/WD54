const {hello, add, substract} = require("./commonjs.cjs");

require(["commonjs"], function(commonjs){ 
    console.log(commonjs.add(2, 1));
})