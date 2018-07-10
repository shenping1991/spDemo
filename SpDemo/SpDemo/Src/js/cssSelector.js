//css封装
//window.onload = function () {
//    //$().getId('box').click(function () {
//    //    $().getId('box').css('color', 'green').css('font-size', '30px');
//    //    alert($(this).html());
//    //})
//    //$('.style-red').css('color', 'red');
//    //$('p').find('span').css('color', 'orange');
//    //$('div').find('span').css('font-size', '20px');
//    //$('p').find('.style-red').css('color', '#000');
//    //$('p').find('#txt_node').css('color', 'gray').css('font-size', '40px');
//    //$('p').find('.style-red').css('color', 'yellow');
//    //$('#box2 #p').css('color', 'green');
//    //$('#box2 p').css('color', 'green');
//    //$('p .txt-p').css('font-size', '40px');
//    $('p').css('background', '#ddd');
//    $('#box2 p').css('color', 'green');

//}

//浏览器检测
(function () {
    window.sys = {};
    var ua = navigator.userAgent.toLowerCase();
    //alert(ua);
    var s;//浏览器信息数组
    //各个浏览器
    /*if ((/trident\/([\d.]+)/).test(ua)) {
        s = ua.match(/trident\/([\d.]+)/);
        sys.ie = s[1];
    }
    if ((/firefox\/([\d.]+)/).test(ua)) {
        s = ua.match(/firefox\/([\d.]+)/);
        sys.firefox = s[1];
    }
    if ((/chrome\/([\d.]+)/).test(ua)) {
        s = ua.match(/chrome\/([\d.]+)/);
        sys.chrome = s[1];
    }
    if ((/Opera\/.^version\/([\d.]+)/).test(ua)) {
        s = ua.match(/Opera\/.^version\/([\d.]+)/);
        sys.opera = s[1];
    }
    if ((/version\/([\d.]+).*safari/).test(ua)) {
        s = ua.match(/version\/([\d.]+).*safari/);
        sys.safari = s[1];
    }*/
    //alert(window.opera.version());
    (s = ua.match(/trident\/([\d.]+)/))?sys.ie=s[1]:
    (s = ua.match(/firefox\/([\d.]+)/))?sys.firefox=s[1]:
    (s = ua.match(/chrome\/([\d.]+)/))?sys.chrome=s[1]:
    (s = ua.match(/Opera\/.^version\/([\d.]+)/))?sys.opera=s[1]:
    (s = ua.match(/version\/([\d.]+).*safari/))?sys.safari=s[1]:0 
})();
//alert(sys);
alert(sys.ie);
alert(sys.firefox);

