var clc = require('cli-color');

module.exports.error = function(args){
    console.error(clc.red("Error"), args);
}

module.exports.info = function(args){
    console.error(clc.yellow("Info"), args);
}