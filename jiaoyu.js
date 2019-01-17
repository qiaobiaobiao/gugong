


// 获取花瓶
var huaping = document.querySelector('.xiangqing1 .huaping');

// 获取木屋
var muwu = document.querySelector('.xiangqing1 .nuwu');

// 获取娃娃
var wawa = document.querySelector('.tiyan .wawa');

// 获取鼎
var ding = document.querySelector('.xiangqing1 .ding');

// 获取手链
var shoulian = document.querySelector('.xiangqing2 .shoulian');

// 获取玉溪
var yuxi = document.querySelector('.xiangqing2 .yuxi');

// 获取如意
var ruyi = document.querySelector('.xiangqing2 .ruyi');

// 获取玩偶
var wano = document.querySelector('.xiangqing2 .wano');
//滚动过程中如果卷起的距离超过多少，就会显示
// window.onscroll = function () {
//     // 卷起的距离
//     var val = document.body.scrollTop || document.documentElement.scrollTop;

// console.log(val);
// 当鼠标移动到1100时

$(window).scroll(function () {
    // 获取页面卷去的间距
    var val = $(window).scrollTop();



    // 花瓶
    if (val >= 1100) {
        // 自定义向移动
        $(huaping).animate({
            left: -30,
        }, 1000, 'linear');
        // 淡出显示
        $(huaping).fadeIn(1500, 'ease');
        // 改变透明效果
        $(huaping).css('opacity', 1);

    };
    // 木屋
    if (val >= 1900) {
        // 自定义向移动
        $(muwu).animate({
            left: -50,
        }, 1000, 'linear');
        // 淡出显示
        $(muwu).fadeIn(1500, 'ease');
        // 改变透明效果
        $(muwu).css('opacity', 1);
    };

    // 娃娃
    if (val >= 2500) {
        // 自定义向移动
        $(wawa).animate({
            left: -10,
        }, 1000, 'linear');
        // 淡出显示
        $(wawa).fadeIn(1500, 'ease');
        // 改变透明效果
        $(wawa).css('opacity', 1);
    };

    // 鼎 
    if (val >= 2150) {
        $(ding).animate({
            width: 384,
            height: 400,
            right: -60,
        }, 2000, 'linear');
        // 淡出显示
        $(ding).fadeIn(2000, 'ease');
        // 改变透明效果
        $(ding).css('opacity', 1);

    }

    // 吊珠
    if (val >= 1100) {
        // 自定义向移动
        $(shoulian).animate({
            left: -30,
        }, 1000, 'linear');
        // 淡出显示
        $(shoulian).fadeIn(1500, 'ease');
        // 改变透明效果
        $(shoulian).css('opacity', 1);

    }
    // 玉溪
    if (val >= 1400) {
        // 自定义向移动
        $(yuxi).animate({
            top: 440,
        }, 1000, 'linear');
        // 淡出显示
        $(yuxi).fadeIn(1500, 'ease');
        // 改变透明效果
        $(yuxi).css('opacity', 1);

    }

    // 如意
    if (val >= 1900) {
        // 自定义向移动
        $(ruyi).animate({
            left: 10,
        }, 1000, 'linear');
        // 淡出显示
        $(ruyi).fadeIn(1500, 'ease');
        // 改变透明效果
        $(ruyi).css('opacity', 1);
    };

    // 玩偶
    if (val > 2150) {
        $(wano).animate({
            width: 384,
            height: 400,

        }, 2000, 'linear');
        // 淡出显示
        $(wano).fadeIn(2000, 'ease');
        // 改变透明效果
        $(wano).css('opacity', 1);
    }
});

// 设置导航跳转
$('.child li').click(function () {
    var index = $(this).index();
    var a = $('.louceng').eq(index).offset().top;

    //    动画
    $('html,body').animate({
        scrollTop: a
    }, 300);
});




// 轮播
// 点击左侧按钮时
$('.qiehuan .zuo').click(function () {

    $('.xiangqing1').toggleClass('add');
    $('.xiangqing2').toggleClass('add');
    $('.qiehuan .zuoyuan').toggleClass('bian');
    $('.qiehuan .youyuan').toggleClass('bian');


})

// 点击右侧按钮时
$('.qiehuan .you').click(function () {
    $('.xiangqing1').toggleClass('add');
    $('.xiangqing2').toggleClass('add');
    $('.qiehuan .zuoyuan').toggleClass('bian');
    $('.qiehuan .youyuan').toggleClass('bian');

})
// 自动轮播
var zidonglunbo = setInterval(function () {

    $('.xiangqing1').toggleClass('add');
    $('.xiangqing2').toggleClass('add');
    $('.qiehuan .zuoyuan').toggleClass('bian');
    $('.qiehuan .youyuan').toggleClass('bian');
}, 3000);

// 鼠标离开继续自动轮播
var zidonglunbo

// 鼠标进入停止自动
$('.lunbo').mouseenter(function () {
    clearInterval(zidonglunbo);
});

$('.lunbo').mouseleave(function () {
    zidonglunbo = setInterval(function () {

        $('.xiangqing1').toggleClass('add');
        $('.xiangqing2').toggleClass('add');
        $('.qiehuan .zuoyuan').toggleClass('bian');
        $('.qiehuan .youyuan').toggleClass('bian');
    }, 3000);
})



