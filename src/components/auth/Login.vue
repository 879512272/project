<template>
  <div>
    <div class="title">欢迎来到诚之优品</div>
    <el-card class="box-card">
      <el-form label-position="left" :model="formData" :rules="rules" ref="loginForm">
        <el-form-item label="用户账号" prop="mobile">
          <el-input v-model="formData.mobile"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <div class="login-btn-wrapper">
          <el-button class="login-btn" type="primary" @click="_login">登录</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import AuthApi from '../../api/auth'

  export default {
    components: {},
    data () {
      return {
        loading: false,
        formData: {
          mobile: '',
          password: ''
        },
        rules: {
          mobile: [
            {required: true, message: '请输入登录账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      _login () {
        this.$refs.loginForm(async (valid) => {
          if (valid) {
            this.loading = true
            try {
              await AuthApi.login(this.formData)
              this.loading = false
              this.$router.replace({name: 'home'})
            } catch (err) {
              this.loading = false
              this.$myErrorHandler.handle(this, err, '登录失败', true)
            }
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .title {
    margin-top: 50px;
    text-align: center;
    font-size: 32px;
    color: #20a0ff;
  }

  .box-card {
    width: 380px;
    margin: 30px auto;

    .auto-login-wrapper {
      text-align: left;
    }

    .login-btn-wrapper {
      margin-top: 60px;
      text-align: center;

      .login-btn {
        width: 100%;
      }
    }

  }
</style>
