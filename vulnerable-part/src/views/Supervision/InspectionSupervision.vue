<template>
  <div class="container">
    <!--  表格头部标签页  -->
    <div class="tag-vedio">
      <a-tabs default-active-key="1" @change="callback">
        <!--    未监督      -->
        <a-tab-pane key="1" tab="未确认">
          <!--  未监督信息    -->
          <div class="table">
            <a-table :columns="columns" :data-source="data" bordered  class="column">
              <template
                v-for="col in ['workshop', 'machine', 'equitment','equitmentCode','part','partCode','operation']"
                :slot="col"
                slot-scope="text,record,index"
              >
                <div :key="index" class="column-content" slot="title" :title="text">
                  {{ text }}
                </div>
              </template>
              <template slot="operation" slot-scope="text,record,index">
                <div class="oper">
                  <a @click="supervise(record)"><a-icon type="check-circle" /> 确认</a>
                </div>
              </template>
            </a-table>
          </div>
        </a-tab-pane>
        <!--   已监督     -->
        <a-tab-pane key="2" tab="已确认" force-render>
          <!--  已监督信息    -->
          <div class="table">
            <a-table :columns="columns_certain" :data-source="data" class="column">
              <template
                v-for="col in ['workshop', 'machine', 'equitment','equitmentCode','part','partCode','operation']"
                :slot="col"
                slot-scope="text,record,index"
              >
                <div :key="index" class="column-content" slot="title" :title="text">
                  {{ text }}
                </div>
              </template>
            </a-table>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
  //表格格式
  const columns = [
    {
      title: '名称',
      dataIndex: 'borrowPerson',
      width: '15%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowPerson' },
    },
    {
      title: '型号',
      dataIndex: 'part',
      width: '15%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'part' },
    },
    {
      title: '厂家',
      dataIndex: 'borrowDate',
      width: '18%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowDate' },
    },
    {
      title: '地点',
      dataIndex: 'borrowPlace',
      width: '17%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowPlace' },
    },
    {
      title: '上次点检时间',
      dataIndex: 'preReturnDate',
      width: '18%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'preReturnDate' },
    },
    {
      title: '上次点检人',
      dataIndex: 'borrowPlace',
      width: '17%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowPlace' },
    },
    {
      title: '周期',
      dataIndex: 'preReturnDate',
      width: '18%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'preReturnDate' },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      align: 'center',
      scopedSlots: { customRender: 'operation' },
    },
  ];
  const columns_certain = [
    {
      title: '借用人员',
      dataIndex: 'borrowPerson',
      width: '15%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowPerson' },
    },
    {
      title: '部门',
      dataIndex: 'part',
      width: '15%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'part' },
    },
    {
      title: '借用日期',
      dataIndex: 'borrowDate',
      width: '18%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowDate' },
    },
    {
      title: '借用地点',
      dataIndex: 'borrowPlace',
      width: '17%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowPlace' },
    },
    {
      title: '预归还日期',
      dataIndex: 'preReturnDate',
      width: '18%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'preReturnDate' },
    },
    {
      title: '已归还日期',
      dataIndex: 'returnDate',
      align: 'center',
      scopedSlots: { customRender: 'returnDate' },
    },
  ];

  const data = [];
  //表格数据
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i.toString(),
      borrowPerson: `Elaine`,
      part: `部门${i}#`,
      borrowDate: `2021-01-06 14:00`,
      borrowPlace: `借用地点`,
      preReturnDate: `2021-01-10 14:00`,
      returnDate: `2021-01-09 11:00`
    });
  }

  export default {
    name: "InspectionSupervision.vue",
    data(){
      return{
        isShowModal: false,
        modalTitle: '',
        modalData: [],
        index: '0',
        data,
        columns,
        columns_certain
      }
    },
    methods: {
      //未监督确认
      supervise(value){

      }
    },
  }
</script>

<style scoped>
  .flex{
    display: flex;
    flex-direction: row;
  }
  .container{
    width: 77vw;
    height: 100%;
    background-color: #ffffff;
    border-radius: 4px;
    border: 1px solid #eeeeee;
    padding: 5px 13px;
  }
  .tag-vedio{
    text-align: center;
  }

  .form {
    padding: 24px;
    background: #fbfbfb;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
  }
  .form .ant-form-item {
    display: flex;
  }
  .table{
    background-color: #fbfbfb;
    margin-top: 30px;
    border-radius: 6px;
  }
  .column{
    background-color: #ffffff;
  }
  .column-content{
    overflow: hidden;
  }
  .flex-center{
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
  }
  .margin-bottom{
    margin-bottom: 20px;
  }

</style>