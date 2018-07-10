window.onload = function () {
    //---------下拉框----------
    $('#header .member').hover(function () {
        $('#header .member').css('background', '#ddd');
        $('#header .icon-up-down').css('background', 'red');
        $('#header .member-list').show().animate({
            t: 30,
            step: 10,
            mul: {//菜单下拉展开
                o: 100,
                h:120
            }
        });
        
    }, function () {
        $('#header .member').css('background', '#f1f1f1');
        $('#header .icon-up-down').css('background', '#ddd');
        $('#header .member-list').animate({
            t: 30,
            step: 10,
            mul:{//菜单收缩
                o:0,
                h:0
            },
            fn: function () {
                $('#header .member-list').hide();
            }
        });
    });
    //---------下拉框----------
    //---------登录框----------
    var login = $('#login');
    var screen = $('#screen');
    login.center(350, 250).resize(function () {
        if (login.css('display') == 'block') {
            screen.lock();
        } 
    })
    $('.txt-login').click(function () {
        login.center(350, 250);//默认登录框出现时 居中
        login.show();
        screen.lock().animate({//遮罩锁屏 遮罩背景色变色
            attr: 'o',
            target: 40,
            t: 30,
            step:10
        });
    })
    $('.btn-close').click(function () {
        login.hide();
        screen.animate({//解锁
            attr: 'o',
            target: 0,
            t: 30,
            //step: 10,
            //fn: function () {
                
            //}
        });
        screen.unlock();
    });
    //形状动画变化
    //$("#test").click(function () {
    //    var _this = this;
    //    $(_this).animate({
    //        attr: 'w',
    //        target: 300,
    //        t: 30,
    //        step: 10,
    //        fn: function () {
    //            $(_this).animate({
    //                attr: 'h',
    //                target: 300,
    //                t: 30,
    //                step: 10,
    //                fn: function () {
    //                    $(_this).animate({
    //                        attr: 'o',
    //                        target: 30,
    //                        t: 30,
    //                        step: 10
    //                    })
    //                }
    //            })
    //        }
    //    })
    //})

    //动画列队形状变化,每个对象对应一个计时器
   
    //$('.test1').hover(function () {
    //    $(this).animate({
    //        attr: 'w',
    //        target: 300,
    //        t: 30,
    //        step: 10
    //    }),
    //    
    //}, function () {
    //    $(this).animate({
    //        attr: 'w',
    //        target: 100,
    //        t: 30,
    //        step: 10,
    //        fn: function () {

    //        }
    //    })

    //})
    
    //$('#test2').click(function () {
    //    //动画-变换字体大小
    //    //$(this).animate({
    //    //    attr: 'fontSize',
    //    //    target: 100
    //    //})
    //    $(this).animate({
    //        //单组动画
    //        t: 30,
    //        step: 10,
    //        attr: 'w',
    //        target: 500,
    //        //多组同步动画
    //        //mul参数是一个对象，只能有两种值：属性：目标量
    //        mul: {
    //            w: 300,//宽度变化
    //            h: 300,//高度变化
    //            o: 30,//透明度变化
    //            fontSize:40
    //        },
    //        fn: function () {
    //            //alert(this);
    //        }
            
    //    })
    //})

    //---------登录框----------
    /*-----------弹框锁屏-------------*/

    /*-----------弹框锁屏-------------*/

    /*-----------弹出框可拖拽-----------*/
    //多个可拖拽点
    login.drag($('#login h2').first(), $('#login .other').first());
    /*-----------弹出框可拖拽
    /*-----------滑动块-----------*/
    $('#share_contain').css('top', getScroll().top + (getInner().height - parseInt(getStyle($('#share_contain').first(), 'height'))) / 2 + 'px');
    //设置滚动条出现后的居中问题
    addEvent(window, 'scroll', function () {
        $('#share_contain').animate({
            attr: 'y',
            target: getScroll().top + (getInner().height - parseInt(getStyle($('#share_contain').first(), 'height'))) / 2
        })
        $('#share_contain').css('top', getScroll().top + (getInner().height - parseInt(getStyle($('#share_contain').first(), 'height'))) / 2 + 'px');
    })
    $('#share_contain').hover(function () {
        $(this).animate({
            attr: 'x',//向右滑出
            target:0//目标量 -211px--0
        })
    }, function () {
        $(this).animate({
            attr: 'x',
            target:-211
        })
    })
    
    /*-----------滚动条-----------*/

    /*-----------导航条-----------*/
    
    $("#nav .about li").hover(function () {
        var target = $(this).first().offsetLeft;
        $('#nav .nav-bg').animate({
            attr: 'x',
            target: target + 20,
            t: 30,
            step: 10,
            fn: function () {
                $("#nav .nav-ul-hover").animate({
                    attr: 'x',
                    target: -target
                });
               
            }
        });
    }, function () {
        $('#nav .nav-bg').animate({
            attr: 'x',
            target: 20,
            t: 30,
            step: 10,
            fn: function () {
                $("#nav .nav-ul-hover").animate({
                    attr: 'x',
                    target: 0
                });
            }
        });
        
    });



};
/*-----------事件绑定-----------*/

//$(function () {
//    //var box = document.getElementById('box');
//    //setInterval(function () {
//    //    box.style.left = getStyle(box, 'left') + 10 + 'px'

//    //}, 50);
//    $('#box').animate('left', 1, 50);
//})




