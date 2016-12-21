console.log('hi there2!');

function setOrder(i) {
  //console.log("setting order");
  list.style.transitionProperty = "none";
  for(var j=0; j<listLength; j++) {
    list.children[(i+j+1) % listLength].style.order = j;
  }
  list.style.transform = "translateX(0)";
  list.setAttribute("data-translate", 0);
}
function getActiveElementIndex() {
  for (var i = 0; i < listLength; i++) {
    if (list.children[i].classList.contains('is-active') ) {
      return i;
    }
  }
  return -1;
}
function updateCarousel() {
  list.style.transitionProperty = "transform";
  var activeIndex = getActiveElementIndex();
  //console.log("active index = " + activeIndex);
  if(activeIndex >=0 ) {
    list.children[activeIndex].classList.remove('is-active');
    list.children[(activeIndex+1) % listLength].classList.add('is-active');
    //console.log(list.style);
    // console.log("translateX = " + list.style.transform);
    // //translateX = translateX(-100%)
    // var numberPattern = /\d+/g;
    // var currentTranslate = list.style.transform.toString().match(numberPattern);
    // console.log("currentTranslateX = " + currentTranslate);
    // var listOffsetIndex = Number(currentTranslate + 100) / 100;
    // console.log("listOffsetIndex = " + listOffsetIndex);
    //'something102asdfkj1948948'.match( numberPattern )
    //console.log("translateX = " + getComputedStyle(list, null).getPropertyValue("transform"));
    //var curTransform = new WebKitCSSMatrix(window.getComputedStyle(list).webkitTransform);
    //var str = "translateX(" + Number(curTransform.m41 - 100) + "%)";
    //var listOffsetIndex = Number(-curTransform.m41 + 100) / 100;
    var listOffsetIndex = Number(list.getAttribute("data-translate")) + 1;
    list.setAttribute("data-translate", listOffsetIndex);
    //var str = (listOffsetIndex * -100) + "%";
    var str = "translateX(" + (listOffsetIndex * -100) + "%)";
    console.log("str = " + str);
    list.style.transform = str;
    if(listOffsetIndex + 1 == listLength) {
      console.log("need to set order now!");
      setTimeout(function() {
        setOrder(activeIndex);
      }, 300)
    }
  }
}
var list = document.querySelector(".js-carousel");
console.log(list);
console.log(list.getAttribute("data-translate"));
//console.log(list);
var listLength = list.children.length;
console.log("listLength = " + listLength);
//var activeIndex = getActiveElementIndex();
setInterval(updateCarousel, 5000);
