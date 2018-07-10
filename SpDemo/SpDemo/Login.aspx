<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="SpDemo.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="Src/Css/css.css" rel="stylesheet" />
</head>
<body>
    
    <form id="form1" runat="server">
    <div class="login-wrapper" >
        <div class="login-content">
        <table>
            <thead>
                <tr><th colspan="3"><asp:Label ID="labLogin" runat="server" Text="登  录"></asp:Label></th></tr>
            </thead>
            <tr>
                <td>用户名：</td><td><asp:TextBox ID="txtName" CssClass="txt" runat="server" placeholder="请输入用户名"></asp:TextBox></td><td>*</td>

            </tr>
            <tr>
                <td>密   码：</td><td><asp:TextBox ID="txtPwd" CssClass="txt" runat="server" placeholder="请输入密码" TextMode="Password"></asp:TextBox></td><td>*</td>
            </tr>
            <tr>
                <td>验证码：</td><td><asp:TextBox ID="txtVNumb" CssClass="txt" runat="server" placeholder="请输入验证码" TextMode="Password"></asp:TextBox></td><td>
                    <asp:Image ID="ImgVNumb" runat="server"  ImageUrl="~/ValidateNum.aspx"/></td>
            </tr>
            <tr>
                <td></td><td ><asp:Button ID="btnLogin" runat="server" Text="登  录" OnClick="btnLogin_Click" /></td><td></td>
            </tr>
            <tr>
                <td></td>
                <td colspan="3">
                    <asp:Label ID="labTip" runat="server" Text=""></asp:Label>
                </td>
            </tr>
        </table>  
        </div>
    </div>
    </form>
</body>
</html>
