

let icon = document.querySelector("#pasword-icon");
let pasword = document.querySelector("#password");
let paswordTwo = document.querySelector("#password-two");
let paswordThree = document.querySelector("#password-three");
let paswordFour = document.querySelector("#password-four");
let paswordFive = document.querySelector("#password-five");
let paswordSixt = document.querySelector("#password-sixt");
let dropdownBtn = document.querySelector(".dropdown-btn");
let svgOne = document.querySelector("#svg-1")
let svgTwo = document.querySelector("#svg-2")




function showHide() {
  if (pasword.type === "password") {
    pasword.setAttribute("type", "text");
  } else {
    pasword.setAttribute("type", "password");
  }
}

function showHidetwo() {
  if (paswordTwo.type === "password") {
    paswordTwo.setAttribute("type", "text");
  } else {
    paswordTwo.setAttribute("type", "password");
  }
}
function showHidethree() {
  if (paswordThree.type === "password") {
    paswordThree.setAttribute("type", "text");
  } else {
    paswordThree.setAttribute("type", "password");
  }
}
function showHidefour() {
  if ( paswordFour.type === "password") {
    paswordFour.setAttribute("type", "text");
  } else {
    paswordFour.setAttribute("type", "password");
  }
}
function showHidefive() {
  if ( paswordFive.type === "password") {
    paswordFive.setAttribute("type", "text");
  } else {
    paswordFive.setAttribute("type", "password");
  }
}
function showHidesixt() {
  if ( paswordSixt.type === "password") {
    paswordSixt.setAttribute("type", "text");
  } else {
    paswordSixt.setAttribute("type", "password");
  }
}

function goNext (e) {
  e.target.nextElementSibling.focus();
};


$(".dropdown-btn").click(function(){
  $(this).parent().toggleClass("active")
})

$(".dropdown-btn").click(function(){
  $(".category-dropdown").toggleClass("activetwo")
})

$(".dropdown-btn").click(function(){

})
$(".black-area").click(function(){
 
  $(".category-dropdown").toggleClass("activetwo")
  $(".search-box").toggleClass("active")
})
$(".user a").click(function(){
  $(".main-s").css("z-index","0")
  $(".head").css("z-index","auto")
 
})
$(".btn-close").click(function(){
  $(".main-s").css("z-index","99999")
  $(".head").css("z-index","99999")
})






