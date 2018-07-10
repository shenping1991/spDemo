<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SpDemo.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="Src/Css/bootstrap.css" rel="stylesheet" />
    <link href="Src/Css/bootstrap-theme.css" rel="stylesheet" />
    <link href="Src/Css/css.css" rel="stylesheet" />
    <script src="Src/js/jquery-1.11.1.js"></script>
    <script src="Src/js/bootstrap.js"></script>
    <script src="Src/js/bootstrap.min.js"></script>
    
</head>
<body>

    <form id="form1" runat="server">
    <div class="main-wrapper">
        <div class="header-wrapper">
            <nav class="navbar navbar-default" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#hd-nav">
                            <span></span>
                        </button>
                        <a class="navbar-brand" href="#">Timing</a>
                    </div>
                    <div class="collapse navbar-collapse" id="hd-nav">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">案例</a></li>
                            <li><a href="#">实例一</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">实例二<span class="caret"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                <li><a href="#">1.1</a></li>
                                <li><a href="#">1.2</a></li>
                                <li><a href="#">1.3</a></li>
                                <li class="divider"></li>
                                <li><a href="#">2.1</a></li>
                                <li><a href="#">2.2</a></li>
                                <li><a href="#">2.3</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                        <div class="navbar-form navbar-left" role="search">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="search" />
                            </div>
                            <button type="submit" class="btn btn-default">搜索</button>
                        </div>
                        <a href="#" class="btn-exit navbar-text" id="btn_exit" onclick="sysExit()">退出</a>
                    </div>
                    <%--<div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">退出</a></li>
                        </ul>
                        
                    </div>--%>
                </div>
            </nav>
        </div>
        <div class="main-contain col-lg-12 col-md-12">
            <div class="col-lg-9 col-md-9">
                <div class="main">
                    <div class="sitemap-wrapper">
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3">
                <div class="sidebar userInfo-wrapper">
                    <div class="user-img"></div>
                    <p>欢迎您，<asp:Label ID="labName" CssClass="lab-info" runat="server" Text=""></asp:Label></p>
                    <p>登录时间：<asp:Label ID="labTime" CssClass="lab-info" runat="server" Text=""></asp:Label></p>
                    <p>您是本站第<asp:Label ID="labNumb" CssClass="lab-info" runat="server" Text=""></asp:Label>位用户</p>
                </div>
            </div>
        </div>
    </div>
    </form>
    <script>
        function sysExit() {
            window.location.replace( "Login.aspx");
            
        }
    </script>
</body>
</html>
