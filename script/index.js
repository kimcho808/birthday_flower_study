// 팝업창과 배경 변수로 만들기
const popup = document.querySelector ('.popup');
const popup_back = document.querySelector ('#popup_bg');
console.log(popup);
console.log(popup_back);
// 자바스크립트에서 css 쓰려면 작성하는 속성 -> 객체.style.속성 = 값
popup.style.display = 'none';
popup_back.style.display = 'none';
// 팝업창과 배경 숨기기
function popupHide() {
    popup.style.display = 'none';
    popup_back.style.display = 'none';
}
// 팝업창과 배경 띄우기
function popupShow() {
    popup.style.display = 'flex';
    popup_back.style.display = 'block';
}
// input '12' 값으로 바꾸기
const monthNum = document.querySelector ('#num');
function clickNum() {
    monthNum.value = '12'
}