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
// 자바스크립트에서 display=non으로 숨겼다가 특정이벤트에 따라 다시 보이고 싶을 때
// 무조건 block을 쓰는게 아닌 그 선택자가 원래 가지고 있는 display속성으로 되돌리기
// display:flex가 선택자에 원래 있었다면 자바스크립트도 display=flex
// display가 선택자에 없었다면? 원래 태그 고유속성에 따라 display=block또는 display=inline
function popupShow() {
    popup.style.display = 'flex';
    popup_back.style.display = 'block';
}
// input '12' 값으로 바꾸기
const monthNum = document.querySelector ('#num');
function clickNum() {
    monthNum.value = '12'
}