function unsetFixed() {
  var elements = document.querySelectorAll("*");

  for (i = 0; i < elements.length; i++) {
    var elementPosition = window.getComputedStyle(elements[i]).position;
    if (elementPosition != "fixed" && elementPosition != "sticky")
      continue;

    elements[i].style.setProperty("position", "unset", "important");
  }
}

unsetFixed();

window.addEventListener("scroll", unsetFixed);
