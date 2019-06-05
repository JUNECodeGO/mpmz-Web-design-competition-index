$(function(){
    $('#container').fullpage({
        verticalCentered:false,
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.section2').find('.circle1').delay(100).animate({
                    left: '81%'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.circle2').delay(200).animate({
                    left: '7%'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.circle3').delay(400).animate({
                    opacity: '1'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.circle4').delay(500).animate({
                    opacity: '1'
                }, 1500, 'easeOutExpo');
            }
            if(index == 4){
                $('.section4').find('.right-top').delay(100).animate({
                    right:'0'
                }, 1500, 'easeOutExpo');
                $('.section4').find('.right-bottom').delay(200).animate({
                    right:'0'
                }, 1500, 'easeOutExpo');
            }
        },
    });
    $('.sub-header').find('.header-pic').on('mouseenter',function () {
        $('.sub-header').find('.header-pic').find('.more-mes').fadeIn()
    });
    $('.sub-header').find('.header-pic').on('mouseleave',function () {
        $('.sub-header').find('.header-pic').find('.more-mes').fadeOut()
    });
    $('.sub-bottom').find('.header-pic').on('mouseenter',function () {
        $('.sub-bottomr').find('.header-pic').find('.more-mes').fadeIn()
    });
    $('.sub-bottom').find('.header-pic').on('mouseleave',function () {
        $('.ssub-bottom').find('.header-pic').find('.more-mes').fadeOut()
    });
    $('.middle-left').find('.header-pic').on('mouseenter',function () {
        $('.middle-left').find('.header-pic').find('.more-mes').fadeIn()
    });
    $('.middle-left').find('.header-pic').on('mouseleave',function () {
        $('.middle-left').find('.header-pic').find('.more-mes').fadeOut()
    });
    $('.middle-right').find('.header-pic').on('mouseenter',function () {
        $('.middle-right').find('.header-pic').find('.more-mes').fadeIn()
    });
    $('.middle-right').find('.header-pic').on('mouseleave',function () {
        $('.middle-right').find('.header-pic').find('.more-mes').fadeOut()
    });
    $('.sub-bottom').find('.header-pic').on('mouseenter',function () {
        $('.sub-bottom').find('.header-pic').find('.more-mes').fadeIn()
    });
    $('.sub-bottom').find('.header-pic').on('mouseleave',function () {
        $('.sub-bottom').find('.header-pic').find('.more-mes').fadeOut()
    })

});

// $(function(){
//     $('.container').fullpage({
//         sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
//         afterLoad: function(anchorLink, index){
//             if(index == 2){
//                 $('.section2').find('p').delay(500).animate({
//                     left: '0'
//                 }, 1500, 'easeOutExpo');
//             }
//             if(index == 3){
//                 $('.section3').find('p').delay(500).animate({
//                     bottom: '0'
//                 }, 1500, 'easeOutExpo');
//             }
//             if(index == 4){
//                 $('.section4').find('p').fadeIn(2000);
//             }
//         },
//         onLeave: function(index, direction){
//             if(index == '2'){
//                 $('.section2').find('p').delay(500).animate({
//                     left: '-120%'
//                 }, 1500, 'easeOutExpo');
//             }
//             if(index == '3'){
//                 $('.section3').find('p').delay(500).animate({
//                     bottom: '-120%'
//                 }, 1500, 'easeOutExpo');
//             }
//             if(index == '4'){
//                 $('.section4').find('p').fadeOut(2000);
//             }
//         }
//     });
// });
