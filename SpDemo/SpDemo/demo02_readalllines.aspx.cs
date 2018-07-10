using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
namespace SpDemo
{
    public partial class demo02_readalllines : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string _path = Get_File();
            string[] _content = File.ReadAllLines(_path);   
            TextBox linestxt;
            foreach (string s in _content)
            {
                linestxt = new TextBox();
                linestxt.Text = s;
                div_control.Controls.Add(linestxt);
            }
        }
        protected string Get_File()
        {
            string _fname = Request["fname"];
            string _path = "";
            if (_fname == null)
            {
                Response.Redirect("useMaster.aspx");
            }
            _path = Path.Combine(MapPath("txtfiles"), _fname);
            if (!File.Exists(_path))
            {
                Response.Redirect("useMaster.aspx");
            }
            return _path;
        }

        protected void btn_save_Click(object sender, EventArgs e)
        {
            string _content = "";
            string[] arry;
            foreach (Control ctl in div_control.Controls)
            {
                if (ctl is TextBox)
                {
                    _content += ((TextBox)ctl).Text + '\u0081';
                }
            }
            _content = _content.Substring(0, _content.Length-1);
            arry = _content.Split('\u0081');
            string _path=Path.Combine(MapPath("txtfiles"),Request["fname"]);
            File.WriteAllLines(_path,arry);
            Response.Write("<script>alert('修改成功')</script>");
        }
    }
}