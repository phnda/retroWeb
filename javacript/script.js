$( document ).ready(function() {
    console.log( "ready!" );


        $( ".chuk img").hover(function(){
            $(this).animate({width: '40vw'});
            console.log("hello");
        });

        $( ".controller").click(function(){
        //    $(".innovative, .features").addClass("innovativeBlue");
            console.log("hello");
        });

        $( ".console").click(function(){
        //    $(".innovative, .features").addClass("innovativeBlue");
            console.log("hello");
        });
    
});