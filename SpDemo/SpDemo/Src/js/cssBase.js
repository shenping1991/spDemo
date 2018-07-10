
/*---------------------Base类封装-----------------------*/
//5创建类 创建数组存储保存节点及节点数据
//调用
var $ = function (args) {
    return new Base(args);//每次调用实例化一个类
}
//类库
function Base(args) {
    //数组
    this.elements = [];//保存节点
    if (typeof args == 'string') {
        if (args.indexOf('') != -1) {//$('#a .b span')有空格
            //css模拟
            var elements = args.split(' ');//把节点拆开分别存储到数组
            var childElements = [];//存放临时节点对象的数组,避免覆盖之前的elements
            var node = [];//存放父节点 eg:#a
            for (var i = 0; i < elements.length; i++) {
                if (node.length == 0) {
                    node.push(document);
                }
                switch (elements[i].charAt(0)) {
                    case '#':
                        childElements = [];//清理临时节点，以便父节点失效，子节点有效 #a变范围实际选中 .b
                        childElements.push(this.getId(elements[i].substring(1)));
                        node = childElements;//保存父节点以便清理
                        break;
                    case '.':
                        childElements = [];
                        for (var j = 0; j < node.length; j++) {
                            var temps = this.getClass(elements[i].substring(1), node[j]);//tag parentnode
                            for (var k = 0; k < temps.length; k++) {
                                childElements.push(temps[k]);
                            }
                        }
                        node = childElements;
                        break;
                    default://tagName
                        childElements = [];
                        for (var j = 0; j < node.length; j++) {
                            var temps=this.getTagName(elements[i], node[j]);//tag parentnode
                            for(var k=0;k<temps.length;k++){
                                childElements.push(temps[k]);
                            }
                        }
                        node = childElements;   
                }
            }
            this.elements = childElements;
        } else {//无空格 只有一个元素 $('p')
            //find模拟
            switch (args.charAt(0)) {
                case '#':
                    this.elements.push(this.getId(args.substring(1)));//去除id #号
                    break;
                case '.':
                    this.elements = this.getClass(args.substring(1));//去除class .
                    break;
                default://tagName
                    //this.getTagName(args);
                    this.elements = this.getTagName(args);
            }
        } 
    } else if (typeof args == 'object') {
        if (args != undefined) {
            this.elements[0] = args;
        }
    } else if (typeof args == 'function') {
        this.ready(args);
    }
}
//addDomLoaded
Base.prototype.ready = function (fn) {
    addDomLoaded(fn);
}

//获取ID，单个节点
Base.prototype.getId = function (id) {
    return document.getElementById(id);
};
//获取元素节点
//Base.prototype.getTagName = function (tag) {
//    var tags = document.getElementsByTagName(tag);
//    for (var i = 0; i < tags.length; i++) {
//        this.elements.push(tags[i]);
//    }
//    return this;
//};
Base.prototype.getTagName = function (tag, parentNode) {
    var node = null;
    var temps = [];
    if (parentNode != undefined) {
        node = parentNode;
    } else {
        node = document;
    }
    var tags = node.getElementsByTagName(tag);
    for (var i = 0; i < tags.length; i++) {
        temps.push(tags[i]);
    }
    return temps;
}

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
Base.prototype.getClass = function (className, parentNode) {
    var node = null;
    var temps = [];//临时数组
    if (parentNode != undefined) {
        node = parentNode;
    }
    else {
        node = document;
    }
    var all = node.getElementsByTagName('*');//获取所有节点数组
    for (var i = 0; i < all.length; i++) {
        if (all[i].className == className) {//判断当前class是否与传入classname相同
            temps.push(all[i]);
        }
    }
    return temps;
}

//设置css选择器子节点

Base.prototype.find = function (str) {
    var childElements = [];
    for (var i = 0; i < this.elements.length; i++) {
        switch (str.charAt(0)) {
            case '#':
                childElements.push(this.getId(str.substring(1)));
                break;
            case '.':
                /*
                var all = this.elements[i].getElementByTagName('*');
                for (var j = 0; j < all.length; j++) {
                    if (all[j].className == str.substring(1)) {
                        childElements.push(all[j]);
                    }
                }*/
                var temps = this.getClass(str.substring(1), this.elements[i]);
                for (var j = 0; j < temps.length; j++) {
                    childElements.push(temps[j]);
                }
                break;
            default:
                
                /*var tags = this.elements[i].getElementsByTagName(str);
                for (var j = 0; j <tags.length; j++) {
                    childElements.push(tags[j]);
                }*/

                var temps = this.getTagName(str, this.elements[i]);
                for (var j = 0; j < temps.length; j++) {
                    childElements.push(temps[j]);
                }
        }
    }
    this.elements = childElements;
    return this;
}



//获取某个节点，并返回这个节点对象getElement
Base.prototype.ge = function (num) {
    return this.elements[num];
}
//获取首个节点，并返回这个节点对象
Base.prototype.first = function () {
    return this.elements[0];
}
//获取末尾个节点，并返回这个节点对象
Base.prototype.last = function () {
    return this.elements[this.elements.length-1];
}
//获取某个节点，并且返回Base对象
Base.prototype.eq = function (num) {
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
        addEvent(window, 'scroll', scrollTop);

    }
    return this;
}
//解锁
Base.prototype.unlock = function () {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = 'none';
        document.documentElement.style.overflow = 'auto';//解决滚动条出现时 拖拽物体 屏幕白边
        removeEvent(window, 'scroll', scrollTop);
    }
    return this;
}

//设置动画
Base.prototype.animate = function (obj) {
    for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];
        var attr = obj['attr'] == 'x' ? 'left' : obj['attr'] == 'y' ? 'top' : 
            obj['attr'] == 'w' ? 'width' : obj['attr'] == 'h' ? 'height' : 
            obj['attr'] == 'o' ? 'opacity' :obj['attr']!=undefined ?obj['attr']:'left';

        var start = obj['start'] != undefined ? obj['start'] :
            attr=='opacity'?parseFloat(getStyle(element,attr))*100:
            parseInt(getStyle(element, attr));
        var t = obj['t'] != undefined ? obj['t'] : 10;
        var step = obj['step'] != undefined ? obj['step'] : 10;

        var target = obj['target'];
        var alter = obj['alter'];
        var mul=obj['mul'];

        var speed = obj['speed'] != undefined ? obj['speed'] : 6;
        var type = obj['type'] == 0 ? 'constant' : obj['type'] == 1 ? 'buffer' : 'buffer';//0匀速，1缓冲
        
        if (alter != undefined && target == undefined) {
            target = alter + start;
        } else if (alter == undefined && target == undefined && mul==undefined) {
            throw new Error('alter增量或者target目标量必须传一个！');
        }

        if (start > target) step = -step;
        if (attr == 'opacity') {
            element.style.opacity = parseInt(start)/100;//初始透明度
            element.style.filter = 'alpha(opacity=' + parseInt(start) + ')';
        } else {
            element.style[attr] = start + 'px';//初始位置
        }
        if(mul==undefined){
            mul={};
            mul[attr]=target;
        }
        
        var flag = true;
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            for (var i in mul) {
                attr = i=='x'?'left':i=='y'?'top':i=='w'?'width':i=='h'?'height':i=='o'?'opacity':i!=undefined ? i:'left';
                target = mul[i];
            
            if (type == 'buffer') {
                step = attr == 'opacity' ? (target - parseFloat(getStyle(element, attr)) * 100) / speed :
                    (target - parseInt(getStyle(element, attr)))/speed;
                //step = (target - parseInt(getStyle(element, attr))) / speed;
                step =step>0 ? Math.ceil(step): Math.floor(step);
            }
            if (attr == 'opacity') {
                if (step == 0) {
                    setOpacity();
                } else if (step > 0 && Math.abs(parseFloat(getStyle(element, attr))*100 - target) <= step) {
                    setOpacity();
                } else if (step < 0 && (parseFloat(getStyle(element, attr)) * 100 - target) <= Math.abs(step)) {//向上向左
                    setOpacity();
                } else {
                    var temp = parseFloat(getStyle(element, attr)) * 100;
                    element.style.opacity = parseInt(temp + step) / 100;
                    element.style.filter = 'alpha(opacity=' + parseInt(temp + step) + ')';
                }
                if (parseInt(target) != parseInt(parseFloat(getStyle(element, attr))*100)) flag = false;

            } else {
                //运动变化
                if (step == 0) {
                    setTarget();
                } else if (step > 0 && Math.abs(parseInt(getStyle(element, attr)) - target) <= step) {
                    setTarget();
                } else if (step < 0 && (parseInt(getStyle(element, attr)) - target) <= Math.abs(step)) {//向上向左
                    setTarget();
                } else {
                    element.style[attr] = parseInt(getStyle(element, attr)) + step + 'px';
                }

                if (parseInt(target) != parseInt(getStyle(element, attr))) flag = false;
            }

            }


            if (flag) {
                clearInterval(element.timer);
                if (obj.fn != undefined) obj.fn();
            }
            //document.getElementById('box').innerHTML += getStyle(element, attr) + '</br>';
        }, t);
        function setTarget() {
            element.style[attr] = target + 'px';
            //clearInterval(element.timer);
            //if (obj.fn != undefined) obj.fn();
        }
        function setOpacity() {
            element.style.opacity = parseInt(target) / 100;
            element.style.filter = 'alpha(opacity=' + parseInt(target) + ')';
            //clearInterval(element.timer);
            //if (obj.fn != undefined) obj.fn();
        }
    }
}

//插件入口 名字及方法
Base.prototype.extend = function (name, fn) {
    Base.prototype[name] = fn;
}

/*---------------------control类封装-----------------------*/

