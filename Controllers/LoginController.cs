using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace vueTest.Controllers {
    [Route ("api/[controller]")]
    public class LoginController : Controller {


        [HttpPost ("[action]")]
        public AjaxMsg LoginUser ([FromBody]User user) {
            var ajaxMsg = new AjaxMsg () { type = true };

            if (string.IsNullOrEmpty (user.userName_input) || string.IsNullOrEmpty (user.userPwd_input)) {
                ajaxMsg.type = false;
                ajaxMsg.msg = "用户名或密码为空";
            }

            

            return ajaxMsg;
        }

        public class AjaxMsg {
            public string msg { get; set; }
            public object body { get; set; }
            public bool type { get; set; }
        }

        public class User{
            public string userName_input{ get; set; }
            public string userPwd_input{ get; set; }
        }
    }
}