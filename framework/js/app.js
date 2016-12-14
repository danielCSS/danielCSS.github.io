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



  // console.log(l);
  // console.log(l[0]);
  // console.log(l[i]);
  // console.log("active item " + index);
  // console.log("previous item " + (index-1) % listLength);
  // console.log(list[(index-1) % listLength]);
  // list[(index-1) % listLength].classList.remove('is-prev');
  // list[index].classList.remove('is-active');
  // list[index].classList.add('is-prev');
  // list[(index+1) % listLength].classList.remove('is-next');
  // list[(index+1) % listLength].classList.add('is-active');
  // list[(index+2) % listLength].classList.add('is-next');

}
var list = document.querySelector(".js-aside-banner");
console.log(list.children);
var listLength = list.children.length;
console.log(listLength);
var activeItem = document.querySelector(".js-aside-banner .is-active");
var index = Array.prototype.indexOf.call(list.children, activeItem);
console.log("index = " + index);

//updateCarousel();
setInterval(updateCarousel, 3000);
