list.addEventListener("click", function() {
  console.log(this)
});

document.querySelector("#list").children[0].addEventListener("contextmenu", function(e) {e.preventDefault(); console.log(this) });

document.querySelector("#list").children[0].addEventListener("click", function(e) {console.log(this) });

document.querySelector("#list").children[0].addEventListener("mousedown", function(e) {console.log(this) });

document.querySelector("span").addEventListener("click", function(e) {console.log(this) });

