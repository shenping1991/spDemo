using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace SpDemo
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            Application["UserName"] = "所有人";
            Application["Msg"] = string.Empty;
            Application["count"] = 0;
        }

        protected void Session_Start(object sender, EventArgs e)
        {
            Application.Lock();
            Application["count"] = int.Parse(Application["count"].ToString()) + 1;
            Application.UnLock();
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {
            Application.Lock();
            Application["count"] =(int) Application["count"] - 1;
            Application.Set("Msg", Application["Msg"].ToString() + "<br/>" + Session["UserName"].ToString() + "离开了聊天室！");
            string[] arr = Application["UserName"].ToString().Split(new char[] { '/' });
            Application["UserName"] = string.Empty;
            Application["UserName"] = arr[0].ToString();
            for (int i = 1; i < arr.Length;i++ )
            {
                if (arr[i].ToString() != Session["UserName"].ToString())
                {
                    Application.Set("UserName", Application["UserName"] + "/" + arr[i].ToString());
                }
            }
            Application.UnLock();
        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}