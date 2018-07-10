<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="siteMap.aspx.cs" Inherits="SpDemo.siteMap" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style type="text/css">

* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
  *,
  *:before,
  *:after {
    color: #000 !important;
    text-shadow: none !important;
    background: transparent !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
  }
  </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:TreeView ID="TreeView1" runat="server" ImageSet="Arrows">
            <HoverNodeStyle Font-Underline="True" ForeColor="#5555DD" />
            <Nodes>
                <asp:TreeNode Text="组织架构" Value="组织架构">
                    <asp:TreeNode Text="人事部" Value="人事部">
                        <asp:TreeNode Text="小王" Value="小王"></asp:TreeNode>
                    </asp:TreeNode>
                    <asp:TreeNode Text="销售部" Value="销售部"></asp:TreeNode>
                    <asp:TreeNode Text="营销部" Value="营销部"></asp:TreeNode>
                </asp:TreeNode>
            </Nodes>
            <NodeStyle Font-Names="Tahoma" Font-Size="10pt" ForeColor="Black" HorizontalPadding="5px" NodeSpacing="0px" VerticalPadding="0px" />
            <ParentNodeStyle Font-Bold="False" />
            <SelectedNodeStyle Font-Underline="True" ForeColor="#5555DD" HorizontalPadding="0px" VerticalPadding="0px" />
        </asp:TreeView>
                        <asp:TreeView ID="TreeView2" runat="server" DataSourceID="SiteMapDataSource1">
                        </asp:TreeView>
                        <asp:SiteMapDataSource ID="SiteMapDataSource1" runat="server" />
                        <asp:Menu ID="Menu1" runat="server" DataSourceID="XmlDataSource1" DynamicHorizontalOffset="2" Font-Names="Verdana" ForeColor="#6666FF" Orientation="Horizontal" StaticSubMenuIndent="10px">
                            <DataBindings>
                                <asp:MenuItemBinding DataMember="Item" NavigateUrlField="url" SelectableField="#Name" SeparatorImageUrlField="#Name" TargetField="#Name" ToolTipField="#Name" />
                            </DataBindings>
                        </asp:Menu>
                        <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/orgtree.xml" XPath="/*/*"></asp:XmlDataSource>
    </div>
    </form>
</body>
</html>
