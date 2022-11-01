// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const audio = document.querySelector('.hidden');
  const horn_select = document.getElementById('horn-select');

  horn_select.addEventListener('change', (event) =>{
      const pic = document.querySelector('img');
      pic.src = "assets/images/" + `${event.target.value}` + ".svg";
      audio.src = "assets/audio/" + `${event.target.value}` + ".mp3";
  });
}