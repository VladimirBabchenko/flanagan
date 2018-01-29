function PublishForm(form, url) {
  function sendMessage(message) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send(message);
  }

  form.onsubmit = function() {
    var message = form.elements.message.value;
    if (message) {
      form.elements.message = "";
      sendMessage(message);
    }
    return false;
  }
}

function SubscribePane(elem, url) {
  function showMessage(message) {
    var elemMessage = document.createElement("div");
    elemMessage.appendChild(document.createTextNode(message));
    elem.appendChild(elemMessage);
  }

  function subscribe() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status === 200) {
        showMessage(xhr.responseText);
        subscribe();
      }

      if (xhr.status !== 404) {
        showMessage(this.statusText);
      }

      setTimeout(subscribe, 1000;)
    };
    xhr.open("GET", url, true);
    xhr.send();
  }
  subscribe();
}