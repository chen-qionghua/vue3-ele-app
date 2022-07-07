<template>
  <div class="login">
    <!-- 1.加⼊ -->
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
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
