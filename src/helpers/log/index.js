var clc = require('cli-color');

module.exports.error = function(args){
    console.error(clc.red("Error"), args);
}

module.exports.info = function(args){
    console.info(clc.yellow("Info"), args);
}

module.exports.success = function(args){
    console.log(clc.green("Success"), args);
}