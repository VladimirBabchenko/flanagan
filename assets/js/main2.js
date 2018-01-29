list.addEventListener("click", function() {
  console.log(this)
});

document.querySelector("#list").children[0].addEventListener("contextmenu", handler);


document.querySelector("span").addEventListener("click", function(e) {console.log(this) });


function handler(event) {
  event.preventDefault(); console.log(this);

}
