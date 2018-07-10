<%@ Page Title="" Language="C#" MasterPageFile="~/A_Data.Master" AutoEventWireup="true" CodeBehind="demo03_typeList.aspx.cs" Inherits="SpDemo.demo03_typeList" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="holder_main" runat="server">
    <asp:BulletedList ID="blltlist" runat="server" DataSourceID="SqlType" DataTextField="Nws_Type" DataValueField="Nws_Type" DisplayMode="LinkButton" OnClick="blltlist_click"></asp:BulletedList>
    <asp:SqlDataSource ID="SqlType" runat="server" ConnectionString="Data Source=A-PC;Initial Catalog=antdb123;User ID=sa;Password=123456"  ProviderName="System.Data.SqlClient" SelectCommand="SELECT [Nws_Type] FROM [Web_News]"></asp:SqlDataSource>
</asp:Content>
