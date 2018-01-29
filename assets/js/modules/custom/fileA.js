console.log("File A started loaded");
module.exports.done = false;
require("./fileB");
module.exports.done = true;
console.log("Module A is loaded");