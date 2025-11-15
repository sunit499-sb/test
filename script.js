// console.log("welcome to spotify");

// // Initialize the variables
// let songindex = 0;
// let audioelement = new Audio('song/1.mp3');
// let masterplay = document.getElementById('masterplay');
// let myprogressbar = document.getElementById('myprogressbar');
// let songs = [
//     {songname: "tv-off", filepath: "song/1.mp3", coverpath: "1.jpg"},
//     {songname: "tv-off", filepath: "song/1.mp3", coverpath: "1.jpg"},
//     {songname: "tv-off", filepath: "song/1.mp3", coverpath: "1.jpg"},
// ]
// // audio element.play();
// // handle play/pause click
// masterplay.addEventListener('click', ()=>{
//     if(audioelement.paused || audioelement.currentTime<=0){
//         audioelement.play();
//         masterplay.classList.remove('far fa-play-circle');
//         masterplay.classList.add('far fa-pause-circle');

//     }
//     else{
//         audioelement.pause();
//         masterplay.classList.remove('far fa-pause-circle');
//         masterplay.classList.add('far fa-play-circle');

//     }
// })
// // listen to events
// myprogressbar.addEventListener('timeupdate', () => {
//     console.log('timeupdate');
//     // update seekbar

// })
console.log("Welcome to spotify");
//initialize the variables
let songindex = 0;
let audioelement = new Audio('0.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname')
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    
                {songname:"fast Car",filePath: "0.mp3",coverPath:"1.jpeg"},
                {songname:"Perfect Strangers",filePath: "2.mp3",coverPath:"2.jpeg"},
                {songname:"By Your Side",filePath: "3.mp3",coverPath:"3.jpeg"},
                

    
]
songitems.forEach((element,i)=>{
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})
//audioelement.play();
//handle play pause click
masterplay.addEventListener('click',()=>
{
    if(audioelement.paused ||   audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
         audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle')
                gif.style.opacity = 0;

    }
})
//listen to events
audioelement.addEventListener('timeupdate', ()=>{

    //update seekbar
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
                element.classList.add('fa-play-circle');



})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>{
            console.log(e.target);
            makeAllPlays();
            songindex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
             audioelement.src = `${songindex}.mp3`;
            mastersongname.innerText = songs[songindex].songname;
            audioelement.currentTime = 0;
             audioelement.play();
             gif.style.opacity = 1;
            masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if (songindex>=2){
        songindex=0;
    }
    else{
        songindex +=1;
    }
    audioelement.src = `${songindex}.mp3`;
        mastersongname.innerText = songs[songindex].songname;

    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if (songindex>=2){
        songindex=0;
    }
    else{
        songindex -=1;
    }
    audioelement.src = `${songindex}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})