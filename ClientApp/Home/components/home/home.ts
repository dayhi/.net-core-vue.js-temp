import Vue from "vue";
import { Component } from "vue-property-decorator";
import $ from "jquery";

@Component
export default class HomeComponent extends Vue {

    userData = {
        userName_input: "",
        userPwd_input: ""
    }

    disBtn = false;
    errorMsg = "";

    sendLogin() {

        this.disBtn = true;

        fetch("api/Login/LoginUser", {
            method: "POST",
            body: JSON.stringify(this.userData),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => res.json() as Promise<AjaxMsg>)
            .then(ajaxmsg => {

                this.disBtn = false;

                if (!ajaxmsg.type) {
                    this.errorMsg = ajaxmsg.msg;
                    return;
                }

                this.errorMsg = "成功登陆！！";
            })
            .catch(error => {
                this.errorMsg = "失去连接!!"
                this.disBtn = false;
            })

    }

}

interface AjaxMsg {
    msg: string;
    body: object;
    type: boolean;
}
