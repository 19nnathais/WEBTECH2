const menuIcon = document.querySelector('.menu-icon');
const menuLinks = document.querySelector('ul');

menuIcon.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});
var swiper1 = new Swiper(".mySwiper", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
slidesPerView: "auto",
autoplay: {
delay: 2500,
disableOnInteraction: false,
pauseOnMouseEnter: true,
 },
coverflowEffect: {
rotate: 0,
stretch: 0,
depth: 300,
modifier: 1,
slideShadows: false,
 },
pagination: {
 el: ".swiper-pagination",
},
});
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

var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var phoneError = document.getElementById('phone-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('subit-error')

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if(phone.length !==10){
        phoneError.innerHTML = "Phone no shoud be 10 digits"
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var cnt = 30;
    var left = cnt - message.length;
    if(left > 0){
        messageError.innerHTML = left + " more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(event){
    event.preventDefault();
    console.log("chay");
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
    else{
        window.location.reload();
    }
}
