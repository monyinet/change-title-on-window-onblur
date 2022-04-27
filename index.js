const setOnFocusTitle = document.title;
const setOnBlurTitle = '😭 ¡Adiós!';
const getSpanMain = document.querySelector("#main");

window.onblur = () => {
  document.title = setOnBlurTitle;
  getSpanMain.innerHTML = setOnBlurTitle;
};    
window.onfocus = () => {
  document.title = setOnFocusTitle;
  getSpanMain.innerHTML = setOnFocusTitle;
};
window.onload = () => {
  document.title = setOnFocusTitle;
  getSpanMain.innerHTML = setOnFocusTitle;
};