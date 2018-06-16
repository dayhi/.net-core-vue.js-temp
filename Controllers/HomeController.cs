using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using ServiceStack.OrmLite.Dapper;

namespace vueTest.Controllers {
    public class HomeController : Controller {
        public IActionResult Index () {
            return View ();
        }

        public IActionResult Error () {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View ();
        }

        public void Test () {
            MySqlConnection con = new MySqlConnection ("Data Source=127.0.0.1;port=3306;database=test_user;uid=root;pwd=Ft19951022;charset=utf8;");

            var id = con.QueryFirst<int> ("insert into User values(UUID(),'day',11,12345678901);select last_insert_id()");

            var list = con.Query<UserModel> ("select * from User");

            foreach (var User in list) {
                System.Console.WriteLine (User.Name);
            }

            con.Close ();
        }
    }

    public class UserModel {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public long Phone { get; set; }
    }
}