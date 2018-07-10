using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;//包含允许读写文件和数据流的类型 使用Directory类，File类，Path类

namespace SpDemo
{
    public partial class getFile : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack) { //获取文件列表
            //string[] arrs=Directory.GetFiles(MapPath("txtfiles"));//GetFiles在文件目录下遍历文件 mappath路径转换 虚拟-物理
            ////Response.Write(arrs.Length);文件个数
            //foreach (string _s in arrs)//遍历文件路径
            //{
            //    string fileName = Path.GetFileName(_s);//从字符串中分处理文件名
            //    string fileNameEx = Path.GetFileNameWithoutExtension(_s);//文件名不含扩展名
            //    Response.Write(fileName+"  "+fileNameEx + "<br/>");
            //}
            string[] arrs = Directory.GetFiles(MapPath("txtfiles"),"*.txt");//GetFiles在文件目录下遍历文件 mappath路径转换 虚拟-物理
            ListItem item;
            foreach (string _s in arrs)
            {
                item=new ListItem();
                string fileName = Path.GetFileName(_s);
                item.Text = fileName;
                ddl_txtFile.Items.Add(item.Text);
            }
            }
        }

        protected void btn_read_Click(object sender, EventArgs e)
        {
            string _fname = ddl_txtFile.SelectedValue;//选择文件名
            string _path = Path.Combine(MapPath("txtfiles"), _fname);//组合字符串，获取文件路径
            if (File.Exists(_path))
            {
                txt_content.Text = File.ReadAllText(_path);//读取文件内容
            }
        }

        protected void btn_save_Click(object sender, EventArgs e)
        {
            //文件名，文本内容和文件路径
            string _fname = ddl_txtFile.SelectedValue;
            string _path = Path.Combine(MapPath("txtfiles"), _fname);
            string _content = txt_content.Text;
            File.WriteAllText(_path, _content);//写入文件内容
            Response.Write("<script>alert('保存成功')</script>");
        }

        protected void btn_row_Click(object sender, EventArgs e)
        {
            string _fname = ddl_txtFile.SelectedValue;
            string _path = Path.Combine(MapPath("txtfiles"), _fname);
            if (File.Exists(_path))
            {
                TextBox txt_item;//添加textbox
                string[] content = File.ReadAllLines(_path);//按行读取文件
                foreach (string s in content)
                {
                    txt_item = new TextBox();//每个内容建立一个文本框
                    txt_item.Text = s;//
                    txt_panl.Controls.Add(txt_item);
                }
                
            }
        }

        protected void btn_rowSave_Click(object sender, EventArgs e)
        {

        }
    }
}