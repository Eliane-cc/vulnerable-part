<template>
  <div>
    <a-modal :visible="modalVisible" :title="title" @ok="handleCreate(data.actionText)" @cancel="handleCancel" cancelText="取消" okText="提交">
      <div v-if="data.createData">
        <!--  设备基本信息显示    -->
        <div v-if="data.displayData">
          <a-row type="flex" justify="center">
            <a-col :span="12" v-for="(item,index) in data.displayData" :key="index" class="margin-top" >
              <a-col :span="8" class="title">
                {{item.title}}：
              </a-col>
              <a-col :span="16" class="text_center">
                {{item.content}}
              </a-col>
            </a-col>
          </a-row>
          <a-divider dashed/>
        </div>
        <!--  输入    -->
<!--        <a-row v-for="(item,index) in data.createData" :key="index" class="margin-top">-->
        <template  v-for="(item,index) in data.createData">
          <a-row :key="index"  class="margin-top">
            <a-col :span="22" offset="2">
              <a-col :span="6" class="title">
                {{item.label}}：
              </a-col>
              <a-col :span="17">
                <template v-if="item.label == '情况描述'">
                  <a-textarea :placeholder="item.placeholder" :rows="3" :name="item.name" allowClear/>
                </template>
                <template v-else-if="item.label == '图片上传'">
                  <a-upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    list-type="picture"
                    :default-file-list="fileList"
                  >
                    <a-button> <a-icon type="upload" /> upload </a-button>
                  </a-upload>
                </template>
                <template v-else>
                  <a-switch checked-children="正常" un-checked-children="异常" default-checked />
                </template>
              </a-col>
            </a-col>
          </a-row>
<!--          <a-form :form="form" layout="horizontal" :label-col="{ span: 4,offset: 1 }" :wrapper-col="{ span: 15,offset: 1 }">-->
<!--            <a-form-item :label="item.label">-->
<!--              <template v-if="item.label == '情况描述'">-->
<!--                <a-textarea :placeholder="item.placeholder" :rows="3" :name="item.name" allowClear/>-->
<!--              </template>-->
<!--              <template v-else-if="item.label == '图片上传'">-->
<!--                <a-upload-->
<!--                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"-->
<!--                  list-type="picture"-->
<!--                  :default-file-list="fileList"-->
<!--                >-->
<!--                  <a-button> <a-icon type="upload" /> upload </a-button>-->
<!--                </a-upload>-->
<!--              </template>-->
<!--              <template v-else>-->
<!--                <a-switch checked-children="正常" un-checked-children="异常" default-checked />-->
<!--              </template>-->
<!--            </a-form-item>-->
<!--          </a-form>-->
        </template>

<!--        </a-row>-->
      </div>
    </a-modal>
  </div>
</template>

<script>
  export default {
    name: "CheckModal.vue",
    props: ['data','modalVisible','title','dataList'],
    data(){
      return{
        form: this.$form.createForm(this, { name: 'coordinated' }),
        fileList: [],
        value: '',
        isShow: false,
        validatorRules: {
          common: {
            rules: [
              {
                required: true,
                message: '该字段不能为空，请重新输入'
              }
            ]
          },
        },
      }
    },
    methods: {
      //新增确定事件
      handleCreate(text) {
        let data;
        // 拉取表单数据的方法
        this.form.validateFields((err, values) => {
          if (!err) {
            data = this.form.getFieldsValue()
            console.log("表单数据",data)
            this.confirmCreateLoading = true
            if (data){
              //新增用户
              if (text == "新增用户"){
                addUser(data)
                  .then((res) => {
                    if (res.msg == "SUCCESS"){
                      this.$message.success("添加用户成功！");
                      this.form.resetFields();
                      //重新刷新用户列表
                      this.userList();
                    }else{
                      this.$message.error(res.msg);
                      this.form.resetFields();
                    }
                    this.$emit("update:modalVisible",false);
                  })
                this.confirmCreateLoading = false
              }
              else if (text == '新增设备'){
                addDev(data)
                  .then((res) => {
                    console.log("res",res)
                    if (res.msg == "SUCCESS"){
                      this.$message.success("添加设备成功！");
                      this.form.resetFields();
                      //重新刷新设备
                      this.devList();
                    }else{
                      this.$message.error(res.msg);
                      this.form.resetFields();
                    }
                    this.$emit("update:modalVisible",false);
                  })
                this.confirmCreateLoading = false
              }
              else if (text == '新增零件'){
                data.eId = this.data.value.eId
                data.lifespan = this.lifespan
                data.starttime = this.starttime
                addEquipment(data)
                  .then((res) => {
                    console.log("res",res)
                    if (res.msg == "SUCCESS"){
                      this.$message.success("添加零件成功！");
                      this.form.resetFields();
                      //重新刷新零件列表
                      this.devList();
                    }else{
                      this.$message.error(res.msg);
                      this.form.resetFields();
                    }
                    this.$emit("update:modalVisible",false);
                  })
                this.confirmCreateLoading = false
              }
            }
          }
        })
      },
      //取消按钮事件
      handleCancel(e) {
        this.form.resetFields();
        this.$emit("update:modalVisible",false)
      },
    }
  }
</script>

<style scoped>
  .title{
    /*text-align: right;*/
    font-weight: 600;
    font-size: 14px;
  }
  .margin-top{
    margin-top: 10px;
  }
  .margin-top-input{
    margin-top: 20px;
  }
  /* 上传图片样式 */
  .upload-list-inline >>> .ant-upload-list-item {
    float: left;
    width: 200px;
    margin-right: 8px;
  }
  .upload-list-inline >>> .ant-upload-animate-enter {
    animation-name: uploadAnimateInlineIn;
  }
  .upload-list-inline >>> .ant-upload-animate-leave {
    animation-name: uploadAnimateInlineOut;
  }
</style>