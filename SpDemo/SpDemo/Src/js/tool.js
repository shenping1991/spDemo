
//功能库


//浏览器检测
(function () {
    window.sys = {};//使外部可以访问，保存浏览器信息对象
    var ua = navigator.userAgent.toLowerCase();//获取浏览器信息字符串
    var s;//浏览器信息数组
    (s = ua.match(/trident\/([\d.]+)/)) ? sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
    (s = ua.match(/Opera\/.^version\/([\d.]+)/)) ? sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
    if (/webkit/.test(ua)) sys.webkit = ua.match(/webkit\/([\d.]+)/)[1];
})();

//DOM加载
function addDomLoaded(fn) {

    var isReady = false;
    var timer = null;
    function doReady(fn) {
        if (timer) clearInterval(timer);
        if (isReady) return;
        isReady = true;
        fn();
    }
    if ((sys.opera && sys.opera < 9) || (sys.firefox && sys.firefox < 3) || (sys.webkit && sys.webkit < 525)) {

        //方法一
        //timer = setInterval(function () {
        //    if(/loaded|complete/.test(document.readyState)){//loaded部分加载
        //        doReady(fn);
        //    }
        //}, 1);
        //方法二
        timer = setInterval(function () {
            if (document && document.getElementById && document.getElementsByTagName && document.getElementsByClassName) {
                doReady();
            }
        }, 1);
    } else if (document.addEventListener) {
        addEvent(document, 'DOMContentLoaded', function () {
            fn();
            removeEvent(document, 'DOMContentLoaded', arguments.callee);
        });
    } else if (sys.ie && sys.ie < 9) {
        var timer = null;
        timer = setInterval(function () {
            try {
                document.documentElement.doScroll('left');
                doReady();

            } catch (e) { };
        }, 1);
    }

}


//跨浏览器事件绑定
addEvent.ID = 1;//全局变量 为每个函数事件分配一个ID addEvent属性
function addEvent(obj,type,fn) {
    if (typeof obj.addEventListener != 'undefined') {
        obj.addEventListener(type, fn, false);//w3c

    } else {
        //创建一个存放事件的哈希表
        
        if (!obj.events) obj.events = {};
        //创建存放事件处理函数的数组
        if (!obj.events[type]) {
            obj.events[type] = [];
            //把第一次事件处理函数存储到第一个位置上
            if(obj.events[type]) obj.events[type][0] = fn;
        } else {
            //相同函数屏蔽 
            if (addEvent.equal(obj.events[type],fn)) return false;
        }
        //第二次
        obj.events[type][addEvent.ID++] = fn;
        //执行函数
        obj['on' + type] = addEvent.exec;
    }
}
//执行事件处理函数--依顺序执行
addEvent.exec = function (event) {
    var e = event || addEvent.fixEvent( window.event);
    var es = this.events[e.type];
    for (var i in es) {
        es[i].call(this, e);
    }
}

//相同函数屏蔽
addEvent.equal = function (es, fn) {
    for (var i in es) {
        if (es[i] == fn) return true;
    }
    return false;
}
//把ie常用的event对象配对到w3c

addEvent.fixEvent = function (event) {
    event.preventDefault=addEvent.fixEvent.preventDefault;
    event.stopPropagation = addEvent.fixEvent.stopPropagation;
    event.target = event.srcElement;
    return event;
}
//ie阻止默认行为
addEvent.fixEvent.preventDefault = function () {
    e.returnValue=false;
}
//ie取消冒泡
addEvent.fixEvent.stopPropagation=function(){
    this.cancelBubble=true;
}

//跨浏览器事件删除
function removeEvent(obj, type, fn) {
    if (typeof obj.removeEventListener != 'undefined') {
        obj.removeEventListener(type, fn, false);
    } else {
        if (obj.events) {
            for(var i in obj.events[type]){
                if (obj.events[type][i] == fn) {
                    delete obj.events[type][i];
                }
            }
        }
        
    }
}
//alert(typeof(window.innerWidth));获取返回值类型浏览器适配
//低版本IE返回undefined  其他浏览器返回number
//跨浏览器获取视窗大小
function getInner() {
    if (typeof window.innerWidth != 'undefined') {
        return{
            width: window.innerWidth,
            height: window.innerHeight
        }  
    }
    else {
        return{
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        } 
    }
}

//跨浏览器获取滚动条位置
function getScroll() {
    return {
        top: document.documentElement.scrollTop || document.body.scrollTop,
        left:document.documentElement.scrollLeft || document.body.scrollLeft
    }
}

//跨浏览器获取style
function getStyle(element, attr) {
    var value;
    if (typeof window.getComputedStyle != 'undefined') {
        value=window.getComputedStyle(element, null)[attr];
    } else if (typeof element.currentStyle != 'undefined') {
        value= element.currentStyle[attr];
    }
    return value;
}
//判断class是否存在
//this.elements[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
function hasClass(element, className) {
    return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

//跨浏览器添加link style规则
//sheet 样式表 0-第一个样式表，position 样式文件中位置 0-第一行
function insertRule(sheet, selectorText, cssText, position) {
    if (typeof sheet.insertRule != 'undefined') {//w3c
        sheet.insertRule(selectorText + '{' + cssText + '}', position);
    }
    else if (typeof sheet.addRule != 'undefined') {//ie
        sheet.addRule(selectorText, cssText, position);
    }
}

//跨浏览器移除link style规则
function deleteRule(sheet, index) {
    if (typeof sheet.deleteRule != 'undefined') {
        sheet.deleteRule(index);
    }
    else if (typeof sheet.removeRule != 'undefined') {
        sheet.removeRule(index);
    }
}

//获取event对象
function getEvent(event) {
    return event || window.event;//ie返回window.event
}
//阻止默认行为
function preDef(event) {
    var e = getEvent(event);
    if (typeof e.preventDefault != 'undefined') {//w3c
        e.preventDefault();
    } else {//ie
        e.returnValue = flase;
    }
}

//删除左右空格
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}
//滚动条清零
function scrollTop() {
    
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
}