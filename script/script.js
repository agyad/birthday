$(document).ready(function() {
    $("ul li a").click(function() {
        $("ul li a").removeClass("active");
        $(this).addClass("active");
    })
    let img1 = $('.img1');
    let hero_text1 = $('.hero-text1');
    let img2 = $('.img2');
    let hero_text2 = $('.hero-text2');
    let img3 = $('.img3');
    let hero_text3 = $('.hero-text3');
    hero_text1.hide();
    hero_text2.hide();
    hero_text3.hide();
    img1.mouseenter(function() {
        hero_text1.show();
        hero_text1.animate({ top: '80%' }, 500)
    })
    img1.mouseleave(function() {
        hero_text1.fadeOut();
        hero_text1.animate({ top: '-80%' }, 0)
    })
    img2.mouseenter(function() {
        hero_text2.show();
        hero_text2.animate({ top: '80%' }, 500)
    })
    img2.mouseleave(function() {
        hero_text2.fadeOut();
        hero_text2.animate({ top: '-80%' }, 0)
    })
    img3.mouseenter(function() {
        hero_text3.show();
        hero_text3.animate({ top: '80%' }, 500)
    })
    img3.mouseleave(function() {
        hero_text3.fadeOut();
        hero_text3.animate({ top: '-80%' }, 0)
    })
    $('.scroll').hide();
    /** $('.video').hide();
     $('.video1').hide(); **/
    $(document).scroll(function() {
        let y = $(this).scrollTop();
        /** let x=$(this).scrollTop();
         let n=$(this).scrollTop(); */
        if (y > 700) { $('.scroll').fadeIn('slow'); } else { $('.scroll').fadeOut('slow'); }
        /** if (x > 500){$('.video').fadeIn('slow');}
         if(n>600){$('.video1').fadeIn('slow')} */
    })
});