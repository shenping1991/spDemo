using System;//提供基本类 
using System.Collections.Generic;
using System.Linq;//提供使用Linq进行查询的类和接口
using System.Web;//提供使用浏览器和服务器互助通信的接口和类，httpRequest类
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;//提供对ado.net类的访问，如我们常用的Dataset类
using System.Configuration;//提供处理配置文件中的数据类
using System.Data.SqlClient;

namespace SpDemo
{
    public partial class addGroup : System.Web.UI.Page
    {
        static string ConnStr = ConfigurationManager.AppSettings["ConnectionString"];
        SqlConnection conn = new SqlConnection(ConnStr);
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)//第一次加载页面
            {
                BindList();
                BindddlGroup();   
            }
            else
            {
                return;
            }
        }
        void BindList()
        {
            string sql = "select * from WW_group";
            SqlDataAdapter da = new SqlDataAdapter(sql, conn);
            DataSet ds = new DataSet();
            da.Fill(ds);
            if (ds.Tables[0].Rows.Count > 0)
            {
                GVGroup.DataSource = ds;
                GVGroup.DataBind();
            }
        }
        void BindddlGroup() 
        {
            string sql = "select * from WW_group";
            SqlDataAdapter da = new SqlDataAdapter(sql, conn);
            DataSet ds = new DataSet();
            da.Fill(ds);
            ddlGroup.DataTextField = "groupName";
            ddlGroup.DataValueField = "groupID";
            ddlGroup.DataSource=ds.Tables[0];
            ddlGroup.DataBind();
        }

        protected void btn_addGroup_Click(object sender, EventArgs e)
        {
            string gName = txtGroupName.Text;
            string sql = "insert into WW_group values ('" + gName + "')";
            SqlCommand cmd = new SqlCommand(sql, conn);
            conn.Open();
            int i = cmd.ExecuteNonQuery();
            conn.Close();
            if (i > 0)
            {
                Response.Write("添加组成功！");
                txtGroupName.Text = "";
                BindList();
            }
        }

        protected void btnAddUser_Click(object sender, EventArgs e)
        {
            int groupId = Convert.ToInt32(ddlGroup.SelectedValue);
            Response.Write(groupId);
        }
    }
}