// Defining constants
const aboutSect = document.querySelector(".about-section");
const aboutPara = document.querySelector(".about-para");
const aboutImg = document.querySelector(".about-img");
const carouselContent = document.querySelectorAll(".carousel-content")[0];
const workSect = document.querySelector(".work-section");
const workImg = document.querySelectorAll(".work-img");
const options = {
    threshold: 0.5,
    rootmargin: "-800px"
};

// Adding animation to the text on the home page
for(i=0; i<carouselContent.children.length; i++){
    carouselContent.children[i].style.animation = "lazyload 2s";
};

// Adding animation to the about Section
aboutSect.style.opacity = 0;
const observerOne = new IntersectionObserver(function(entries, observer){
    if(entries[0].isIntersecting === true){
        aboutSect.style.opacity = 1;
        aboutPara.style.animation = "slideinLeft 1s";
        aboutImg.style.animation = "slideinRight 1s";
    };
}, options);

//Adding animation to the work section
for(i=0; i<3; i++){
    workImg[i].style.opacity = 0;
};

const observerTwo = new IntersectionObserver (function(entries, observer){
    if(entries[0].isIntersecting === true){
        for(i=0; i<3; i++){
            workImg[i].style.opacity = 1;
            workImg[i].style.transition = "opacity 2s";
        };
    };
}, options);

observerOne.observe(aboutSect);
observerTwo.observe(workSect);
