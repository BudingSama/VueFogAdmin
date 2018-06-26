<template>
<div>
  <el-form label-position="right" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
  <el-form-item label="组名称" prop="name">
    <el-input style="width: 350px;display: block" v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="授权模块" prop="desc">
    <el-select
      style="width: 350px;display: block"
      v-model="value10"
      multiple
      filterable
      allow-create
      default-first-option
    >
      <el-option
        v-for="item in options5"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item style="width: 550px;text-align: left">
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
  export default {
    name: 'GroupInfo',
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
          options5: [{
            value: 'HTML',
            label: 'HTML'
          }, {
            value: 'CSS',
            label: 'CSS'
          }, {
            value: 'JavaScript',
            label: 'JavaScript'
          }],
          value10: [],
        rules: {
          name: [
            { required: true, message: '请输入组名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请选择授权模块', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
