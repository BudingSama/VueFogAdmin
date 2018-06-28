<template>
  <div class="signWrap">
    <el-card class="box-card">
      <p class="title">FogCloud</p>
      <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="email" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
          <el-input placeholder="请输入邮箱" prefix-icon="el-icon-message" type="email" v-model="ruleForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' }
    ]">
          <el-input placeholder="请输入密码" prefix-icon="el-icon-view" type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
        <router-link class="forget" to="">忘记密码</router-link>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { req } from '../../utils/request';

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入邮箱'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if(!value){
          callback(new Error('请输入密码'));
        }
      };
      return {
        ruleForm: {
          email: '',
          checkPass: '',
        },
      };
    },
    created() {
      if(localStorage.getItem('token')) {
        this.$router.push('/');
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //有效登录
                req({
                  url: '/manage/login/',
                  method: 'post',
                  param: {
                    username: this.ruleForm.email,
                    password: this.ruleForm.checkPass,
                  },
                }).then((res) => {
                  if (res !== -1 && res.data.meta.code === 0) {
                    localStorage.setItem('token', res.data.data.token);
                    this.$store.dispatch('setUser', res.data.data.user);
                    this.$router.push('/');
                  }
                });
          } else {
            return false;
          }
        });
      },
    }
  }
</script>
<style scoped>
  .signWrap {
    background: black;
    width: 100%;
    height: 100%;
    background: url('../../assets/bg.jpg') center center / cover no-repeat fixed;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 400px;
    height: 370px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 30px 50px;
  }
  .title{
    text-align: center;
    font-size: 30px;
    font-weight: 300;
    padding-bottom: 30px;
    border-bottom: 1px solid #ededed;
    margin-bottom: 50px;
  }
  .forget{
    text-decoration: none;
    cursor: pointer;
    color: #777;
    font-size: 12px;
    float: right;
  }
  .forget:hover{
    color: #409EFF;
  }
</style>
