$(document).ready(function () {
    $(".ham").click(function () {
        $(".menu").slideToggle();
        $(this).toggleClass("cross");
    });
});

let play_button = document.querySelector('.watch-video'),
play_video = document.querySelector('.play-video'),
close_video = document.querySelector('.close-video'),
vid = document.querySelector('.modal-video'),
modal_back = document.querySelector('.modal-background');


play_button.addEventListener('click',()=>{
    play_video.style.display = "block";
    close_video.style.display = "block";
    modal_back.style.display = "block";
    vid.play();
})

close_video.addEventListener('click',()=>{
    play_video.style.display = "none";
    close_video.style.display = "none";
    modal_back.style.display = "none";
    vid.pause(); 
})

modal_back.addEventListener('click',()=>{
    play_video.style.display = "none";
    close_video.style.display = "none";
    modal_back.style.display = "none";
    vid.pause(); 
})
























