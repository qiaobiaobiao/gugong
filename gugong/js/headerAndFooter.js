
// 鼠标进入导航栏事件
$('.nav_main li').mouseenter(function(){
    var index = $(this).index();
    if(index == 0){
        // 鼠标放在首页上没有动画
        $('.nav_child').removeClass('now');
    }else{
        // 添加二级导航展开动画
        $('.nav_child').addClass('now');

        // 鼠标进入当前li对应的二级导航显示其他关闭
        $('.child').eq(index-1).find('ul')
        .css({'display':'block'})
        .parent().siblings().find('ul')
        .css({'display':'none'});

        // 鼠标进入当前li对应的小三角显示其他的关闭
        $('.nav_main ul b').eq(index)
        .css({'visibility': 'visible' })
        .parent().siblings().find('b')
        .css({'visibility': 'hidden'});
       
    }    
});
$('.nav_main li').mouseleave(function(){
   
});
// 鼠标离开导航栏事件
$('.nav_child,body').mouseleave(function(){
    var index = $(this).index();
    $('.nav_child').removeClass('now');
  
    $('.child ul').eq(index-1).css({
        'display':'none'
    })
    $('.nav_main ul b').css({
        'visibility':'hidden'
    })    
});


// 鼠标进入工具栏事件
$('.login').mouseenter(function(){  
    $('.loginbox').fadeIn(300);
});
$('.login').mouseleave(function(){  
    $('.loginbox ').css({
        'display':'none'
    })
});
$('.lang').mouseenter(function(){  
    $('.language').fadeIn(300);
});
$('.lang').mouseleave(function(){  
    $('.language ').css({
        'display':'none'
    })
});
$('.scbtn').click(function(){
    $('.search').fadeIn(300);
   var val =  $('search input').val()
    if(val != '搜索关键词...'){
        $('.search input').val('搜索关键词...');
    }
    return false;
});
$('.search input').click(function(){
    $(this).val('');
    return false;
});
$('body').click(function () {  
    $('.search ').css({
        'display':'none'
    })      
});

// 鼠标进入二维码按钮
$('.code2b a').mouseenter(function(){    
    $(this).next().css({
       'display':'block'
       
    })    
})
$('.code2b a').mouseleave(function(){    
    $(this).next().css({
       'display':'none'
       
    })    
})
$('.btns a').click(function(){
    $('.proposal').addClass('now2');
});
$('.proposal').mouseleave(function(){   
    $('.proposal').removeClass('now2');
});
