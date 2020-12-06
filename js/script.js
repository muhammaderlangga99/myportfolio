// icon feather
feather.replace()
// =======================================================
// toggler
$('.menu-toggler input').click(function () {
    $('.nav').toggleClass('appear');
});
// =======================================================

// darkmode
$('.darkmode button').click(function () {
    $('body').toggleClass('dark');
    $('.feather.sun').toggleClass('appear');
    $('.feather.moon').toggleClass('hide');
    $('.darkmode').toggleClass('whitebg');
    $('.darkmode button').toggleClass('wh');
    $('nav a').toggleClass('whitecr');
    $('.menu-toggler span').toggleClass('whiteburger');
    $('p').toggleClass('whitecr');
    $('h1').toggleClass('whitecr');
    $('h2').toggleClass('whitecr');
    $('h3').toggleClass('whitecr');
    $('h4').toggleClass('whitecr');
    $('h5').toggleClass('whitecr');
    $('.bgdiagonal').toggleClass('dark');
    $('.expertise img').toggleClass('dark');
});



$(window).scroll(function () {
    const wScrollY = $(this).scrollTop();
    // console.log(wScrollY)
    // parallax
    $('.profile').css({
        'transform': 'translate(0, ' + wScrollY / 8 + '%)'
    });
    $('.sayhello div:nth-child(2) p').css({
        'transform': 'translate(0, ' + wScrollY + '%)'
    });
    $('.brandxl').css({
        'transform': 'translate(0, ' + wScrollY / -70 + '%)'
    });


    // hide
    if (wScrollY > $('.box1').offset().top - 200) {
        $('.profile').addClass('transparant');
        $('.brandxl').addClass('transparant');
    }
    if (wScrollY < 400) {
        $('.profile').removeClass('transparant');
        $('.brandxl').removeClass('transparant');
    }

    // animate
    if (wScrollY > 469 - 100) {
        $('.box1').addClass(['animate__animated', 'animate__fadeInLeft']);
        $('.bgdiagonal').addClass('appear');
        $('.box1').removeClass('hide');
    }

    if (wScrollY > $('.expertise').offset().top - 250) {
        $('.expertise .h2').addClass('appear');
    }

    // expertise
    if (wScrollY > $('.expertise').offset().top - 100) {
        $('.iconex').addClass('appear');
    }

    // About
    if (wScrollY > 1725) {
        $('.titleabout').addClass('appear');
        $('.titleabout.nd').css({
            'color': '#eeeeee',
            'marginTop': '-60px'
        });
        $('.titleabout.nd').addClass([
            'animate__animated', 'animate__fadeInLeft'
        ]);
        $('.contentp1').css({
            'marginTop': -wScrollY / 7 + 'px'
        });
        $('.contentp1').addClass([
            'animate__animated', 'animate__fadeInUp',
            'animate__delay-1s',

        ]);

    }

    // blog
    if (wScrollY > 2085) {
        $('.blog img').addClass('appear');
        $('.blog p').addClass('appear');
    }
    $('.col-6 img').css({
        'transform': 'translate(0, ' + wScrollY / -30.5 + '%)'
    });
});