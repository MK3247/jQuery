$(document).ready(function() {
    $("#text").click(function() {
        $("p").hide();
        $(this).hide();
        // hides the children of p and the button itself
    });

    $("#images").click(function(){
        $("figure").hide();
        $(this).hide();
        // hides images and the button itself
    })
});