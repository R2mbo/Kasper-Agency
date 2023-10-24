const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


let list = document.getElementById("list");
let burger = document.getElementById("burger_button");


burger.addEventListener("click" , function(){
  list.classList.toggle("hidden")
})

document.addEventListener("click",function(e){
  if(!e.target.matches("#burger_button") && !e.target.matches("#list") && !list.classList.contains("hidden") && !e.target.matches("#list li a")){
    list.classList.add("hidden")
  }
})

