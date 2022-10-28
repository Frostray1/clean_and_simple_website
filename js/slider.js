let offset = 0;
const sliderLine = document.querySelector('.slider-line');


document.querySelector('.slider-next').addEventListener('click', function(){
    offset+=1440;
    sliderLine.style.left = -offset + 'px';
})

