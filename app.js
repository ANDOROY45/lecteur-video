const video = document.querySelector('.video');
const btnPausePlay = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img');
const barreOrange = document.querySelector('.barre-orange');
const muteBtn = document.getElementById('mute');
const fullSCreen = document.getElementById('fullscreen');
const volumeSlider = document.getElementById('volume-slider');
const juice =document.querySelector('.juice');

btnPausePlay.addEventListener('click', togglePlayPause)
video.addEventListener('click', togglePlayPause);

function togglePlayPause(){
    if(video.paused){
        img.src = "ressources/pause.svg";
        video.play();
    } else {
        img.src = "ressources/play.svg";
        video.pause();
    }
}
//la barre orange
video.addEventListener('timeupdate', () => {

    let juicePos = video.currentTime / video.duration;

    juice.style.width = juicePos *100 + "%";

    if(video.ended){
        img.src = "ressources/play.svg";
    }
})
//volume 
volumeSlider.addEventListener('change', () => {
    video.volume = volumeSlider.value / 100;
    console.log(volume)
})

//mute 
muteBtn.addEventListener('click', () => {

    if(video.muted){
        video.muted = false;
        muteBtn.innerText = "Mute";
    } else {
        video.muted = true;
        muteBtn.innerText = "Unmute";
    }
})
//barre orange
 let rect = barreOrange.getBoundingClientRect();
//  console.log(rect);
let largeur = rect.width;

barreOrange.addEventListener('click', (e) => {
    let x = e.clientX - rect.left;
    // console.log(x);
    let widthPercent = ((x * 100 / largeur));
    // console.log(widthPercent);

    let durationVideo = video.duration;

    video.currentTime = durationVideo * (widthPercent / 100)
})
window.addEventListener('resize', () => {
    let rect = barreOrange.getBoundingClientRect();
    let largeur = rect.width;
})
video.addEventListener('dblclick', () => {
    video.requestFullscreen()
})
fullSCreen.addEventListener('click', () => {
    video.requestFullscreen()
})