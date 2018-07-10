<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="getFile.aspx.cs" Inherits="SpDemo.getFile" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>getFile</title>
    <style type="text/css">
        #txt_panl>input{
            display:block;
            width:300px;
            height:40px;
            margin-top:10px;
            border:1px solid #0094ff;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        选择文件：
        <asp:DropDownList ID="ddl_txtFile" runat="server"></asp:DropDownList>
        <asp:Button ID="btn_read" runat="server" Text="读取文件内容" OnClick="btn_read_Click" />
        <asp:Button ID="btn_row" runat="server" Text="单行读取" OnClick="btn_row_Click" style="height: 21px" />
        <br />
        <asp:TextBox ID="txt_content" runat="server" TextMode="MultiLine" Width="400px" Height="200px"></asp:TextBox>
        <br />
        <asp:Button ID="btn_save" runat="server" Text="保存" OnClick="btn_save_Click" />
        <br />
        <asp:Panel ID="txt_panl" runat="server">
        </asp:Panel>
        <asp:Button ID="btn_rowSave" runat="server" Text="按行保存" OnClick="btn_rowSave_Click" />
    </div>
    </form>
</body>
</html>
