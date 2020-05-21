var slideIndex = 1;
showSlides();



function showSlides(){
    var arrImg=["First","Second","Third","Fourth"];
    var img = document.getElementById("img");

    if(slideIndex<1)
        slideIndex = 4;
    else if(slideIndex>4)
        slideIndex = 1;

    img.src="img/"+slideIndex+".jpg";
    var text =  slideIndex +" / "+4;
    var text2 = arrImg[slideIndex -1]+" Image";
    
    document.getElementById("tag").innerHTML =text;
    document.getElementById("caption").innerHTML=text2;
    
    setTimeout(showSlides,2000);
    slideIndex++;
   

}