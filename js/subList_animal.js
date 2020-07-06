function setSubList_animal(wdWidth) {
    if(wdWidth > 960){
        $('.typeList').click(function () {
            $(this).children('span').css('position','relative').animate({ top: '-15px' },100)
            $(this).children('img.list_right').css('display','none')
            $(this).children('.typeList_cont').slideDown(100)
            $(this).children('img.list_close').show(100)
        })
        $('img.list_close').click(function (event) {
            event.stopPropagation();
            $(this).siblings('span').animate({ top: '0px' },100)
            $(this).siblings('img.list_right').show(100)
            $(this).siblings('.typeList_cont').slideUp(100)
            $(this).hide(100)
        })
    }else{
        $('.typeList').click(function () {
            $(this).children('img.list_right2').toggleClass('sub_rotated')
            $(this).children('.typeList_cont').slideToggle(100)
        })
    }
}