using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace SpDemo
{
    public partial class A_site : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Panel pnl_item;
            Label lab_fname;
            HyperLink hlink_allText, hlink_lines;
            string[] sarr_fname = Directory.GetFiles(MapPath("txtfiles"), "*.txt");

            foreach (string _path in sarr_fname)
            {
                lab_fname = new Label();
                lab_fname.Text = Path.GetFileName(_path);

                hlink_lines = new HyperLink();
                hlink_lines.Text = "按行读取";
                hlink_lines.NavigateUrl = "demo02_readalllines.aspx?fname=" + lab_fname.Text;

                hlink_allText = new HyperLink();
                hlink_allText.Text = "读取内容";
                hlink_allText.NavigateUrl = "demo02_readalltext.aspx?fname="+lab_fname.Text;

                //hlink_lines = new HyperLink();
                //hlink_lines.Text = "按行读取";
                //hlink_lines.NavigateUrl = "demo02_readallline.aspx?fname=" + lab_fname.Text;

                pnl_item = new Panel();
                pnl_item.Controls.Add(lab_fname);
                pnl_item.Controls.Add(hlink_lines);
                pnl_item.Controls.Add(hlink_allText);
                

                right_wrap.Controls.Add(pnl_item);
                
            }

        }
    }
}