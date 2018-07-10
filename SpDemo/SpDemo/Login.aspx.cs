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
using System.Data.SqlClient;

namespace SpDemo
{
    public partial class Login : System.Web.UI.Page
    {

        static string ConnStr = ConfigurationManager.AppSettings["ConnectionString"];
        SqlConnection conn = new SqlConnection(ConnStr);
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)//ispostback 默认flase
            {
                Session["name"] = "";
                Session["password"] = "";
                Session["LoginTime"] = "";
                //if (Session["name"].ToString() == "")
                //{
                //    Response.Write("<script >alert('您还未登录！')</script>");
                //}
            }
            
        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            //sp_User db = new sp_User();
            string strName = txtName.Text.Trim();
            string strPwd = txtPwd.Text.Trim();
            if (strName == "" || strPwd =="")
            {
                labTip.Text = "用户名和密码不能为空！";
            }
            else
            {
                string sql = "select * from hs_user where Col_LoginName='" + strName + "' and Col_PWord='" + CommonMD5.StrToMD5(strPwd) + "'";
                SqlDataAdapter da = new SqlDataAdapter(sql, conn);
                DataSet ds = new DataSet();
                da.Fill(ds);
                DataTable dt = ds.Tables[0];
                if (dt.Rows.Count > 0)
                {

                    if ((strName == dt.Rows[0]["Col_LoginName"].ToString()) && (CommonMD5.StrToMD5(strPwd) == dt.Rows[0]["Col_PWord"].ToString()))
                    {
                        //session方法
                        Session["name"] = strName;
                        Session["password"] = strPwd;
                        Session["LoginTime"] = DateTime.Now;
                        Application.Lock();
                        Application["count"] = (int)Application["count"] + 1;
                        Application.UnLock();
                        //传参方法
                        //Response.Write("<script>alert('验证成功，正在为您加载页面！')</script>");
                        //Response.Redirect("~/Default.aspx?name="+strName+"&password="+strPwd);
                        Response.Redirect("~/Default.aspx");

                    }
                    else
                    {
                        labTip.Text = "用户名或密码错误，请重试！";
                    }
                }
                
            }

        }


    }
}