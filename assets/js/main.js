/* ----------------------
    testimonial slider
----------------------- */
function testimonialSlider(){
const carouselOne=document.getElementById('carouselOne');
if(carouselOne){
    carouselOne.addEventListener('slide.bs.carousel',function(){
        console.log('hi')
        const activeItem= this.querySelector(".active");
        document.querySelector(".js-testimonial-img").src=
        activeItem.getAttribute("data-js-testimonial-img");
    })
}
}
testimonialSlider()