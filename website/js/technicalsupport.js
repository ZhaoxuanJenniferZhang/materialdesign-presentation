var l_tab = 1;
var max;

function tabsOnClick(id){
  var li = document.getElementById(id);
  var div = document.getElementById('tab_'+id);
  var tab_strip = document.getElementById('tab_strip');


  for(var i=1; i<=3; i++){
    document.getElementById(i).className = '';
    document.getElementById("tab_"+i).style.display = "none";
  }
  if(l_tab>id){
    max = l_tab;
    var displacement = (max - id) * 100;
  }
  else{
    max = id;
    var displacement = (max - l_tab) * 100;
  }

  tab_strip.style.transform = "translateX("+displacement+"px)";

  li.className += 'current';
  li.style.className += "ripple";
  div.style.display = "block";
}
