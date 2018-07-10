<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="event.aspx.cs" Inherits="SpDemo._event" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>事件绑定</title>
    <link href="Src/Css/controlG.css" rel="stylesheet" />
    <%--<script src="Src/js/base.js"></script>--%>
    
    
    <script src="Src/js/cssBase.js"></script>
    <script src="Src/js/base-drag.js"></script>
    <script src="Src/js/tool.js"></script>
    <script src="Src/js/eventFun.js"></script>

</head>

<body>
    <form id="form1" runat="server">
        <input id="btn_move" type="button" name="move" value="运动动画 " />
        <div id="box">box</div>
    <div>
    <div class="">
        <input id="btn_login" class="btn-login" type="button" value="登录" />
        <a id="a_net" href="https://www.baidu.com/">网站</a>
    </div>
    </div>

        <input id="btn_change" type="button" name="btn_change" value=" 切换" />
        <div id="box2"></div>
    </form>
</body>
</html>
