<%@ Page Title="" Language="C#" MasterPageFile="~/A_site.Master" AutoEventWireup="true" CodeBehind="demo02_readalltext.aspx.cs" Inherits="SpDemo.demo02_readalltext" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="holder_main" runat="server">
    <asp:TextBox ID="txt_content" runat="server" Width="400" Rows="10" TextMode="MultiLine"></asp:TextBox>
    <asp:Button ID="btn_save" runat="server" Text="保存" OnClick="btn_save_Click" />
</asp:Content>