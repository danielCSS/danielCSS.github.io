
console.log('hi there!');
Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var tip = document.getElementById('tip');
    var pitfall = document.getElementById('pitfall');

    tip.style.display = "none";
    pitfall.style.display = "none";

    var slide = event.currentSlide;

    if(slide.classList.value.indexOf('tip') !== -1) {
      tip.style.display = "block";
    }
    if(slide.classList.value.indexOf('pitfall') !== -1) {
      pitfall.style.display = "block";
    }
} );
