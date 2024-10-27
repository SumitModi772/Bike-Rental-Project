var username = localStorage.getItem("username");
  var dispElement = document.getElementById("disp");
  dispElement.textContent = "Welcome, " + username + "!";
  document.querySelector('#goto').onclick=() =>{
    document.querySelector('.chatbot').classList.toggle('active')
}
document.getElementById("open-popup-btn").addEventListener("click",function() {
	const emailInput = document.getElementById('email');
        const email = emailInput.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (emailPattern.test(email)) {
            alert('Thank You for subscribing to us look out to your mail for daily updates regarding us.');
        } else {
            alert('Please enter a valid email address.');
        }
    })
    document.addEventListener('DOMContentLoaded', () => {
        var swiper = new Swiper (".featured-slider",{
            loop:true,
            grabCursor:true,
            centeredSlides:true,
            autoplay: {
            delay: 10000,
            disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              keyboard: {
                enabled: true,
              },
            breakpoints: {
            0: {
            slidesPerView: 1,
            },
            768: {
            slidesPerView: 2,
            },
            1040:{
                slidesPerView:4,
                spaceBetween: 30,
                freeMode: true,
            },
            
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
            })
        
        
        var swiper = new Swiper (".vehicles-slider",{
                loop:true,
                grabCursor:true,
                centeredSlides:true,
                autoplay: {
                delay: 10000,
                disableOnInteraction: false,
                },
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  keyboard: {
                    enabled: true,
                  },
                breakpoints: {
                0: {
                slidesPerView: 1,
                },
                768: {
                slidesPerView: 2,
                },
                1040:{
                    slidesPerView:4,
                    spaceBetween: 30,
                    freeMode: true,
                },
                
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }
                })
            }
        );
    
    