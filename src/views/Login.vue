<template>
  <div>
    <el-form
      :rules="rules"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      ref="loginForm"
      :model="loginForm"
      class="loginContainer"
    >
      <h3 class="loginTitle">系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          auto-complete="false"
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          auto-complete="false"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          type="text"
          auto-complete="false"
          v-model="loginForm.code"
          placeholder="点击图片更换验证码"
          style="width: 250px; margin-right: 5px"
        ></el-input>
        <img :src="captchaUrl" @click="updateCaptcha" />
      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="submitLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      captchaUrl: "captcha?time=" + new Date(),
      loginForm: {
        username: "admin",
        password: "123",
        code: "",
      },
      loading: false,
      checked: true,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    // 没有接口，先验证后直接跳转
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // this.loading = true
          this.$router.replace("/home");
        } else {
          this.$message.error("请输入所有字段!");
          return false;
        }
      });
    },
    /*
    这是有接口的情况
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          postRequest("/login", this.loginForm).then((resp) => {
            if (resp) {
              this.$router.replace("/home");
            }
          });
        } else {
          this.$message.error("请输入所有字段!");
          return false;
        }
      });
    },
    */
    updateCaptcha() {
      this.captchaUrl = "/captcha?time" + new Date();
    },
  },
};
</script>


<style scoped>
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.loginTitle {
  margin: 0px auto 40px auto;
  text-align: center;
}

.loginRemember {
  text-align: left;
  margin: 0 0 15px 0;
}

.el-form-item__content {
  display: flex;
  align-items: center;
}
</style>