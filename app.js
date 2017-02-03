"strict mode";

(function() {
  var elem,
    k = [];
  for (var i = 0; i < 18; i++) {
    elem = document.getElementsByClassName('spectrum__item');
    if(i < 3){
      k = [8,2,8];
      elem[i].style.backgroundColor = "rgb("+(((i%3)+(i+3))*k[0])+","+(((i%3)+(i+3))*k[1])+","+(((i%3)+(i+3))*k[2])+")";
    }
    if(i < 6 && i >= 3){
      k = [2,8,8];
      elem[i].style.backgroundColor = "rgb("+(((i%3)+(i+3))*k[0])+","+(((i%3)+(i+3))*k[1])+","+(((i%3)+(i+3))*k[2])+")";
    }
    if(i < 9 && i >= 6){
      k = [2,2,8];
      elem[i].style.backgroundColor = "rgb("+(((i%3)+(i+3))*k[0])+","+(((i%3)+(i+3))*k[1])+","+(((i%3)+(i+3))*k[2])+")";
    }
    if(i < 12 && i >= 9){
      k = [2,8,2];
      elem[i].style.backgroundColor = "rgb("+(((i%3)+(i+3))*k[0])+","+(((i%3)+(i+3))*k[1])+","+(((i%3)+(i+3))*k[2])+")";
    }
    if(i < 15 && i >= 12){
      k = [8,8,2];
      elem[i].style.backgroundColor = "rgb("+(((i%3)+(i+3))*k[0])+","+(((i%3)+(i+3))*k[1])+","+(((i%3)+(i+3))*k[2])+")";
    }
    if(i < 18 && i >= 15){
      k = [8,2,2];
      elem[i].style.backgroundColor = "rgb("+(((i%3)+(i+3))*k[0])+","+(((i%3)+(i+3))*k[1])+","+(((i%3)+(i+3))*k[2])+")";
    }
  }
})();
