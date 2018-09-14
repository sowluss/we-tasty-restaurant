const current = document.querySelector('#current'); 
const images = document.querySelectorAll('.images img');
const opacity = 0.4;

// set the first image opacity
images[0].style.opacity = opacity;


images.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
    // reset the opacity 
    images.forEach(img => (img.style.opacity = 1));

    // chamge the current image to the target of the clicked image
    current.src = e.target.src;

    //  add fade-in class
    current.classList.add('fade-in');

    //  remove fade-in class after 5 secs.
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // change the opacity to const value (0.4)
    e.target.style.opacity = opacity;
}

// testing to make a scroll to the current image when bootm images are clicked on
$('.images img').click(function() {
    $('html, body').animate({
        scrollBottom: $('#current').offset().bottom}, 'slow');
    })





