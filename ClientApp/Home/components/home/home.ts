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

        if (this.disBtn) return;

        this.disBtn = true;

        $.ajax({
            url: './api/Login/LoginUser',
            data: JSON.stringify(this.userData),
            type:'POST',
            contentType:'application/json',
            success: data=> {
                this.disBtn = false;
                if (!data.type) {
                    this.errorMsg = data.msg;
                    return;
                }

                this.errorMsg = '成功登陆！！';
            },
            error: ()=> {
                this.errorMsg = "失去连接!!"
                this.disBtn = false;
            }
        })
    }

}

interface AjaxMsg {
    msg: string;
    body: object;
    type: boolean;
}
