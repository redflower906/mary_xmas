(function(){
    console.log('test');

    var baseUrl = "./Mary_music/";
    var audio = ["rudolph.mp3", "merry_christmas.mp3", "mom_nanita.mp3", "dad_joy.mp3", "scarlett_burrito.mp3", 
    'greg', "deck.mp3", "mary_silent.mp3", "beep-08b.mp3", "beep-09.mp3"];
    
    $('img').click(function() {
        console.log($(this))
        var i = $(this).attr('id').substring(1);
        new Audio(baseUrl + audio[i-1]).play();
    });    
})();