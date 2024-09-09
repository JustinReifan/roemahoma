//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}


const overlayPage = document.querySelector('#overlay');
carousel.addEventListener('wheel',function(){
    // overlayPage.classList.add('overlay')
})

document.addEventListener('DOMContentLoaded', function() {
    const backgroundImage = document.querySelector('.background-image');
    const carousel = document.getElementById('carousel')
  
    function handleScroll() {
      backgroundImage.classList.add('dimmed');
    }
  
    carousel.addEventListener('wheel', handleScroll);
});
  


// contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Update these to match your EmailJS service ID and template ID
    const serviceID = 'service_pl6qi29';
    const templateID = 'template_hx6i053';

    const templateParams = {
        user_email: document.getElementById('email').value,
        user_subject: document.getElementById('subject').value,
        user_comments: document.getElementById('comments').value
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            document.getElementById('status').innerText = 'Email sent successfully!';
            document.getElementById('contact-form').reset();
        }, function(error) {
            document.getElementById('status').innerText = 'Failed to send email. Please try again later.';
        });
});


// const observer = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible
//       console.log(entry);
//       if (entry.isIntersecting) {
//         // Add the animation class
//         entry.target.classList.add('slideRight');
//       }
//     });
//   });
  
//   observer.observe(document.querySelector('.icon-fixed1'));

document.addEventListener('scroll', function(){
    document.getElementById('icon-fixed1').classList.add('slideLeft');
    document.getElementById('icon-fixed2').classList.add('slideRight');
})
