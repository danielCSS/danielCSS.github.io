
(function() {
  var list = document.querySelector(".js-carousel");
  var listLength = list.children.length;
  var dotContainer = document.createElement('div');
  createDots(listLength);
  var myTimer = setInterval(updateCarousel, 5000);
  dotContainer.addEventListener("click", function(e) {
  	if(e.target && e.target.nodeName == "SPAN") {
        console.log(e);
        var index = getElIndex(e.target);
        console.log("index = " + index);
        clearInterval(myTimer);
        setOrder(index - 1);
        document.querySelector(".c-carousel__dot.is-active").classList.remove('is-active');
        dotContainer.children[index].classList.add('is-active');
        myTimer = setInterval(updateCarousel, 5000);
  	}
  });

  function setOrder(i) {
    list.style.transitionProperty = "none"; //temorarily disable transition on transform
    for(var j=0; j<listLength; j++) {
      list.children[(i+j+1) % listLength].style.order = j;
    }
    list.style.transform = "translateX(0)";
    list.setAttribute("data-translate", 0);
  }
  function getElIndex(el) {
      for (var i = 0; el = el.previousElementSibling; i++);
      return i;
  }
  function getActiveElementIndex() {
    for (var i = 0; i < listLength; i++) {
      if (list.children[i].classList.contains('is-active') ) {
        return i;
      }
    }
    return 0; //if is-active class is not found - make the first element active
  }
  function createDots(len) {
    dotContainer.classList.add('c-carousel__dots');
    for(i=0;i<len;i++) {
      var dot = document.createElement('span');
      dot.classList.add('c-carousel__dot');
      dotContainer.appendChild(dot);
    }
    list.parentNode.insertBefore(dotContainer, list.nextSibling);
    dotContainer.classList.add('c-carousel__dots');
  }

  function updateCarousel() {
    list.style.transitionProperty = "transform"; //re-enable transform transition
    var activeIndex = getActiveElementIndex();
    list.children[activeIndex].classList.remove('is-active');
    list.children[(activeIndex+1) % listLength].classList.add('is-active');
    dotContainer.children[activeIndex].classList.remove('is-active');
    dotContainer.children[(activeIndex+1) % listLength].classList.add('is-active');
    var listOffsetIndex = Number(list.getAttribute("data-translate")) + 1;
    list.setAttribute("data-translate", listOffsetIndex);
    var str = "translateX(" + (listOffsetIndex * -100) + "%)";
    list.style.transform = str;
    if(listOffsetIndex + 1 == listLength) {
      setTimeout(function() {
        setOrder(activeIndex);
      }, 300)
    }
  }
})();
