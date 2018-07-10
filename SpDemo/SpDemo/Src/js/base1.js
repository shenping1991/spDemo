/*//1函数式封装
function $(id) {
    return document.getElementById(id);
}
//2对象式
var Base = {
    $:function(id){
        return document.getElementById(id);
    },
    $$:function(name){
        return docment.getElementByName(name);
    },
    $$$: function (tag) {
        return docment.getElementByTagName(tag);
    }
}
//3对象式  方法名富有含义
var Base = {
    getId: function (id) {
        return document.getElementById(id);
    },
    getName: function (name) {
        return docment.getElementByName(name);
    },
    getTagName: function (tag) {
        return docment.getElementByTagName(tag);
    }
}*/

//4创建类
/*function Base() {
    this.getId = function (id) {
        return document.getElementById(id);
    }
}*/
/*---------------------Base类封装-----------------------*/
//5创建类 创建数组存储保存节点及节点数据
//调用
var $ = function () {
    return new Base();//每次调用实例化一个类
}
//类库
function Base() {
    //数组
    this.elements = [];
}

//获取ID，单个节点
Base.prototype.getId = function (id) {
    this.elements.push(document.getElementById(id));
    return this;
};
//获取元素节点
Base.prototype.getTagName = function (tag) {
    var tags = document.getElementsByTagName(tag);
    for (var i = 0; i < tags.length; i++) {
        this.elements.push(tags[i]);
    }
    return this;
};

Base.prototype.getName = function (strname) {
    var all = document.getElementsByTagName('*');//获取所有节点数组
    for (var i = 0; i < all.length; i++) {
        if (all[i].name == strname) {//判断name是否与传入name相等
            this.elements.push(all[i]);
        }
    }
    return this;
};
////获取全部class
//Base.prototype.getClass = function (className) {
//    var all = document.getElementsByTagName('*');//获取所有节点数组
//    for (var i = 0; i < all.length; i++) {
//        if (all[i].className == className) {//判断当前class是否与传入classname相同
//            this.elements.push(all[i]);
//        }
//    }
//    return this;
//}
//获取全部class区域化
Base.prototype.getClass = function (className, idName) {
    var node = null;
    if (arguments.length == 2) {
        node = document.getElementById(idName);
    }
    else {
        node = document;
    }
    var all = node.getElementsByTagName('*');//获取所有节点数组
    for (var i = 0; i < all.length; i++) {
        if (all[i].className == className) {//判断当前class是否与传入classname相同
            this.elements.push(all[i]);
        }
    }
    return this;
}
//获取某个class
Base.prototype.getElement = function (num) {
    var element = this.elements[num];
    this.elements = [];
    this.elements[0] = element;
    return this;
}
//设置CSS
Base.prototype.css = function (attr, value) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 1) {
            //if (typeof window.getComputedStyle != 'undefined') {//w3c
            //    return window.getComputedStyle(this.elements[i], null)[attr];
            //} else if (typeof this.elements[i].currentStyle != 'undefined') {
            //    return this.elements[i].currentStyle[attr];
            //}
            //提取公共部分
            return getStyle(this.elements[i], attr);

        }
        this.elements[i].style[attr] = value;
    }
    return this;
}

//添加class
Base.prototype.addClass = function (className) {
    for (var i = 0; i < this.elements.length; i++) {

        if (!hasClass(this.elements[i], className)) {
            this.elements[i].className += ' ' + className;
        }
        //提取公共部分 判断hasclass
    }
    return this;
}
//移除class
Base.prototype.removeClass = function (className) {
    for (var i = 0; i < this.elements.length; i++) {
        if (hasClass(this.elements[i], className)) {
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), '');
        }
    }
    return this;
}
//添加link或style的css规则
Base.prototype.addRuleOne = function (num) {
    var sheet = document.styleSheets[num];

    if (typeof sheet.insertRule != 'undefined') {//w3c
        sheet.insertRule('body{background:red}', 0);
    }
    else if (typeof sheet.addRule != 'undefined') {//ie
        sheet.addRule('body', 'background:red', 0);
    }
    return this;

}
//移除link或style的css规则
Base.prototype.removeRule = function (num, index) {
    var sheet = document.styleSheets[num];
    deleteRule(sheet, index);
    return this;
}
//添加link或style的css规则 传参
Base.prototype.addRule = function (num, selectorText, cssText, position) {
    var sheet = document.styleSheets[num];
    insertRule(sheet, selectorText, cssText, position);


}
//设置HTML
Base.prototype.html = function (str) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 0) {
            return this.elements[i].innerHTML;
        }
        this.elements[i].innerHTML = str;
    }
    return this;
}
//触发click事件
Base.prototype.click = function (fn) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].onclick = fn;
    }
    return this;
}
/*---------------------Base类封装-----------------------*/

/*---------------------control类封装-----------------------*/
//设置鼠标移入移除事件
Base.prototype.hover = function (over, out) {
    for (var i = 0; i < this.elements.length; i++) {
        //this.elements[i].onmouseover = over;
        //this.elements[i].onmouseout = out;
        addEvent(this.elements[i], 'mouseover', over);
        addEvent(this.elements[i], 'mouseout', out);

    }
    return this;
}
//设置显示
Base.prototype.show = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = 'block';
    }
    return this;
}
//设置隐藏
Base.prototype.hide = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = 'none';
    }
    return this;
}

//弹出登录框

//设置物体居中显示
Base.prototype.center = function (width, height) {
    var top = (getInner().height - height) / 2;
    var left = (getInner().width - width) / 2;
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.top = top + 'px';
        this.elements[i].style.left = left + 'px';
    }
    return this;
}
//触发浏览器窗口事件
Base.prototype.resize = function (fn) {
    for (var i = 0 ; i < this.elements.length; i++) {
        var element = this.elements[i];
        //window.onresize = function () {
        //    fn();//浏览器窗口大小改变
        //    //当拖拽物体拖拽至右下角 缩放屏幕时看不见 该物体时 给它定义到可视范围右下角
        //    if (element.offsetLeft > getInner().width - element.offsetWidth) {
        //        element.style.left = getInner().width - element.offsetWidth + 'px';
        //    }
        //    if (element.offsetTop > getInner().height - element.offsetHeight) {
        //        element.style.top = getInner().height - element.offsetHeight + 'px';
        //    }
        //}
        addEvent(window, 'resize', function () {

            fn();//浏览器窗口大小改变
            //当拖拽物体拖拽至右下角 缩放屏幕时看不见 该物体时 给它定义到可视范围右下角
            if (element.offsetLeft > getInner().width - element.offsetWidth) {
                element.style.left = getInner().width - element.offsetWidth + 'px';
            }
            if (element.offsetTop > getInner().height - element.offsetHeight) {
                element.style.top = getInner().height - element.offsetHeight + 'px';
            }


        });
    }

    return this;
}
//锁屏
Base.prototype.lock = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.width = getInner().width + 'px';
        this.elements[i].style.height = getInner().height + 'px';
        this.elements[i].style.display = 'block';
        document.documentElement.style.overflow = 'hidden';//解决滚动条出现时 拖拽物体 屏幕白边
    }
    return this;
}
//解锁
Base.prototype.unlock = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = 'none';
        document.documentElement.style.overflow = 'auto';//解决滚动条出现时 拖拽物体 屏幕白边
    }
    return this;
}
//拖拽功能
/*拖拽流程：
    鼠标点击-元素选中，移动-鼠标离开，停止移动*/
//var oDiv = document.getElementById('login');
Base.prototype.drag = function () {
    for (var i = 0 ; i < this.elements.length; i++) {
        this.elements[i].onmousedown = function (e) {
            //preDef(e);//阻止默认行为  解决低版本火狐在空div拖拽时，无法拖动
            e.preventDefault();
            //var e = getEvent(e);
            //alert(e.clientX);//鼠标点击区域到视窗的边距
            //alert(e.clientY);
            //alert(oDiv.offsetLeft);//oDiv距离视窗的边距
            var _this = this;//this-oDiv
            var diffX = e.clientX - _this.offsetLeft;//物体和鼠标点击距离左边的差值
            var diffY = e.clientY - _this.offsetTop;
            //ie浏览器鼠标超出浏览器时 仍可触发事件  限制物体移动范围事件不会失效
            if (typeof _this.setCapture != 'undefined') {
                _this.setCapture();//鼠标选中时（点击住）
            }
            document.onmousemove = function (e) {
                //var e = getEvent(e);
                var left = e.clientX - diffX;
                var top = e.clientY - diffY;
                //限制物体移动范围
                if (left < 0) {
                    left = 0;
                } else if (left > getInner().width - _this.offsetWidth) {
                    left = getInner().width - _this.offsetWidth;
                }
                //_this.offsetHeight -拖拽物体本身的高度
                if (top < 0) {
                    top = 0;
                } else if (top > getInner().height - _this.offsetHeight) {
                    top = getInner().height - _this, offsetHeight;

                }

                _this.style.left = left + 'px';//计算出物体左上角点坐标
                _this.style.top = top + 'px';
            }
            document.onmouseup = function () {
                this.onmousemove = null;//this-document
                this.onmouseup = null;
                if (typeof _this.releaseCapture != 'undefined') {
                    _this.releaseCapture();
                }
            }
        }
    }
    return this;
}

/*---------------------control类封装-----------------------*/

