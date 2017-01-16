(function() {

  function getElIndex(el) {
      for (var i = 0; el = el.previousElementSibling; i++);
      return i;
  }

  var list = document.querySelector(".js-carousel");
  var numItems = list.children.length;
  var dotContainer = document.createElement('div');

  var carousel = {
    //list: document.querySelector('.js-carousel'),
    //numItems: this.list.children.length,
    orderIndex: 0,
    dotIndex: 0,
    itemDuration: 2000,
    count: 0,

    //dotContainer: document.createElement('div'),

    slide: function() {
      return setInterval(this.updateCarousel, this.itemDuration);
    },
    createDots: function(len) {
      dotContainer.classList.add('c-carousel__dots');
      for(var i = 0;i<len;i++) {
        var dot = document.createElement('span');
        dot.classList.add('c-carousel__dot');
        dotContainer.appendChild(dot);
      }
      list.parentNode.insertBefore(dotContainer, list.nextSibling);
      //initialize first dot to be active
      dotContainer.children[0].classList.add('is-active');
    },
    updateCarousel: function() {
      list.style.transitionProperty = "transform"; //re-enable transform transition
      //var activeIndex = this.count;
      //list.children[activeIndex].classList.remove('is-active');
      //list.children[(activeIndex+1) % numItems].classList.add('is-active');
      //console.log('numItems = ' + numItems);
      //console.log('this.count = ' + carousel.count);
      //carousel.count++;
      //dotContainer.children[carousel.count].classList.remove('is-active');
      //dotContainer.children[(carousel.count + 1) % numItems].classList.add('is-active');
      //var listOffsetIndex = Number(this.list.getAttribute("data-translate")) + 1;
      //list.setAttribute("data-translate", listOffsetIndex);
      //carousel.count = (carousel.count + 1) % numItems;
      carousel.count++;
      dotContainer.children[carousel.dotIndex].classList.remove('is-active');
      //document.querySelector(".c-carousel__dot.is-active").classList.remove('is-active');
      dotContainer.children[(carousel.dotIndex + 1) % numItems].classList.add('is-active');
      carousel.dotIndex = (carousel.dotIndex + 1) % numItems;
      console.log('this.count (after) = ' + carousel.count);
      var str = "translateX(" + (carousel.count * -100) + "%)";
      list.style.transform = str;
      if(carousel.count + 1 == numItems) {
        console.log('calling setOrder = ' + carousel.count);
        setTimeout(function() {
          carousel.setOrder(carousel.orderIndex);
        }, 300)
      }
    },

    setOrder: function(currentIndex) {
      console.log('currentIndex (setOrder) = ' + currentIndex);
      list.style.transitionProperty = "none"; //temorarily disable transition on transform
      for(var i=0; i< numItems; i++) {
        list.children[(currentIndex+i) % numItems].style.order = i;
      }
      carousel.count = 0;
      list.style.transform = "translateX(0)";
      //carousel.orderIndex = !!currentIndex ? (currentIndex - 1) : numItems - 1;
      carousel.orderIndex = (currentIndex - 1 + numItems) % numItems;
    },

    init: function () {
      this.createDots(numItems);
      this.slide();
      carousel.orderIndex = numItems - 1;
    }
    // getActiveElementIndex: function() {
    //   for (var i = 0; i < this.numItems; i++) {
    //     if (this.list.children[i].classList.contains('is-active') ) {
    //       return i;
    //     }
    //   }
    //   //no element with is-active found, so set first element as is-active
    //   this.list.children[0].classList.add('is-active');
    //   return 0; //if is-active class is not found - make the first element active
    // }

  };
  // var list = document.querySelector(".js-carousel");
  // var listLength = list.children.length;
  // var dotContainer = document.createElement('div');
  // createDots(listLength);
  // var myTimer = setInterval(updateCarousel, 2000);

  dotContainer.addEventListener("click", function(e) {
  	if(e.target && e.target.nodeName == "SPAN") {
        var index = getElIndex(e.target);
        clearInterval(carousel.slide());
        carousel.setOrder(index);
        //document.querySelector(".js-carousel > .is-active").classList.remove('is-active');
        //document.querySelector(".js-carousel").children[index].classList.add('is-active');
        document.querySelector(".c-carousel__dot.is-active").classList.remove('is-active');
        carousel.dotIndex = index;
        dotContainer.children[index].classList.add('is-active');
        //carousel.timer = setInterval(carousel.updateCarousel, carousel.itemDuration);
        //carousel.slide();
  	}
  });
  carousel.init();

  //carousel.creatDots(this.numItems);

  // function setOrder(i) {
  //   list.style.transitionProperty = "none"; //temorarily disable transition on transform
  //   for(var j=0; j<listLength; j++) {
  //     list.children[(i+j+1) % listLength].style.order = j;
  //   }
  //   list.style.transform = "translateX(0)";
  //   list.setAttribute("data-translate", 0);
  // }
  // function getElIndex(el) {
  //     for (var i = 0; el = el.previousElementSibling; i++);
  //     return i;
  // }
  // function getActiveElementIndex() {
  //   for (var i = 0; i < listLength; i++) {
  //     if (list.children[i].classList.contains('is-active') ) {
  //       return i;
  //     }
  //   }
  //   //no element with is-active found, so set first element as is-active
  //   list.children[0].classList.add('is-active');
  //   return 0; //if is-active class is not found - make the first element active
  // }
  // function createDots(len) {
  //   dotContainer.classList.add('c-carousel__dots');
  //   for(i=0;i<len;i++) {
  //     var dot = document.createElement('span');
  //     dot.classList.add('c-carousel__dot');
  //     dotContainer.appendChild(dot);
  //   }
  //   list.parentNode.insertBefore(dotContainer, list.nextSibling);
  //   dotContainer.classList.add('c-carousel__dots');
  //   //initialize first dot to be active
  //   dotContainer.children[0].classList.add('is-active');
  // }
  //
  // function updateCarousel() {
  //   list.style.transitionProperty = "transform"; //re-enable transform transition
  //   var activeIndex = getActiveElementIndex();
  //   list.children[activeIndex].classList.remove('is-active');
  //   list.children[(activeIndex+1) % listLength].classList.add('is-active');
  //   dotContainer.children[activeIndex].classList.remove('is-active');
  //   dotContainer.children[(activeIndex+1) % listLength].classList.add('is-active');
  //   var listOffsetIndex = Number(list.getAttribute("data-translate")) + 1;
  //   list.setAttribute("data-translate", listOffsetIndex);
  //   var str = "translateX(" + (listOffsetIndex * -100) + "%)";
  //   list.style.transform = str;
  //   if(listOffsetIndex + 1 == listLength) {
  //     setTimeout(function() {
  //       setOrder(activeIndex);
  //     }, 300)
  //   }
  // }
})();
