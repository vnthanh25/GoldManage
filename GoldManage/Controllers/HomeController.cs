using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace GoldManage.Controllers
{
    //[Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Views(string screen)
        {
            //// Return directly.
            //return new FilePathResult("~/Views/Home/views/main.html", "text/html");

            // Return in the view.
            ViewBag.screen = "main.html";
            return View();
        }
    }
}
