$(document).ready(function(){
    $('.li_box').click(function () {
        console.log($(this).index()) 
        if($(this).index() == '0'){
            $('.subMenu').slideToggle(200)
            $(this).children('li').find('p').toggleClass('rotated')
        }
    })
    $('.sub_menu').click(function(event){
        event.stopPropagation();
        $(this).siblings().removeClass('subChecked');
        $(this).addClass("subChecked");

        if($(this).index() == '0'){
        }else if($(this).index() == '1'){
        }else if($(this).index() == '2'){
        }else if($(this).index() == '3'){
        }
    })
})