<%@ Page Title="" Language="C#" MasterPageFile="~/A_Data.Master" AutoEventWireup="true" CodeBehind="demo03_GridView.aspx.cs" Inherits="SpDemo.demo03_GridView" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css"></style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="holder_main" runat="server">
    <asp:DropDownList ID="ddlnews" runat="server" DataSourceID="ddlnewssorc" DataTextField="Nws_Type" DataValueField="Nws_Type" OnSelectedIndexChanged="ddlnews_SelectedIndexChanged"></asp:DropDownList>
    <asp:Button ID="btn_selet" runat="server" Text="查询" OnClick="btn_selet_Click" />
    <asp:SqlDataSource ID="ddlnewssorc" runat="server" ConnectionString="Data Source=A-PC;Initial Catalog=antdb123;User ID=sa;Password=123456" ProviderName="System.Data.SqlClient" SelectCommand="SELECT [Nws_Type] FROM [Web_News]"></asp:SqlDataSource>
    <asp:GridView ID="GV" runat="server" AllowPaging="True" AllowSorting="True" AutoGenerateColumns="False" CellPadding="4" DataKeyNames="Nws_ID" DataSourceID="SqlDataSource1" ForeColor="#333333" GridLines="None">
    <AlternatingRowStyle BackColor="White" />
    <Columns>
        <asp:BoundField DataField="Nws_ID" HeaderText="Nws_ID" InsertVisible="False" ReadOnly="True" SortExpression="Nws_ID" />
        <asp:BoundField DataField="Nws_Title" HeaderText="Nws_Title" SortExpression="Nws_Title" />
        <asp:BoundField DataField="Nws_Content" HeaderText="Nws_Content" SortExpression="Nws_Content" />
        <asp:BoundField DataField="Nws_Image" HeaderText="Nws_Image" SortExpression="Nws_Image" />
        <asp:BoundField DataField="Nws_Type" HeaderText="Nws_Type" SortExpression="Nws_Type" />
        <asp:BoundField DataField="Nws_Ord" HeaderText="Nws_Ord" SortExpression="Nws_Ord" />
        <asp:BoundField DataField="Nws_CreateTime" HeaderText="Nws_CreateTime" SortExpression="Nws_CreateTime" />
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
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="Data Source=A-PC;Initial Catalog=antdb123;User ID=sa;Password=123456" ProviderName="System.Data.SqlClient" 
    SelectCommand="SELECT * FROM [Web_News] WHERE ([Nws_Type] = @Nws_Type)">
    <SelectParameters>
        <asp:SessionParameter Name="Nws_Type" SessionField="CID" Type="String" />
    </SelectParameters>
    </asp:SqlDataSource>
    <%--<asp:Button ID="btn_select" runat="server" Text="更新数据源" OnClick="btn_select_Click" />--%>
</asp:Content>
