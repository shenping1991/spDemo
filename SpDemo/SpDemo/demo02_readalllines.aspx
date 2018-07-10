<%@ Page Title="" Language="C#" MasterPageFile="~/A_site.Master" AutoEventWireup="true" CodeBehind="demo02_readalllines.aspx.cs" Inherits="SpDemo.demo02_readalllines" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="holder_main" runat="server">
    <%--<asp:TextBox ID="txt_content" Width="400" Rows="10" TextMode="MultiLine" runat="server"></asp:TextBox>--%>
    <%--<asp:Panel ID="pan_control" runat="server"></asp:Panel>--%>
    <div id="div_control" runat="server" width="400" height="200">

    </div>
    <asp:Button ID="btn_save" runat="server" Text="保存" OnClick="btn_save_Click" />
</asp:Content>
