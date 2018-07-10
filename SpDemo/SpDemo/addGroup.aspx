<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="addGroup.aspx.cs" Inherits="SpDemo.addGroup" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="Src/Css/css.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <div class="addGroup-wrapper">
        输入组名：
        <asp:TextBox ID="txtGroupName" runat="server"></asp:TextBox>
        <asp:Button ID="btn_addGroup" runat="server" Text="添加部门" OnClick="btn_addGroup_Click" />
    </div>
    <div class="group-list">
        <asp:GridView ID="GVGroup" runat="server" CellPadding="4" ForeColor="#333333" GridLines="None" AutoGenerateColumns="False">
            <AlternatingRowStyle BackColor="White" />
            <Columns>
                <asp:BoundField DataField="groupId" HeaderText="部门编号" />
                <asp:BoundField DataField="groupName" HeaderText="部门名称" />
            </Columns>
            <EditRowStyle BackColor="#2461BF" />
            <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
            <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
            <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
            <RowStyle BackColor="#EFF3FB" />
            <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
            <SortedAscendingCellStyle BackColor="#F5F7FB" />
            <SortedAscendingHeaderStyle BackColor="#6D95E1" />
            <SortedDescendingCellStyle BackColor="#E9EBEF" />
            <SortedDescendingHeaderStyle BackColor="#4870BE" />
        </asp:GridView>
    </div>
    <div>
        请选择部门：<asp:DropDownList ID="ddlGroup" runat="server"></asp:DropDownList><br />
        姓名：<asp:TextBox ID="txtUserName" runat="server"></asp:TextBox><br />

        <asp:Button ID="btnAddUser" runat="server" Text="添加" OnClick="btnAddUser_Click" />
    </div>
    </div>
    </form>
</body>
</html>
