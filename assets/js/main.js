// function makeFilter(water) {
//   return Promise.resolve(water);
// }
//
// function filter1(water) {
//   console.log(water);
//   return water + 1000;
// }
//
// function filter2(water) {
//   console.log(water);
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve(water + 2000);
//     }, 3000)
//   })
// }
//
// function filter3(water) {
//   console.log(water);
//   return Promise.resolve(water+ 1000);
// }
//
// makeFilter(2000)
// .then(filter1)
//   .then(filter2)
//   .then(filter3);

function sum(value, callback) {
  value *= 20;
  console.log(value);
  callback(value)
}

function multiply(value, callback) {
  value /= 5;
  console.log(value);
  callback(value);
}

function nulify(value, callback) {
  value = 2;
  callback(value);
}

function multip(value, callback) {
  value *= 5;
  callback(value);
}

function check(value) {
  console.log(value);
}

sum(5, function(value) {
  multiply(value, function(value) {
    nulify(value, function(value) {
      multip(value, function(value) {
        check(value);
      })
    })
  })
});