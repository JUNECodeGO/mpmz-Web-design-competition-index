$(function(){
    $('#container2').fullpage({
        verticalCentered:false,
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.section2').find('.cloth-left').delay(100).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
            }
            if(index == 4){
                $('.section4').find('.cloth-left').delay(100).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
            }
            if(index == 6){
                $('.section6').find('.cloth-left').delay(100).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
            }
            if(index == 7){
                $('.section7').find('.pic').delay(100).animate({
                    right: '-188'
                }, 1500, 'easeOutExpo');
            }

        }
    });

});