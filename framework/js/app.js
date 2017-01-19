(function() {
  function getElIndex(el) {
      for (var i = 0; el = el.previousElementSibling; i++);
      return i;
  }
  var Carousel = function(element) {
    this.element = element;
    this.dotContainer = document.createElement('div');
    this.numItems = element.children ? element.children.length : 0;
    console.log('data-duration: ' + element.getAttribute('data-duration'));
    this.slideDuration = element.getAttribute('data-duration') ? Number(element.getAttribute('data-duration')) : 3000;
    this.count = 0;
    this.orderIndex = 0;
    this.dotIndex = 0;
    this.directionValue = element.getAttribute('data-direction') == 'ltr' ? 1 : -1;
  };

  Carousel.prototype.createDots = function (len) {
    this.dotContainer.classList.add('c-carousel__dots');
    for(var i = 0;i<len;i++) {
      var dot = document.createElement('span');
      dot.classList.add('c-carousel__dot');
      this.dotContainer.appendChild(dot);
    }
    this.element.parentNode.insertBefore(this.dotContainer, this.element.nextSibling);
    //initialize first dot to be active
    this.dotContainer.children[0].classList.add('is-active');
  };

  Carousel.prototype.setOrder = function (currentIndex) {
    console.log('setOrder');
    this.element.style.transitionProperty = "none"; //temorarily disable transition on transform
    for(var i=0; i< this.numItems; i++) {
      this.element.children[(currentIndex+i) % this.numItems].style.order = i;
    }
    this.count = 0;
    this.element.style.transform = "translateX(0)";
    this.orderIndex = (currentIndex - 1 + this.numItems) % this.numItems;
  };
  Carousel.prototype.updateCarousel = function () {
    this.element.style.transitionProperty = "transform"; //re-enable transform transition
    this.count++;
    this.dotContainer.children[this.dotIndex].classList.remove('is-active');
    this.dotContainer.children[(this.dotIndex + 1) % this.numItems].classList.add('is-active');
    this.dotIndex = (this.dotIndex + 1) % this.numItems;
    var str = "translateX(" + (this.count * this.directionValue * 100) + "%)";
    this.element.style.transform = str;
    if(this.count + 1 == this.numItems) {
      var that = this;
      setTimeout(function() {
        that.setOrder(that.orderIndex);
      }, 300)
    }
  };
  Carousel.prototype.slide = function () {
    console.log(this.slideDuration);
    var duration = this.slideDuration;
    return setInterval(this.updateCarousel.bind(this), duration);
  };
  Carousel.prototype.init = function () {
    this.createDots(this.numItems);
    this.slide();
    this.orderIndex = this.numItems - 1;
  };

  var carouselElements = document.querySelectorAll('.js-carousel');
  carouselElements = Array.prototype.slice.call(carouselElements);
  var carousels = carouselElements.map(function(carouselElement) { return new Carousel(carouselElement); });
  carousels.forEach(function (carousel) {
    console.log(carousel);
    carousel.init();
    carousel.dotContainer.addEventListener('click', function(e) {
    	if(e.target && e.target.nodeName == "SPAN") {
          var index = getElIndex(e.target);
          clearInterval(carousel.slide());
          carousel.setOrder(index);
          this.querySelector('.c-carousel__dot.is-active').classList.remove('is-active');
          carousel.dotIndex = index;
          this.children[index].classList.add('is-active');
    	}
    });
  });
})();
