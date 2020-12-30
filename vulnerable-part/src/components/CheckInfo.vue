<template>
  <!--点检设备页面  -->
  <div>
    <div class="result">
      <div class="flex flex-space space">
        <div class="flex flex-space">
          <div class="header-title">点检人员：</div>
          <div class="header-text">苏奕娜</div>
        </div>
        <div class="flex flex-space">
          <div class="header-title">点检日期：</div>
          <div class="header-text">2020-3.20</div>
        </div>
      </div>
      <div class="flex btn">
        <a-button @click="QRCode" type="primary">
          设备二维码
        </a-button>
        <a-button :style="{ marginLeft: '26px' }" @click="devNFC" type="primary">
          设备NFC
        </a-button>
      </div>
      <div class="result-title con margin-top">
        点检设备
      </div>
      <div class="result-content">
        <a-card hoverable style="width: 100%" class="margin-top">
          <div>
            <a-row>
              <a-col :span="6" :style="{ textAlign: 'left' }" class="result-title">
                型号:
              </a-col>
              <a-col :span="18" :style="{ textAlign: 'left' }">
                990020A1D-A
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="6" :style="{ textAlign: 'left' }" class="result-title">
                厂家：
              </a-col>
              <a-col :span="18" :style="{ textAlign: 'left' }">
                华为XXXX
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="6" :style="{ textAlign: 'left' }" class="result-title">
                位置：
              </a-col>
              <a-col :span="18" :style="{ textAlign: 'left' }">
                31-405架子上
              </a-col>
            </a-row>
          </div>
          <template slot="actions" class="ant-card-actions">
            <div @click="actionCheck()">
              <a-icon type="check-circle" />点检
            </div>
          </template>
        </a-card>
      </div>

    </div>
    <!--  维修、维护、更换弹窗  -->
    <check-modal :modalVisible.sync="isShowModal" :data.sync="modalData" :title="modalTitle" :dataList.sync="data"></check-modal>
  </div>
</template>

<script>
  import CheckModal from "./Modal/CheckModal";
  const data = [];

  export default {
    name: "CheckInfo.vue",
    components: {
      CheckModal
    },
    data(){
      return{
        isShowModal: false,
        modalTitle: '',
        modalData: [],
        data,
      }
    },
    methods: {
      //点检设备
      actionCheck(){
        console.log("dia")
        let inputCon = [
          {
            label: '铅封',
            placeholder: '请输入情况描述',
            name: 'maintenance_text'
          },
          {
            label: '喷嘴',
            placeholder: '请输入情况描述',
            name: 'maintenance_text'
          },
          {
            label: '有效期',
            placeholder: '请输入情况描述',
            name: 'maintenance_text'
          },
          {
            label: '压力表',
            placeholder: '请输入情况描述',
            name: 'maintenance_text'
          },
          {
            label: '情况描述',
            placeholder: '请输入情况描述',
            name: 'maintenance_text'
          },
          {
            label: '图片上传',
            placeholder: '请输入情况描述',
            name: 'maintenance_text'
          }
        ]
        let value = [
          {
            title: "型号",
            content: "XXXXX型号"
          },
          {
            title: "厂家",
            content: "华为工厂"
          }]
        this.isShowModal = true
        this.modalTitle = '点检设备'
        this.modalData.actionText = '点检设备'
        this.modalData.displayData = value
        this.modalData.createData = inputCon
      },
    }
  }
</script>

<style scoped>
  .flex{
    display: flex;
    flex-direction: row;
  }
  .flex-space{
    justify-content: space-between;
  }
  .space{
    margin-bottom: 10px;
    padding: 10px;
  }
  .header-title{
    font-size: 16px;
  }
  .header-text{
    font-size: 16px;

  }
  .search{
    justify-content: space-between;
    align-items: center;
  }
  .title{
    margin-right: 20px;
  }
  .btn{
    justify-content: center;
    margin-top: 15px;
  }
  .result{
    margin-top: 20px;
  }
  .result-title{
    font-weight: 600;
  }
  .margin-top{
    margin-top: 10px;
  }
  .con{
    padding: 10px;
    font-size: 16px;
    background-color: #f3f3f3;
  }
  .result-content{
    height: 75vh;
    overflow-y:auto;
  }
</style>