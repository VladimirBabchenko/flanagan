"use strict";

var btn = document.getElementById("show-phones");
var list = document.getElementById("list");

function loadPhones() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "phones.json", true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    btn.parentNode.removeChild(btn);
    if (xhr.status !== 200) {
      alert("Mistake in query");
    } else {
      try {
        var phones = JSON.parse(xhr.responseText);
      } catch(e) {
        alert("Mistake in query");
      }
      showPhones(phones);
    }
  };
  xhr.send();
  btn.innerHTML = "Loading";
  btn.disabled = true;
}


function showPhones(phones) {
  phones.forEach(function(phone) {
    var li = document.createElement("li");
    li.innerHTML = phone.name;
    list.appendChild(li);
  })
}
btn.onclick = loadPhones;
