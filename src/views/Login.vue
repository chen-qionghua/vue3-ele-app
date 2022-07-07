<template>
  <div class="login">
    <!-- 1.加⼊ -->
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
    </div>
    <InputGroup
      type="number"
      placeholder="请输入手机号码"
      v-model:value="phone"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getVerifyCode"
    />
    <!-- 验证码 -->
    <InputGroup
      type="number"
      v-model:value="verifyCode"
      placeholder="验证码"
      :error="errors.code"
    />

    <!-- ⽤户服务协议 -->
    <div class="login-des">
      <p>
        新⽤户登录即⾃动注册，表示已同意
        <span>《⽤户服务协议》</span>
      </p>
    </div>
    <!-- 登录按钮 -->
    <div class="login-btn">
      <button :disabled="isClick" @click="handleLogin">登录</button>
    </div>
  </div>
</template>


<script>
import InputGroup from "../components/InputGroup.vue";
export default {
  name: "Login",
  components: { InputGroup },
  data() {
    return {
      phone: "",
      errors: {},
      btnTitle: "获取验证码",
      disabled: false,
      verifyCode: "",
    };
  },
  computed: {
    isClick() {
      if (!this.phone || !this.verifyCode) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async getVerifyCode() {
      if (this.validatePhone()) {
        const res = await this.$axios.post("api/posts/sms_send", {
          phone: this.phone,
        });
        console.log(res);
        this.validateBtn();
      }
    },
    validatePhone() {
      if (!this.phone.length) {
        this.errors = {
          phone: "请填写手机号",
        };
        return false;
      } else if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.errors = {
          phone: "请填写正确的手机号",
        };
        return false;
      } else {
        this.errors = {};
      }
      return true;
    },
    validateBtn() {
      let time = 13;
      let timer = setInterval(() => {
        if (time === 0) {
          this.btnTitle = "获取验证码";
          this.disabled = false;
        } else {
          //倒计时
          this.btnTitle = time + "秒后重试";
          time--;
          this.disabled = true;
        }
      }, 1000);
    },

    async handleLogin() {
      // 取消错误提醒
      this.errors = {};
      const res = await this.$axios
        .post("/api/posts/sms_back", {
          phone: this.phone,
          code: this.verifyCode,
        })
        .then(() => {
          // 配置本地存储
          localStorage.setItem("ele_login", true);
          this.$router.push("/");
        })
        .catch((err) => {
          this.error = { code: err.response.data.msg };
        });
    },
  },
};
</script>


<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}
.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.text-group,
.login-des,
.login-btn {
  margin-top: 20px;
}
.login-des {
  color: #aaa;
  line-height: 22px;
}
.login-des span {
  color: #4d90fe;
}
.login-btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login-btn button[disabled] {
  background-color: #8bda81;
}
</style>
