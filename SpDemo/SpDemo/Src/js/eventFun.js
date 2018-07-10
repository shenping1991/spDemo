window.onload = function () {
    var oButton = document.getElementById('btn_login');
    addEvent(oButton, 'click', fn1);
    addEvent(oButton, 'click', fn2);
    addEvent(oButton, 'click', fn3);
    removeEvent(oButton, 'click', fn1);

    var oa = document.getElementById('a_net');
    addEvent(oa, 'click', function (e) {
        e.preventDefault();//阻止默认事件
    })
}
function fn1(e) {
    alert('1'+ this.value + e.clientX);
}
function fn2(e) {
    alert('2' + this.value + e.clientX);
}
function fn3(e) {
    alert('3' + this.value + e.clientX);
}

$(function () {
    //$('#box').animate('left', 10, 500, 50);
    //$('#box').animate('left', -5, 0, 50);//向上向左运动负值
    //$('#box').animate('top',100, 10, 500);//向下

    //Math.ceil(-5.6);floor
    $('#btn_move').click(function () {
        $('#box').animate({
            //移动
            'attr': 'x',//'attr':'top'
            'start': 100,//起始值
            'step': 7,//步长
            'target': 400,//目标值
            'type': 0

            ////形状变化（宽高）
            //'attr': 'w',//'attr':'top'
            //'start': 100,//起始值
            ////'alter': 400,//增量
            //'step': 7,//步长
            //'target': 400,//目标值
            ////'speed':10,//运动速率
            //'type':0

            //渐变
            //'attr': 'o',//'attr':'top'
            //'start':100,
            //'step': 7,
            //'target': 30
        });
    });
});