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
  const volume_v = document.querySelector('#volume');
  volume_v.addEventListener('change',(event) =>{
      const volume_pic = document.querySelector('div>img');
      if(`${event.target.value}`==0){
        volume_pic.src = "assets/icons/volume-level-0.svg";
      }
      else if(`${event.target.value}`<33){
        volume_pic.src = "assets/icons/volume-level-1.svg";
      }
      else if(`${event.target.value}`<67){
        volume_pic.src = "assets/icons/volume-level-2.svg";
      }
      else{
        volume_pic.src = "assets/icons/volume-level-3.svg";
      }
      audio.volume = `${event.target.value}`*1.0/100;
  });
  const jsConfetti = new JSConfetti();
  const play = document.querySelector('button')

  play.addEventListener('click',(event)=>{
    if(horn_select=="select"){
      return;
    }
    if(horn_select.value=="party-horn"){
      jsConfetti.addConfetti({
        emojis: ['🌸'],
        confettiNumber: 500,
      })}
    audio.play();
  });
}