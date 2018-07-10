<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="cssSelector.aspx.cs" Inherits="SpDemo.cssSelector" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Css选择器封装</title>
    <link href="Src/Css/test.css" rel="stylesheet" />
    <script src="Src/js/cssBase.js"></script>
    <script src="Src/js/tool.js"></script>
    <script src="Src/js/cssSelector.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div id="box">
            我是一个box
        </div>
        <p>
            <span class="style-red">我包含在p元素中</span>
            <span class="style-red">我包含在p元素中</span>
            <span class="style-gre">我包含在p元素中</span>
        </p>
        <p>
            <span class="" id="txt_node">我包含在p元素中我有id</span>
            <span class="">我包含在p元素中</span>
            <span class="">我包含在p元素中</span>
        </p>
        <div>
            <span class="style-red">我包含在div元素中</span>
            <span class="style-gre">我包含在div元素中</span>
            <span class="style-gre">我包含在div元素中</span>
        </div>
        <div id="box2">
            我们都在box2中
            <p id="p"><span>我在p中</span></p>
            <p>
                <span class="txt-p">我在p中我有class</span>
            </p>
            <div><span>我在div中</span></div>
        </div>
    </form>
</body>
</html>
