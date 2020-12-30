<template>
  <!-- 需点检的设备信息页面 -->
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
        需点检的设备信息
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
        </a-card>
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
        </a-card>
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
        </a-card>
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
        </a-card>
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
        </a-card>
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
        </a-card>
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
        </a-card>
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
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Check.vue",

    data(){
      return{

      }
    },
    methods: {

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