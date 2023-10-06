const open = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.getElementById("navig");

let lgin = document.getElementById("login-form");
let regf = document.getElementById("register-form");
let fbutt = document.getElementById("form-bttn");

if (open) {
  open.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let BigImage = document.getElementById("BigImage");
let smallImg = document.getElementsByClassName("smallImage");
smallImg[0].onclick = function () {
  BigImage.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  BigImage.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  BigImage.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  BigImage.src = smallImg[3].src;
};

function register(){
  lgin.style.left = "-400px";
  regf.style.left = "50px";
  fbutt.style.left = "110px";
}

function login(){
  lgin.style.left = "50px";
  regf.style.left = "450px";
  fbutt.style.left = "0";
}



