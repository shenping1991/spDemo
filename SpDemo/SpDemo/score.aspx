<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="score.aspx.cs" Inherits="SpDemo.score" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <%--判断输入成绩--%>
        <div class="score">
            <asp:TextBox ID="txtScore" runat="server"></asp:TextBox>
            <asp:Label ID="lab1" runat="server" Text=""></asp:Label>
            <br />
            <asp:RadioButton ID="rbtn1" runat="server" Text="不合格" GroupName="scoreRbtn" />
            <asp:RadioButton ID="rbtn2" runat="server" Text="合格" GroupName="scoreRbtn"/>
            <asp:RadioButton ID="rbtn3" runat="server" Text="良好" GroupName="scoreRbtn"/>
            <asp:RadioButton ID="rbtn4" runat="server" Text="优秀" GroupName="scoreRbtn"/><br /><br />
            <asp:Button ID="btnCheck" runat="server" Text="判断" OnClick="btnCheck_Click" />
        
        </div>
        <br />
        <br />
        <%--验证通过，显示操作：输入字符串，输出单个字符--%>
        <div class="demo2">
            姓名：<asp:TextBox ID="txtName" runat="server"></asp:TextBox>
            密码：<asp:TextBox ID="txtPwd" runat="server" AutoPostBack="true" TextMode="Password" OnTextChanged="txtPwd_TextChanged"></asp:TextBox>
            <asp:Label ID="lab_error" runat="server" Text=""></asp:Label><br /><br />
            <asp:Panel ID="pnl_control" runat="server" Enabled="false">
                <asp:TextBox ID="txt_string" runat="server"></asp:TextBox>
                <asp:Button ID="btnOut" runat="server" Text="拆分字符串" OnClick="btnOut_Click" /><br /><br />
                <asp:TextBox ID="txt_char" runat="server" TextMode="MultiLine" Width="180" Height="100" ></asp:TextBox>
            </asp:Panel>
        </div>
        <br />
        <br />
        <%--checkbox--%>
        <div>
            <asp:CheckBox ID="chkb_auto" runat="server" Text="autoPostBack" AutoPostBack="true" OnCheckedChanged="CheckBox1_CheckedChanged" />
            <asp:Label ID="lab_check" runat="server" Text=""></asp:Label>
        </div>

        <div>
            请选择你的喜好：<br />
            <div id="chk_wrap" runat="server">
            <asp:CheckBox ID="chk_apple" runat="server" />
            <asp:CheckBox ID="chk_peal" runat="server" />
            <asp:CheckBox ID="chk_grape" runat="server" />
            </div>
            <br />
            <asp:Button ID="btn_fruit" runat="server" Text="选择" OnClick="btn_fruit_Click" /><br />
            您的选择是：
            <asp:TextBox ID="txt_myFavorite" runat="server" TextMode="MultiLine" Width="200" Height="120"></asp:TextBox>
            <asp:Button ID="btn_foreachChar" runat="server" Text="遍历字符串" Height="21px" OnClick="btn_foreachChar_Click" />
        </div>
        <%--BulletedList 手动编辑数据项，导航条--%>
        <asp:BulletedList ID="BulletedList1" runat="server" DisplayMode="HyperLink">
            <asp:ListItem Value="http://baidu.com">百度</asp:ListItem>
            <asp:ListItem>第二</asp:ListItem>
        </asp:BulletedList>
        <%--BulletedList 通过配置数据源从数据库获取数据绑定 displayMode属性修改--%>
        <asp:BulletedList ID="BulletedList2" runat="server" DataSourceID="SqlDataSource1" DataTextField="UserName" DataValueField="UserId" DisplayMode="HyperLink"></asp:BulletedList>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:antdb123ConnectionString %>" SelectCommand="SELECT * FROM [WW_user]"></asp:SqlDataSource>
    </form>
</body>
</html>
