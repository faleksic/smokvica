$(document).ready(function(){

    /* default settings */
    $('.venobox').venobox();


    /* custom settings */
    $('.venobox_custom').venobox({
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });

    /* auto-open #firstlink on page load */
    $("#firstlink").venobox().trigger('click');
});