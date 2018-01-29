console.log("file B started loading");
module.exports.done = false;
require("./fileA");
console.log("file B loaded");