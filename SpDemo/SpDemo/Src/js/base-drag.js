
//拖拽功能
/*拖拽流程：
    鼠标点击-元素选中，移动-鼠标离开，停止移动*/
//var oDiv = document.getElementById('login');
$().extend('drag', function () {

    //alert(arguments.length);
    var tags = arguments;
    for (var i = 0 ; i < this.elements.length; i++) {
        addEvent(this.elements[i], 'mousedown', function (e) {
            //preDef(e);//阻止默认行为  解决低版本火狐在空div拖拽时，无法拖动
            //e.preventDefault();//阻止默认行为
            //alert(trim(this.innerHTML).length);当前元素长度
            if (trim(this.innerHTML).length == 0) {
                e.preventDefault();//阻止默认行为
            }
            //var e = getEvent(e);
            //alert(e.clientX);//鼠标点击区域到视窗的边距
            //alert(e.clientY);
            //alert(oDiv.offsetLeft);//oDiv距离视窗的边距
            var _this = this;//this-oDiv
            var diffX = e.clientX - _this.offsetLeft;//物体和鼠标点击距离左边的差值
            var diffY = e.clientY - _this.offsetTop;
            var flag = false;//判断是否为拖拽点
            for (var i = 0; i < tags.length; i++) {
                if (e.target == tags[i]) {
                    flag = true;//只要有一个是true就立即返回
                    break;
                }
                else {
                    flag = false;
                    
                }
            }
            if (flag) {
                addEvent(document, 'mousemove', move);
                addEvent(document, 'mouseup', up);
            } else {
                removeEvent(document, 'mousemove', move);
                removeEvent(document, 'mouseup', up);
            }
           
            function move(e) {
                var left = e.clientX - diffX;
                var top = e.clientY - diffY;
                if (left < 0) {
                    left = 0;
                } else if (left > getInner().width - _this.offsetWidth) {
                    left = getInner().width - _this.offsetWidth;
                }
                //_this.offsetHeight -拖拽物体本身的高度
                if (top < 0) {
                    top = 0;
                } else if (top > getInner().height - _this.offsetHeight) {
                    top = getInner().height - _this.offsetHeight;
                }
                _this.style.left = left + 'px';//计算出物体左上角点坐标
                _this.style.top = top + 'px';
                //ie浏览器鼠标超出浏览器时 仍可触发事件  限制物体移动范围事件不会失效
                if (typeof _this.setCapture != 'undefined') {
                    _this.setCapture();//鼠标选中时（点击住）
                }
            }
           
            function up() {
                removeEvent(document, 'mousemove', move);
                removeEvent(document, 'mouseup', up);
                this.onmouseup = null;
                if (typeof _this.releaseCapture != 'undefined') {
                    _this.releaseCapture();
                }
            }
        })

    }
    return this;

})