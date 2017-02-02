"strict mode";

(function() {
  var elem;
  for (var i = 0; i < 18; i++) {
    elem = document.getElementsByClassName('spectrum__item');
    elem[i].style.backgroundColor = "rgb("+i*2+","+i*8+","+i*8+")";
  }
})();
