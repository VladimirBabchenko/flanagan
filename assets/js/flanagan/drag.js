function drag(elementToDrag, event) {
  var scroll = getScrollOffsets();

  var startX = event.clientX + scroll.x;
  var startY = event.clientY + scroll.y;

  var origX = elementToDrag.offsetLeft;
  var origY = elementToDrag.offsetTop;

  var deltaX = startX - origX;
  var deltaY = startY - origY;

  if (document.addEventListener) {
    document.addEventListener("mousemove", moveHandler, true);
    document.addEventListener("mouseup", upHandler, true);
  }
  if (event.stopPropagation()) event.stopPropagation();

  if (event.preventDefault()) event.preventDefault();

  function moveHandler(e) {
    var scroll = getScrollOffsets();
    elementToDrag.style.left = (e.clientX + scroll.x - deltaX) + "px";
    elementToDrag.style.top = (e.clientY + scroll.y - deltaY) + "px";

    if (e.stopPropagation) e.stopPropagation();
  }

  function upHandler(e) {
    if (document.removeEventListener) {
      document.removeEventListener("mouseup", upHandler, true);
      document.removeEventListener("mousemove", moveHandler, true);
    }
    if (e.stopPropagation) e.stopPropagation();
  }
}