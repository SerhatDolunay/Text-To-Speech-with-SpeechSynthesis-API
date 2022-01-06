var synth = window.speechSynthesis;
var voices = synth.getVoices();

var inputForm = document.querySelector("form");
var inputTxt = document.querySelector("textarea");

inputForm.onsubmit = function (event) {
  event.preventDefault();
  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  synth.speak(utterThis);
  inputTxt.blur();
};
