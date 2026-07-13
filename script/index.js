const popup = document.querySelector ('.popup');
const popup_back = document.querySelector ('#popup_bg');
console.log(popup);
console.log(popup_back);
popup.style.display = 'none';
popup_back.style.display = 'none';
function popupShow() {
    popup.style.display = 'flex';
    popup_back.style.display = 'block';
}
function popupHide() {
    popup.style.display = 'none';
    popup_back.style.display = 'none';
}
let month;
month = '12';