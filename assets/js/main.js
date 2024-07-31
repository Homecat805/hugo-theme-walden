$(document).ready(function(){

    'use strict';

    // menu-main sider ---------------------------------------- start
    // varialbles
    const menuMainTarget = $('#header').children('.menu-main');
    const menuMainOpenBtn = $('#header').find('.menu-main-toggle').children('.open');
    const menuMainCloseBtn = $('#header').find('.menu-main-toggle').children('.close');

    const sider = $('#stager').find('aside');
    const siderOpenBtn = $('#stager').find('.toggles').children('.sider-open');
    const siderCloseBtn = $('#stager').find('.toggles').children('.sider-close');

    // menu-main open action
    menuMainOpenBtn.click(function(){
        menuMainTarget.slideDown(500);
        menuMainCloseBtn.show();
        menuMainOpenBtn.hide();
        sider.animate({left: "-100vw"});
        siderOpenBtn.show();
        siderCloseBtn.hide();
    });

    // menu-main close action
    menuMainCloseBtn.click(function(){
        menuMainTarget.slideUp(500);
        menuMainOpenBtn.show();
        menuMainCloseBtn.hide();
    });

    // sider open action
    siderOpenBtn.click(function(){
        sider.animate({left: 0});
        siderCloseBtn.show();
        siderOpenBtn.hide();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        menuMainTarget.slideUp(500);
        menuMainOpenBtn.show();
        menuMainCloseBtn.hide();
    });

    // sider close action
    siderCloseBtn.click(function(){
        sider.animate({left: "-100vw"});
        siderOpenBtn.show();
        siderCloseBtn.hide();
    });
    // menu-main sider ---------------------------------------- end
  
});

// scroll wheel  ---------------------------------------------- start
/*
$(window).scroll(function() {
    var distance = $(this).scrollTop();
    if ( distance > 100) {
        $('#header').slideUp(250);
    } else {
        $('#header').slideDown(250);
    }
});
*/
// scroll wheel ----------------------------------------------- end  
