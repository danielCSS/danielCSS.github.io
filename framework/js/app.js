console.log('hi there2!');

function updateCarousel(l,i)
{
  for (var i = 0; i < listLength; i++) {
    console.log(list.children[i]);
    //if (list.childNodes[i].className == "is-prev") {
    if (list.children[i].classList.contains('is-active') ) {
      list.children[(i-1+listLength) % listLength].classList.remove('is-prev');
      list.children[i].classList.remove('is-active');
      list.children[i].classList.add('is-prev');
      list.children[(i+1) % listLength].classList.remove('is-next');
      list.children[(i+1) % listLength].classList.add('is-active');
      list.children[(i+2) % listLength].classList.add('is-next');
      break;
    }
  }
}
var list = document.querySelector(".js-aside-banner");
var listLength = list.children.length;

// var activeItem = document.querySelector(".js-aside-banner .is-active");
// var index = Array.prototype.indexOf.call(list.children, activeItem);

setInterval(updateCarousel, 3000);
