<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="spchat.aspx.cs" Inherits="SpDemo.spchat" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="Src/Css/bootstrap.css" rel="stylesheet" />
    <link href="Src/Css/bootstrap-theme.css" rel="stylesheet" />
    <link href="Src/Css/css.css" rel="stylesheet" />
    <script src="Src/js/jquery-1.11.1.js"></script>
    <script src="Src/js/bootstrap.js"></script>
    <script src="Src/js/bootstrap.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div class="chat-wrapper" style="">
        <div class="chat-header"style=""><h3>聊天室</h3></div>
        <div class="chat-main" style="width:100%; background:#fff;">
            <div class="person-wrapper col-lg-3 col-md-3">
                <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                <ContentTemplate>
                    <asp:ListBox ID="ltb_user" runat="server"></asp:ListBox>
                    <asp:Timer ID="Timer1" runat="server"></asp:Timer>
                </ContentTemplate>
                    <Triggers>
                        <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick" />
                    </Triggers>
                </asp:UpdatePanel>
            </div>
            <div class="chat-c-wrapper col-lg-9 col-md-9" >
                <iframe id="mainFrame" src="chatContent.aspx" style="width:100%;"></iframe>
            </div>
        </div>
        <div class="chat-foot col-lg-12 col-md-12" >
            <div>
            <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                <ContentTemplate>
                    @<asp:TextBox ID="txt_user" runat="server" Text="所有人" ReadOnly="true" width="80px"></asp:TextBox>
                    说：
                    <asp:TextBox ID="txt_msg" runat="server" Width="200px"></asp:TextBox>
                    <asp:Button ID="Button1" runat="server" Text="发送"  />
                </ContentTemplate>
                <Triggers>
                        <asp:AsyncPostBackTrigger ControlID="Button1" EventName="Click" />
                        <asp:AsyncPostBackTrigger ControlID="Ltb_user" EventName="SelectedIndexChanged" />
                    </Triggers>
            </asp:UpdatePanel>
            </div>
        </div>
    </div>
    </form>
</body>
</html>
