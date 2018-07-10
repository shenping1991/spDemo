using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace SpDemo
{
    public partial class demo02_readalltext : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)//不是首次载入 loadFile
            {
                string _fname = Request.QueryString["fname"];
                if (_fname != null)
                {
                    string _path = Path.Combine(MapPath("txtfiles"), _fname);
                    if (File.Exists(_path))
                    {
                        txt_content.Text = File.ReadAllText(_path);
                    }
                    else
                    {
                        Response.Write("useMaster.aspx");
                    }
                }
                else
                {
                    Response.Write("useMaster.aspx");
                }
            }
        }

        protected void btn_save_Click(object sender, EventArgs e)
        {
            string _fname = Request.QueryString["fname"];
            string _content = txt_content.Text;
            string _path = Path.Combine(MapPath("txtfiles"), _fname);
            File.WriteAllText(_path, _content);
            Response.Write("<script>alert('保存成功')</script>");
        }
    }
}