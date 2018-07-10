using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SpDemo
{
    public partial class score : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnCheck_Click(object sender, EventArgs e)
        {
            double score = -1;
            rbtn1.Checked = rbtn2.Checked = rbtn3.Checked = rbtn4.Checked = false;
            try{
                score=double.Parse(txtScore.Text);
            }
            catch{

            }
            if (score >= 0 && score <= 120)
            {
                lab1.Text = "";
                if (score >= 0 && score < 60) { rbtn1.Checked = true; }
                if (score >= 60 && score < 80) { rbtn2.Checked = true; }
                if (score >= 80 && score < 100) { rbtn3.Checked = true; }
                if (score >= 100 && score < 120) { rbtn4.Checked = true; }
            }
            else
            {
                lab1.Text = "请输入正确的数字";
            }
        }

        protected void txtPwd_TextChanged(object sender, EventArgs e)
        {
            if (txtName.Text != "")
            {
                if (txtPwd.Text == "123") { 
                    pnl_control.Enabled = true;
                    
                }
                else
                {
                    lab_error.Text = "请输入正确的密码";
                }
            }
            else
            {
                lab_error.Text="请输入用户名";
            }
        }

        protected void btnOut_Click(object sender, EventArgs e)
        {
            if (txt_string.Text != "")
            {
                char[] a;
                string str = txt_string.Text;
                a = str.ToCharArray();
                for (int i = 0; i < a.Length; i++)
                {
                    txt_char.Text += a[i].ToString() + "\n";
                }

            }
        }

        protected void CheckBox1_CheckedChanged(object sender, EventArgs e)
        {
            string chk=chkb_auto.Checked?"yes":"no";
            if (chk == "yes")
            {
                lab_check.Text = "我是选中状态";
            }
            else
            {
                lab_check.Text = "我是非选中状态";
            }
        }

        protected void btn_fruit_Click(object sender, EventArgs e)
        {
            txt_myFavorite.Text = "";
            CheckBox chk;
            //定义控件类型
            foreach(Control chk_c in chk_wrap.Controls ){
                if (chk_c is CheckBox)
                {
                    chk = (CheckBox)chk_c;//转换为checkbox
                    if (chk.Checked)//选中项
                    {
                        txt_myFavorite.Text += chk.Text + ",";
                    }
                }
            }
        }

        protected void btn_foreachChar_Click(object sender, EventArgs e)
        {
            txt_myFavorite.Text="";
            char[] a = "ASDF".ToCharArray();
            foreach (char i in a)
            {
                txt_myFavorite.Text += i + "\n";
            }
        }
    }
}