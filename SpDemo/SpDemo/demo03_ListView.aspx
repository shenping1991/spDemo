<%@ Page Title="" Language="C#" MasterPageFile="~/A_Data.Master" AutoEventWireup="true" CodeBehind="demo03_ListView.aspx.cs" Inherits="SpDemo.demo03_ListView" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="holder_main" runat="server">
    <h2>新闻列表</h2>
    <asp:ListView ID="ListView1" runat="server" ItemPlaceholderID="itemHolder" DataKeyNames="Nws_ID" DataSourceID="ads_lv" >
       <LayoutTemplate >
           <div runat="server" id="itemHolder"></div>
       </LayoutTemplate>
        <ItemTemplate>
            <div runat="server" class="">
                <img src='<%#Eval("Nws_Image") %>">' alt="图片" />
                <p><%#Eval("Nws_Title") %>></p>
                <p><%#Eval("Nws_CreateTime") %></p>
                <%--<p><%#Eval(string.Format("{0:D}",'Nws_CreateTime')) %></p>--%>
            </div>
        </ItemTemplate>
    </asp:ListView>
    <asp:SqlDataSource ID="ads_lv" runat="server" ConnectionString="Data Source=A-PC;Initial Catalog=antdb123;User ID=sa;Password=123456" ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM [Web_News] WHERE ([Nws_Type] = @Nws_Type)">
        <SelectParameters>
            <asp:SessionParameter Name="Nws_Type" SessionField="TYPE" Type="String" />
        </SelectParameters>
    </asp:SqlDataSource>
</asp:Content>
<asp:Content ID="Content3" runat="server" contentplaceholderid="holder_side">
    <asp:BulletedList ID="bltlist_type" runat="server" DataSourceID="asd_menu" DataTextField="Nws_Type" DataValueField="Nws_Type" OnClick="bltlist_type_Click" DisplayMode="LinkButton">
    </asp:BulletedList>
    <asp:SqlDataSource ID="asd_menu" runat="server" ConnectionString="Data Source=A-PC;Initial Catalog=antdb123;User ID=sa;Password=123456" ProviderName="System.Data.SqlClient" SelectCommand="SELECT [Nws_Type] FROM [Web_News] group by [Nws_Type]"></asp:SqlDataSource>
</asp:Content>

