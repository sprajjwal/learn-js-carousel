(function() {
    function makeSlideshow(slides) {
        //const slides = document.getElementById(slidesId)
        const slidesInner = slides.querySelector('.slides-inner')
        const images = slidesInner.querySelectorAll('img')
        const slidesWidth = slides.clientWidth
        const time = parseInt(slides.dataset.delay)
        const transition = parseInt(slides.dataset.transition)
        slidesInner.style.transition = `${transition}ms`
    
        let index = 0 //slide index
    
        setInterval(function(){
            index += 1
            if (index === images.length) {
                index = 0
            }
            slidesInner.style.transform = `translate3d(-${index * slidesWidth}px, 0, 0)`
        }, time)
    }
    
    const slideshows = document.querySelectorAll('.ms-slide-show')
    for (let i = 0; i < slideshows.length; i++) {
        makeSlideshow(slideshows[i])
    }

})() // IIFE



