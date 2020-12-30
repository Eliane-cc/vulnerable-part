<template>
  <div class="contain">
    <div class="contain-content">
      <div class="contain-title">台账信息填写</div>
      <a-row type="flex" justify="center" class="content">
        <a-col :span="18" class="col">
          <template v-for="(item,index) in ledgerList">
            <a-form-model ref="ruleForm" :model="ruleForm" v-bind="layout" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-form-model-item has-feedback :label="item.label">
                <template v-if="item.label == '出厂日期' || item.label == '有效期'">
                  <a-date-picker style="width: 100%;" placeholder="请选择日期" @change="selectActionTime" :format="dateFormat" :ref="item.name"/>
                </template>
                <template v-else-if="item.label == '点检周期'">
                  <a-input-number :min="0" :name="item.name" @change="onChange" allowClear :ref="item.name"  v-model="checkCycle"/> 月
                </template>
                <template v-else>
                  <a-input :placeholder="`请输入${item.label}`" :rows="3"  allowClear :ref="item.name"/>
                </template>
              </a-form-model-item>
            </a-form-model>
          </template>
          <div class="margin-top">
            <a-button type="primary" @click="submitForm('ruleForm')">
              提交
            </a-button>
            <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
              清空
            </a-button>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Ledger.vue",
    data(){
      return {
        ledgerList: [
          {
            label: '编号',
            name: 'name'
          },
          {
            label: '名称',
            name: 'name'
          },
          {
            label: '型号',
            name: 'name'
          },
          {
            label: '出厂日期',
            name: 'name'
          },
          {
            label: '生产厂家',
            name: 'name'
          },
          {
            label: '有效期',
            name: 'name'
          },
          {
            label: '归属部门',
            name: 'name'
          },
          {
            label: '具体地点',
            name: 'name'
          },
          {
            label: '点检周期',
            name: 'name'
          },

        ],
        ruleForm: {
          pass: '',
          checkPass: '',
          oldPass: '',
        },
        //自动创建表单
        form: this.$form.createForm(this),
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
        dateFormat: 'yyyy-MM-DD',
        checkCycle: ''
      }
    },
    methods: {
      //修改密码用户表单提交
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            //修改密码接口
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //点检周期改变事件
      onChange(value) {
        console.log('changed', value);
        this.checkCycle = value
      },
    }
  }
</script>

<style scoped>
  .contain{
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    padding: 10px;
  }
  .contain-content{
    width: 80%;
    border-radius: 7px;
    border: 1px solid rgba(24,144,255,0.5);
    margin-top: 10px;
  }
  .contain-title{
    font-size: 19px;
    background: #E6F7FF;
    font-weight: 600;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    padding: 10px;
    text-align: center;
    color: rgba(24,144,255,0.9);
  }
  .content{
    font-size: 16px;
    margin-top: 20px;
  }
  .title{
    text-align: right;
    font-weight: 500;
  }
  .text_left{
    text-align: left;
    margin-left: 10px;
  }
  .margin-top{
    margin-top: 15px;
    text-align: center;
  }
  .col{
    margin-bottom: 15px;
  }
</style>