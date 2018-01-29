"use strict";

// function httpGet(url, callback) {
//   return new Promise(function(resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//
//     xhr.onload = function() {
//       if (xhr.status === 200) {
//         callback(this.response);
//       } else {
//         var error = new Error(this.responseText);
//         error.code = this.status;
//         reject(error);
//       }
//     };
//
//     xhr.onerror = function() {
//       reject(new Error("Network error"));
//     };
//
//     xhr.send();
//   })
// }
//
//
//
// httpGet("https://api.github.com/users/VladimrBabchenko")
//   .then(function(response) {
//     console.log(response);
//     let user = JSON.parse(response);
//     return user;
//   })
//   .then(function(user) {
//     console.log(user);
//     var img = document.createElement("img");
//     img.src = user.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.appendChild(img);
//     setTimeout(function() {
//       img.remove();
//     }, 3000)
//   });

var obj = {
  age: 5,
  func: function(d) {
    console.log(this.age + d)
  }
};

var obj1 = {
  age: 10
};

function bind(obj, func) {
  return function() {
    func.apply(obj, arguments);
  }
}

bind(obj1, obj.func(20));