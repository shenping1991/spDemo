using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SpDemo
{
    public partial class demo03_typeList : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void blltlist_click(object sender, BulletedListEventArgs e)
        {
            //Response.Write(e.Index.ToString());
            string _cid = blltlist.Items[e.Index].Value;
            Session["CID"] = _cid;
            Response.Redirect("demo03_GridView.aspx");
            
        }

       
    }
}