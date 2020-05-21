var slideIndex = 1;
showSlides(slideIndex);


function showSlides(n){
    console.log("show slide "+slideIndex+"\n");
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if(n<1)
        slideIndex = slides.length;
    if(n>slides.length) 
        slideIndex = 1;
    for(i = 0 ; i<slides.length ;i++){
        slides[i].style.display="none"
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className +=" active";

}

function plusSlide(n){
    
    showSlides(slideIndex+=n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}

