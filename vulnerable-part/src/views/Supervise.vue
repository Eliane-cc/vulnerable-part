<template>
  <div class="contain">
    <div class="contain-content">
      <div class="contain-title">监督信息</div>
      <a-row type="flex" justify="center" class="content">
        <template v-for="(item,index) in infoList">
          <template v-if="item.label == '监督人员'">
            <a-col :span="4" :offset="5">
              {{item.label}}：
            </a-col>
            <a-col :span="8" class="col">
              <a-input placeholder="请输入监督人员" :rows="3"  allowClear :ref="item.name"/>
            </a-col>
          </template>
          <template v-else>
            <a-col :span="4" :offset="7">
              {{item.label}}：
            </a-col>
            <a-col :span="10" class="col">
              {{item.content}}
            </a-col>
          </template>
        </template>
      </a-row>
      <div class="margin-top">
        <a-button type="primary" @click="submit()">
          提交
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Supervise.vue",
    data(){
      return {
        infoList: [
          {
            label: '上次点检时间',
            content: '2021-01-06 15:12',
            name: 'name'
          },
          {
            label: '上次点检人员',
            content: '王辉',
            name: 'name'
          },
          {
            label: '借用人员',
            content: '李莉',
            name: 'name'
          },
          {
            label: '归还日期',
            content: '2021-02-06 15:12',
            name: 'name'
          },
          {
            label: '点检周期',
            content: '3周',
            name: 'name'
          },
          {
            label: '监督人员',
            content: '',
            name: 'name'
          }
        ],
        ruleForm: {
          pass: '',
          checkPass: '',
          oldPass: '',
        },
        //自动创建表单
        form: this.$form.createForm(this),
        labelCol: { span: 5, offset: 2 },
        wrapperCol: { span: 14 },
        dateFormat: 'yyyy-MM-DD',
        checkCycle: ''
      }
    },
    methods: {
      //表单提交

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
    background-color: #ffffff;
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
    margin-bottom: 20px;
  }
  .col{
    margin-bottom: 15px;
  }
</style>