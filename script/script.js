

let icon = document.querySelector("#pasword-icon");
let pasword = document.querySelector("#password");
let paswordTwo = document.querySelector("#password-two");
let paswordThree = document.querySelector("#password-three");
let paswordFour = document.querySelector("#password-four");
let paswordFive = document.querySelector("#password-five");
let paswordSixt = document.querySelector("#password-sixt");
let dropdownBtn = document.querySelector(".dropdown-btn");




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
