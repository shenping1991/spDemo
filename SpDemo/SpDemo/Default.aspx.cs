using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

namespace SpDemo
{
    public partial class Default : System.Web.UI.Page
    {
        //string LoginTime = ""; 
        protected void Page_Load(object sender, EventArgs e)
        {
            //传参方法
            //string strName = Request.Params["name"] == "" ? "" : Request.Params["name"];
            //if (strName != ""&& strName!=null)
            //{
                
            //    labName.Text = strName;
                
            //    LoginTime=Session["LoginTime"].ToString();
            //    labTime.Text = LoginTime;
            //}
            //else
            //{
            //    Response.Write("<script >alert('您还未登录！')</script>");
            //    Response.Redirect("~/Login.aspx");
            //}
            //session 方法
            if ((Session["name"].ToString()!= "" )&& (Session["name"]!= null))
            {
                labName.Text = Session["name"].ToString();
                labTime.Text = Session["LoginTime"].ToString();
                labNumb.Text = Application["count"].ToString();

            }
            else
            {
                Response.Write("<script >alert('您还未登录！')</script>");
                Response.Redirect("~/Login.aspx");
            }
            
        }

    }
}