$(function(){
    //===========================
    //ナビメニュー背景表示切替
    //===========================
    $(window).scroll(function(){
        if($(this).scrollTop()>700){
            $('.header_nav').addClass('header-active');
        } else {
            $('.header_nav').removeClass('header-active');
        }
    });

    //===========================
    //ページ内リンク
    //===========================
    $('.menu-item a,.top_scroll a,.btn_a').click(function(){
        let id = $(this).attr('href');
        let position = $(id).offset().top-50;
        $('html,body').animate({
            scrollTop:position
        },700);
        return false;
    });

    //===========================
    //トップへ戻るボタン
    //===========================
    $(window).scroll(function(){
        if($(this).scrollTop()>800){
            $('.top_scroll').fadeIn();
        } else {
            $('.top_scroll').fadeOut();
        }
    });

    //===========================
    //スクロールエフェクト
    //===========================
    function fadeUpTrigger(){
        $('.fadeUpTrigger').each(function(){
            var elemPos=$(this).offset().top+100;
            var scroll=$(window).scrollTop();
            var windowHeight=$(window).height();
            if(scroll>=elemPos-windowHeight){
                $(this).addClass('fadeUp');
            }
        });
    };
    $(window).scroll(function(){
        fadeUpTrigger();
    });

    //===========================
    //SP用メニュー表示切替
    //===========================
    $('.sp_icon,.sp_menu-item').click(function(){
        $('.sp_menu').fadeToggle();
    });

});