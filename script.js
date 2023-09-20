const open = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.getElementById("navig");

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
