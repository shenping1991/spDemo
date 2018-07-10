<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="demotest.aspx.cs" Inherits="SpDemo.demotest" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>类及属性封装</title>

    <%--<script src="Src/js/base.js"></script>--%>
    <script src="Src/js/cssBase.js"></script>
    <script src="Src/js/tool.js"></script>
    <script src="Src/js/fun.js"></script>

    <link href="Src/Css/css.css" rel="stylesheet" />

</head>
<body>
    <form id="form1" runat="server">
        <div class="test" >
            <div id="box">123</div>
            <input type="radio" value="1" name="sex" />男<br />
            <a name="sex">男</a>
            <p class="red">1</p>
            <p class="red">2</p>
            <p class="red" >3</p>
            <p>11111</p>
        </div>
        <div id="a">
            <p class="red">1</p>
            <p class="red">2</p>
            <p class="red" >3</p>
        </div>
        <div id="b">
            <p class="red">1</p>
            <p class="red">2</p>
            <p class="red">3</p>
        </div>
        <label id="btnAdd">我来实践addClass</label>

        <div id="box2">
           
            <img src="Src/Images/stock-photo-1411472891.jpg" />
        </div>
        <input id="txt_arr" type="text" value=""/>
    </form>
</body>
</html>
