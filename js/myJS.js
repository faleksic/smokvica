//javascript for changeng the navbar when scrolling and clicking

var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight()
    , link = $('a');

$(window).on('scroll', function () {
    //current position is the bottom of the page
    var cur_pos = $(this).scrollTop() + $(window).height();

    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').parent().removeClass('active');

            nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
        }
    });
});

link.on('click', function () {
    $(".nav li").removeClass("active");
    $(this).parent().addClass('active');
});