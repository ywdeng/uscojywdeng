using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace _03_register_final
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            tblResult.Controls.Clear();
            TableRow row = makeTableHeaderRow("參數名稱", "參數值");
            tblResult.Controls.Add(row);
            foreach (String key in Request.Form.AllKeys)
            {
                row = makeTableRow(key, Request.Form[key]);
                tblResult.Controls.Add(row);
            }
        }

        private TableRow makeTableHeaderRow(string paraName, string paraValue)
        {
            TableRow row = new TableRow();
            TableHeaderCell th = new TableHeaderCell();
            Label label = new Label();
            label.Text = paraName;
            th.Controls.Add(label);
            row.Controls.Add(th);
            th = new TableHeaderCell();
            label = new Label();
            label.Text = paraValue;
            th.Controls.Add(label);
            row.Controls.Add(th);
            return row;
        }
		
        private TableRow makeTableRow(string paraName, string paraValue)
        {
            TableRow row = new TableRow();
            TableCell td = new TableCell();
            td.HorizontalAlign = HorizontalAlign.Right;
            Label label = new Label();
            label.Text = paraName;
            td.Controls.Add(label);
            row.Controls.Add(td);
            td = new TableHeaderCell();
            td.HorizontalAlign = HorizontalAlign.Left;
            label = new Label();
            label.Text = paraValue;
            td.Controls.Add(label);
            row.Controls.Add(td);
            return row;
        }
    }
}