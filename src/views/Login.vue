<template>
  <div class="login">
    <!-- 1.加⼊ -->
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
    </div>

    <div class="text-group">
      <div class="input-group">
        <input type="text" value="" placeholder="请输⼊⼿机号" />
        <button>获取验证码</button>
      </div>
    </div>
    <div class="text-group">
      <div class="input-group">
        <input type="text" value="" placeholder="验证码" />
      </div>
    </div>
    <!-- 错误提醒 -->
    <div v-if="false" class="invalid-feedback">报错信息</div>
    <!-- ⽤户服务协议 -->
    <div class="login-des">
      <p>
        新⽤户登录即⾃动注册，表示已同意
        <span>《⽤户服务协议》</span>
      </p>
    </div>
    <!-- 登录按钮 -->
    <div class="login-btn">
      <button>登录</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "Login",
};
</script>


<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
  /* 2.注释 */
  /* text-align: center; */
}
/* 3加⼊样式 */
.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
</style>
