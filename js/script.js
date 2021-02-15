
setTimeout(function(){
    var prelodaer = document.getElementById('page-preloader');
    if(!prelodaer.classList.contains('done'))
    {
        prelodaer.classList.add('done');
    }
}, 300);
function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Введите,пожалуйста свое имя",
                phone: "Введите свой номер телефона",
                email: {
                  required: "Введите свой email ",
                  email: "Неправильний email"
                }
              }
        });
        }
validateForms('.consultation__form');
validateForms('.questions__form');
validateForms('.questions__descrForm'); 


 const slider = tns({
     container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
     speed: 1300,
   });
 document.querySelector('.prev').addEventListener('click',function () {
     slider.goTo('prev');
 });
 document.querySelector('.next').addEventListener('click',function () {
     slider.goTo('next');
 });

let menuBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.delivery__tabs');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('hamburger_active');
    menu.classList.toggle('delivery__tabs_active');
});