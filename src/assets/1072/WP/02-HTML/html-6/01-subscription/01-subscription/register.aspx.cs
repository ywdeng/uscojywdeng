using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace _01_subscription
{
    public partial class register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string txtName = Request["txtName"];
            string txtEmail = Request["txtEmail"];
            Response.Write("<section>");
            Response.Write("<header><hr><h2>訂閱電子報</h2><hr></header>");
            Response.Write("<p>感謝您！我們將會定期寄送電子報至下列位址：</p>");
            Response.Write("<p>姓名：" + txtName + "</p>");
            Response.Write("<p>電郵：" + txtEmail + "</p>");
            Response.Write("</section>");
        }
    }
}
