// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
function init() {

const text = document.querySelector('#text-to-speak');
const button = document.querySelector('button');
const voiceSelect = document.querySelector('#voice-select');
const img = document.querySelector('img');
let voices = [];

//reference:https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices
function populateVoiceList() {
voices = synth.getVoices();
for (let i = 0; i < voices.length ; i++) {
  const option = document.createElement('option');
  option.textContent = `${voices[i].name} (${voices[i].lang})`;
  option.setAttribute('data-lang', voices[i].lang);
  option.setAttribute('data-name', voices[i].name);
  voiceSelect.appendChild(option);
}
}
populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

//reference:https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
button.addEventListener('click',(event)=>{
  const utterance = new SpeechSynthesisUtterance(text.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
      break;
    }
  }
  synth.speak(utterance);
  img.src = 'assets/images/smiling-open.png';
})

//check if the speaker is on every 0.1 sec, would not make much difference
//for eye doing shorter intervals
function check(){
  if(synth.speaking==true){
    return;
  }
  else{
    img.src = 'assets/images/smiling.png';
  }
}
setInterval(check,100);
}

