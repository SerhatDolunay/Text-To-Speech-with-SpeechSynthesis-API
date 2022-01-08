var synth = window.speechSynthesis;
var voices = synth.getVoices();

var inputForm = document.querySelector("form");
var inputTxt = document.querySelector("textarea");
var inputBtn = document.querySelector("input");

inputForm.onsubmit = function (event) {
  inputBtn.setAttribute("disabled", "disabled");
  event.preventDefault();
  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  utterThis.lang = "tr-TR";
  synth.speak(utterThis);
  utterThis.addEventListener("end", function (event) {
    inputBtn.removeAttribute("disabled");
  });
  inputTxt.blur();
};
