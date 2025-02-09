// For Carousel
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
     el: '.swiper-pagination',
     clickable: true,
     dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });

// For hiding and unhiding nav bar
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByClassName("nav").style.top = "0";
//   } else {
//     document.getElementsByClassName("nav").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// var prevScrollpos = window.pageYOffset; //Some issue with pageYOffset
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset; //Some issue with pageYOffset
//   var menu = document.querySelector(".nav"); // Select the first element with the class "menu"
  
//   if (prevScrollpos > currentScrollPos) {
//     menu.style.top = "0"; // Show the menu
//   } else {
//     menu.style.top = "-50px"; // Hide the menu
//   }
  
//   prevScrollpos = currentScrollPos; // Update the previous scroll position
// };
