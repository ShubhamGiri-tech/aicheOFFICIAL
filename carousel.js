var slideIndex = 1;
function slide(){
    // window size dependent part
    if(window.screen.width < 425){
    console.log(window.screen.width);
    var dots = document.getElementsByClassName("column");
    for (i = 0; i < dots.length; i++) {
    dots[i].style.width="1%";
    dots[i].style.height="1%";
    }
}
else{
    console.log(window.screen.width);
    var dots = document.getElementsByClassName("column");
    for (i = 0; i < dots.length; i++) {
    dots[i].style.width="16.66%";
    }
}
// window size dependent part ends

// carousel speed = 3000ms = 3sec
    setInterval(function(){
        console.log(slideIndex);
        slideIndex +=1;
        showSlides(slideIndex);
        },
        3000);
}

showSlides(slideIndex);

function plusSlides(n) {
    console.log("next");
    var dots = document.getElementsByClassName("demo");
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
    dots[i].style.border = "0px solid black";
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    dots[slideIndex-1].style.border = "1px solid black";
    captionText.innerHTML = dots[slideIndex-1].alt;
}