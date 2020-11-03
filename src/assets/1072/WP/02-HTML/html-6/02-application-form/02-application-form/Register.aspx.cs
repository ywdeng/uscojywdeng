using System;

namespace _02_application_form
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string[] keys = Request.Form.AllKeys;
            Response.Write("<table border='0'>");
			Response.Write("<tr><th>參數名稱</th><th>參數值</th></tr>");
            for (int i = 0; i < keys.Length; i++)
            {
                Response.Write("<tr><td>" + keys[i] + "</td>");
                Response.Write("<td>" + Request[keys[i]] + "</td></tr>");
            }
            Response.Write("</table>");
        }
    }
}
