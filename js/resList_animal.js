function setResList_animal(wdWidth) {
    // var wdWidth = $(window).width();
    if(wdWidth > 960){
        var canClick = true;//防止重复点击
        $('.typeList').click(function () {
            console.log($(this))
            if(canClick){
                if($(this).hasClass('typeList_bottom')){
                    console.log('up')
                    var txt = $(this).children('.tpList_box').find('p.tplist_txt').text()//获取详情text
                    if(txt != '' && txt != null){
                        $(this).children('.tpList_box').find('p.tplist_tit').append(`<span>-${txt}</span>`)//如果有text，塞到tit中
                        $(this).children('.tpList_box').find('p.tplist_txt').hide()
                        
                    }
                    
                    $(this).children('.tpList_box').css({
                        bottom:'0',
                        top: 'auto',
                        transform:'none'
                    })
                    // $(this).children('.tpList_box').find('p.tplist_tit').css({'position':'absolute','display':'inline'}).animate({ bottom: '0' },100)
                    $(this).children('img.list_right').css('display','none')
                    let titHeight = $(this).children('.tpList_box').find('p.tplist_tit').outerHeight();
                    $(this).children('.typeList_cont').css({ bottom: titHeight, top: 'auto' }).slideDown(100)
                    $(this).children('img.list_close').show(100)
                    canClick = false
                }else{
                    console.log('down')
                    var txt = $(this).children('.tpList_box').find('p.tplist_txt').text()//获取详情text
                    if(txt != '' && txt != null){
                        $(this).children('.tpList_box').find('p.tplist_tit').append(`<span>-${txt}</span>`)//如果有text，塞到tit中
                        $(this).children('.tpList_box').find('p.tplist_txt').hide()
                        
                    }
                    
                    $(this).children('.tpList_box').css({
                        top:'0',
                        bottom:'auto',
                        transform:'none'
                    })
                    // $(this).children('.tpList_box').find('p.tplist_tit').css({'position':'absolute','display':'inline'}).animate({ top: '0' },100)
                    $(this).children('img.list_right').css('display','none')
                    let titHeight = $(this).children('.tpList_box').find('p.tplist_tit').outerHeight();
                    $(this).children('.typeList_cont').css({ top: titHeight }).slideDown(100)
                    $(this).children('img.list_close').show(100)
                }
                
                canClick = false
            }
            
        })
        $('img.list_close').click(function (event) {
            event.stopPropagation();
            $(this).siblings('.tpList_box').children('p.tplist_tit').find('span').remove()
            $(this).siblings('.tpList_box').find('p.tplist_txt').show()
            $(this).siblings('.tpList_box').css({
                top:'50%',
                bottom: 'auto',
                transform:'translateY(-50%)'
            })
            $(this).siblings('.tpList_box').find('p.tplist_tit').css({'position':'relative'}).animate({ top: '0' },100)
            $(this).siblings('img.list_right').show(100)
            $(this).siblings('.typeList_cont').slideUp(100)
            $(this).hide(100)
            canClick = true
        })
    }else{
            $('.typeList').click(function () {
                if(!$(this).find('.typeList_cont').is(':hidden')){
                    var self = $(this)
                    self.children('.typeList_cont').slideUp(100)
                    var animailTimer = setTimeout(function () {
                        self.children('.tpList_box').removeClass('tpList_box_statck')
                        self.children('img.list_right2').removeClass('res_rotated')
                    },100)
                }else{
                    var self = $(this)
                    $('.typeList').children('.typeList_cont').slideUp(100);
                    var animailTimer = setTimeout(function () {
                        $('.typeList').children('.tpList_box').removeClass('tpList_box_statck')
                        $('.typeList').children('img.list_right2').removeClass('res_rotated')
                        self.children('.tpList_box').addClass('tpList_box_statck')
                        self.children('img.list_right2').addClass('res_rotated')
                        self.children('.typeList_cont').slideDown(100)
                    },100)
                    
                }
                // $(this).children('.tpList_box').toggleClass('tpList_box_statck')
                // $(this).children('img.list_right2').toggleClass('res_rotated')
                // $(this).children('.typeList_cont').slideToggle(100)
            })
        }
}