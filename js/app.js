const menuIcon = document.querySelector('.menu-icon');
const menuLinks = document.querySelector('ul');

menuIcon.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});
// var swiper1 = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//       },
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 300,
//       modifier: 1,
//       slideShadows: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
      },
    },
  });
  // swiper1.slideNext();
  swiper2.slideNext();
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " actives";
  setTimeout(showSlides, 3000); 
}