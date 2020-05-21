var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    for(i = 0 ;i < slides.length ; i++){
        slides[i].style.display="none";
        dots[i].className = dots[i].className.replace(" active","");
    }
    if(slideIndex<1)
    slideIndex = slides.length;
    else if(slideIndex>slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+=" active";
    slideIndex++;
    setTimeout(showSlides,2000);
}