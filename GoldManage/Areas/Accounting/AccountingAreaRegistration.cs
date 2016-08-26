using System.Web.Mvc;

namespace GoldManage.Areas.Accounting
{
    public class AccountingAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Accounting";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                name: "Accounting_default",
                url: "Accounting/{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                namespaces: new string[] { "GoldManage.Areas.Accounting.Controllers" }
            );
        }
    }
}