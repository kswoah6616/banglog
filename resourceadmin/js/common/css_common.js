$(function(){

    //아코디언 버튼 이벤트
    $('.accordion_btn').on('click', function(e){
        $('.accordion_btn').removeClass('on');
        $(this).addClass('on');
        $(this).parent().find('.smenu').show();
    })

});