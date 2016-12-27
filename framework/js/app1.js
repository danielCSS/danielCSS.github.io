
(function() {
  var list = document.querySelectorAll(".js-carousel");
  var dotContainer = [];
  var listLength;
  var myTimer = [];

  for(var instance=0;instance<list.length;instance++) {
    console.log("instance: " + instance);
    var inst = instance;
    listLength = list[instance].children.length;
    console.log(list[instance]);
    console.log("listLength = " +listLength);
    dotContainer.push(document.createElement('div'));
    dotContainer[instance] = createDots(dotContainer[instance],listLength);
    console.log(dotContainer);
    console.log(list);
    // console.log(list[0]);
    // console.log(i);
    // console.log(list[i]);
    // console.log(list[i].parentNode);
    list[instance].parentNode.insertBefore(dotContainer[instance], list[instance].nextSibling);


    myTimer[inst] = setInterval( function() {
      updateCarousel(list[inst],dotContainer[inst],listLength);
    }, 5000 );
    dotContainer[instance].addEventListener("click", function(e) {
    	if(e.target && e.target.nodeName == "SPAN") {
          console.log(e);
          var index = getElIndex(e.target);
          console.log("index = " + index);
          clearInterval(myTimer);
          setOrder(index - 1);
          document.querySelector(".js-carousel > .is-active").classList.remove('is-active');
          list[instance].children[index].classList.add('is-active');
          console.log(document.querySelector(".c-carousel__dot.is-active"));
          document.querySelector(".c-carousel__dot.is-active").classList.remove('is-active');
          dotContainer[instance].children[index].classList.add('is-active');
          //myTimer[i] = setInterval(updateCarousel(list[i],dotContainer[i],listLength), 5000);
          //myTimer = setInterval(updateCarousel(list[0],dotContainer[0],listLength), 5000);
          setInterval( function() {
            console.log(instance);
            updateCarousel(list[instance],dotContainer[instance],listLength);
          }, 5000 );
    	}
    });
  }
  //var myTimer = setInterval(updateCarousel(list[0],dotContainer[0],listLength), 5000);
  function setOrder(list,listLength,i) {
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
  function getActiveElementIndex(list,listLength) {
    for (var i = 0; i < listLength; i++) {
      if (list.children[i].classList.contains('is-active') ) {
        return i;
      }
    }
    return 0; //if is-active class is not found - make the first element active
  }
  function createDots(dotContainer,len) {
    //console.log(list);
    //console.log(dotContainer);
    //console.log(len);
    dotContainer.classList.add('c-carousel__dots');
    for(k=0;k<len;k++) {
      var dot = document.createElement('span');
      dot.classList.add('c-carousel__dot');
      dotContainer.appendChild(dot);
    }
    return dotContainer;
    //list.parentNode.insertBefore(dotContainer, list.nextSibling);
    //dotContainer.classList.add('c-carousel__dots');
  }

  function updateCarousel(list,dotContainer,listLength) {
    console.log(list);
    console.log(dotContainer);
    console.log(listLength);
    list.style.transitionProperty = "transform"; //re-enable transform transition
    var activeIndex = getActiveElementIndex(list,listLength);
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
        setOrder(list,listLength,activeIndex);
      }, 300)
    }
  }
})();
