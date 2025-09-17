$(document).ready(function(){

    'use strict';

    // nav menu-main ---------------------------------------- start
    const navTarget = $('#stager').children('.stage-sider-left');
    const navOpenBtn = $('#header').find('.open');
    const navCloseBtn = $('#header').find('.close');
    
    navOpenBtn.click(function(){
        navTarget.animate({left: "0"});
        navCloseBtn.show();
        navOpenBtn.hide();
    });

    navCloseBtn.click(function(){
        navTarget.animate({left: "-100vw"});
        navOpenBtn.show();
        navCloseBtn.hide();
    });

    // nav menu-main ---------------------------------------- end



    // menu-tree ---------------------------------------------- start
    // menu-tree menu-title open & close
    const menuTitleClose = $('.menu-tree').find('.close');
    const menuTitleOpen = $('.menu-tree').find('.open');

    menuTitleOpen.click(function(){
        $(this).hide();
        $(this).siblings('.close').show();
        $(this).parent().next('.menu-tree').show();
        $(this).parent().parent().siblings('.menu-tree-title').children('.menu-tree').hide();
        $(this).parent().parent().siblings('.menu-tree-title').children('.container').children('.close').hide();
        $(this).parent().parent().siblings('.menu-tree-title').children('.container').children('.open').show();

    });

    menuTitleClose.click(function(){
        $(this).hide();
        $(this).siblings('.open').show();
        $(this).parent().next('.menu-tree').hide();
    });

    const itemActive = $('#menutree').find('.active');
    itemActive.parent().parents('.menu-tree').show();
    itemActive.parents().prev('.container').find('.open').hide();
    itemActive.parents().prev('.container').find('.close').show();

    // menu-tree ---------------------------------------------- end
  
});

// scroll wheel  ---------------------------------------------- start

// $(window).scroll(function() {
//     const distance = $(this).scrollTop();
    
//     if ( distance > 100) {
//         $('#header').hide();

//     } else {
//         $('#header').show();

//     }
// });

// scroll wheel ----------------------------------------------- end  


