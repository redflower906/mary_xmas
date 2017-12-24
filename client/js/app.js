var music;
$('img').click(function(){

    var musicId = $(this).attr('id').substring(1);
    if(typeof music == "undefined"){
    music = document.getElementById(musicId);
    music.currentTime = 0
    music.play();           
    } else{
        var musicP = music;
        music = document.getElementById(musicId);
        if((music == musicP) && music.paused){
            music.currentTime = 0
            music.play();
        } else if(music == musicP) {
            music.pause();
        }else{
        musicP.pause();
        music.currentTime = 0
        music.play();        
        }
    }
})
// $(document).ready(function(){
//     if(music.paused){
//         $(this).addClass('activate');
//     } else {
//         $('i').click(function(){
//             music.pause();
//             $(this).addClass('activate');
//         })     
//     }
// }

    // if (img.find('on').length > 0) {
    //   music = document.getElementById(img.find('on').attr('id'))
    // } else {
    // }

    // if($('img.on').length){
    //     music.pause();
    //     $(this).find('.on').removeClass('on').addClass('off');
    //     music = document.getElementById(img.find('on').attr('id'));
    //     music.play();
    //     } else{
    //     music = document.getElementById(musicId);
    //     music.play();
    //     $(this).closest('.off').removeClass('off').addClass('on');
    //     };
//});
// (function(){
//     var baseUrl = "./Mary_music/";
//     var audio = ["rudolph.mp3", "merry_christmas.mp3", "mom_nanita.mp3", "dad_joy.mp3", "scarlett_burrito.mp3", 
//     'greg', "deck.mp3", "mary_silent.mp3"];
   
//     $('img').click(function() {
//         var i = $(this).attr('id').substring(1);
//         var music = new Audio(baseUrl + audio[i-1]);
//         console.log(music)
//         if(music.paused){
//             console.log(music);            
//             music.play();       
//         }else{
//             console.log(music+"2");            
//             music.pause();
//         }
//         // if($('img.on').length){
//         // console.log(music);
//         // music.pause();
//         // $(this).find('.on').removeClass('on').addClass('off');
//         // }else{     
//         // console.log($(this));       
//         // var i = $(this).attr('id').substring(1);
//         // console.log(i);
//         // var music = new Audio(baseUrl + audio[i-1]);
//         // music.play();
//         // $(this).closest('.off').removeClass('off').addClass('on');
//         // console.log(music);
//         // }
//     });    
// })();