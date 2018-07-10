

////5创建类 创建数组存储保存节点及节点数据
//window.onload = function () {
//    //var base = new Base();
//    //alert(base.getId('box').elemnets.length);
//    //base.getId('box').css('color', 'red').css('backgroundColor', 'black');
//    //base.getTagName('p').css('color', 'green').html('标题');
//    //$().getId('box').css('color', 'red').css('backgroundColor', 'black');
//    //$().getTagName('p').css('color', 'green').html('标题');
//    //$().getTagName('input[type="radio"]').click(function () { alert("hello"); });
//    //$().getTagName('p').html($().getId('box').css('font-size'));
//    //$().getName('sex').html("我变了");
//    $().getClass('red').css('color', 'red');//设置所有class
//    $().getClass('red').getElement(1).css('color', 'yellow');//某个class
//    //区域化class
//    $().getClass('red','b').getElement(2).css('color', 'green');
//    $().getId('btnAdd').addClass('txt-style').addClass('bg-style').addClass('bg-style').removeClass('txt-style');//添加多个不重复class
//    //添加link或style的css规则
//    $().addRuleOne(0);//单个
//    $().addRule(0, 'body', 'font-size:20px', 0);//传参
//    $().removeRule(0);//按行数删除linkstyle
//}

/*function addDomLoaded(fn) {
    if (document.addEventListener) {//w3c
        addEvent(document, 'DOMContentLoaded', function () {
            fn();
            removeEvent(document, 'DOMContentLoaded', arguments.callee);
        })
    } else {
        var timer = null;
        timer = setInterval(function () {
            try {
                document.documentElement.doScroll('left');
                fn();
            } catch (e) {}

        })
        
    }
}*/
addDomLoaded(function () {
    var box = document.getElementById('box2');
    alert(box.innerHTML);
});

$(function () {
    alert(document.body);
})
