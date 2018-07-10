using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SpDemo
{
    public partial class demo03_ListView : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void bltlist_type_Click(object sender, BulletedListEventArgs e)
        {
            Session["TYPE"] = bltlist_type.Items[e.Index].Value;
        }
    }
}