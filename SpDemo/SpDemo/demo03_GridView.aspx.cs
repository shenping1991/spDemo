using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SpDemo
{
    public partial class demo03_GridView : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ddlnews.SelectedValue = Session["CID"].ToString();
            }
            

        }
        protected void btn_selet_Click(object sender, EventArgs e)
        {
            Session["CID"] = ddlnews.SelectedValue;
        }
        protected void ddlnews_SelectedIndexChanged(object sender, EventArgs e)
        {
           
        }
    }
}