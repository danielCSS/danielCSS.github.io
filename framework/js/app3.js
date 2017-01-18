(function() {
  function getElIndex(el) {
      for (var i = 0; el = el.previousElementSibling; i++);
      return i;
  }
  var list = document.querySelector(".js-carousel");
  var numItems = list.children.length;
  var dotContainer = document.createElement('div');
  var carousel = {
    orderIndex: 0,
    dotIndex: 0,
    itemDuration: 2000,
    count: 0,
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
      carousel.count++;
      dotContainer.children[carousel.dotIndex].classList.remove('is-active');
      dotContainer.children[(carousel.dotIndex + 1) % numItems].classList.add('is-active');
      carousel.dotIndex = (carousel.dotIndex + 1) % numItems;
      var str = "translateX(" + (carousel.count * -100) + "%)";
      list.style.transform = str;
      if(carousel.count + 1 == numItems) {
        setTimeout(function() {
          carousel.setOrder(carousel.orderIndex);
        }, 300)
      }
    },

    setOrder: function(currentIndex) {
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
  };
  dotContainer.addEventListener("click", function(e) {
  	if(e.target && e.target.nodeName == "SPAN") {
        var index = getElIndex(e.target);
        clearInterval(carousel.slide());
        carousel.setOrder(index);
        document.querySelector(".c-carousel__dot.is-active").classList.remove('is-active');
        carousel.dotIndex = index;
        dotContainer.children[index].classList.add('is-active');
  	}
  });
  carousel.init();
})();
