//remove psevdoelement about-us.html form input-number
let input = document.querySelectorAll(".not-necessarily input");
for(const clik of input){
clik.addEventListener("keydown", function (){
       clik.parentElement.classList.remove("not-necessarily") 
});
}
//
//
//
//
//accordion
document.querySelectorAll(".line").forEach((item)=>
       item.addEventListener("click", () =>{
       const acord = item.parentElement;
            acord.classList.toggle("ask-accord")  
       })
) 
//
//
//burger menu
let burger = document.querySelector(".burger-menu")
burger.addEventListener("click", function(){
       document.querySelector(".mobi-nav").classList.toggle("mobi-nav-active");
       document.querySelector(".burger-menu .burger").classList.toggle("cross");
       document.querySelector("body").classList.toggle("not-scroll");
}) 
//
//
// open modal window
let wind = document.querySelectorAll(".modal-wind")
for (const mw of wind){
mw.addEventListener("click", function(){
       document.querySelector(".popup_catalog").classList.add("open");
       document.querySelector("#wrapper").classList.add("popup");   
})}
//
//
//close green cross
let close = document.querySelector(".close")
close.addEventListener("click", function(){
       document.querySelector(".popup_catalog").classList.remove("open");
       document.querySelector("#wrapper").classList.remove("popup");
})
//
//
//close black-window
let block =  document.querySelector(".popup .blocker");
block.addEventListener("click", function(){
       document.querySelector(".popup").classList.remove("open");
       document.querySelector("#wrapper").classList.remove("popup");
})
//
//
//eror window
let userName = document.querySelector("#name");
let mail = document.querySelector("#mail");
let tell = document.querySelector("#tell").value;
let modalBtn = document.querySelector(".button-form");
modalBtn.addEventListener("click", function(){
       if ((userName.value && mail.value) || tell){
              document.querySelector(".successfully img").style.display ="block";
              document.querySelector("form").style.display = "none";
       } else{
              mail.style.border = "1px solid red";
              userName.style.border = "1px solid red";
              userName.value = "Это поле обязательно";
              mail.value = "Это поле обязательно";
       }

})
//
//
//form eror
let formUserName = document.querySelector("#formName");
let formMail = document.querySelector("#formMail");
let formTell = document.querySelector("#formTell");
let formModalBtn = document.querySelector("#formBtn");
formModalBtn.addEventListener("click", function(){
       if ((formUserName.value && formMail.value) || formMail.value){
              document.querySelector(".successfullyOne").style.display ="block";
              document.querySelector(".forms").style.display = "none";
       } else{
              formMail.style.border = "2px solid red";
              formUserName.style.border = "2px solid red";
              formUserName.value = "Это поле обязательно";
              formMail.value = "Это поле обязательно";
       }
})
//
//
//window two links

