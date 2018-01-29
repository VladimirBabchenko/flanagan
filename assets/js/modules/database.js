var conrSummery = "2342424";
function MakeConnection() {
  this.connect = function () {
    console.log("Connection established\n", conrSummery);
  }
}

function testConnection() {
  console.log("testing connection...");
}

if (module.parent) {
  module.exports = MakeConnection;
} else {
  testConnection();
}