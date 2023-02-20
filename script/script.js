

let icon = document.querySelector("#pasword-icon");
let pasword = document.querySelector("#password");
let paswordTwo = document.querySelector("#password-two");


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

function goNext (e) {
  e.target.nextElementSibling.focus();
};
