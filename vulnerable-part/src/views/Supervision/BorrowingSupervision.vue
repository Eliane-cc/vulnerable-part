<template>
  <div class="container">
    <!--  表格头部标签页  -->
    <div class="tag-vedio">
      <a-tabs default-active-key="1" @change="callback">
        <!--    未审核      -->
        <a-tab-pane key="1" tab="未审核">
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
                  <a-popconfirm title="是否审核通过?" cancelText="取消" okText="确定" @confirm="() => auditCertain(record)">
                    <a><a-icon type="check-circle" /> 审核</a>
                  </a-popconfirm>
                </div>
              </template>
            </a-table>
          </div>
        </a-tab-pane>
        <!--   使用中     -->
        <a-tab-pane key="2" tab="使用中">
          <!--  未监督信息    -->
          <div class="table">
            <a-table :columns="columns_using" :data-source="data" bordered  class="column">
              <template slot="operation" slot-scope="text,record,index">
                <template v-if="record.isReturn">
                  <div class="oper">
                    <a-popconfirm title="是否监督确认?" cancelText="取消" okText="确定" @confirm="() => superviseCertain(record)">
                      <a><a-icon type="check-circle" /> 归还确认</a>
                    </a-popconfirm>
                  </div>
                </template>
                <template v-else>
                  <div class="oper">
                    <a-tag color="#1890FF" class="using">使用中</a-tag>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </a-tab-pane>
        <!--   已归还     -->
        <a-tab-pane key="3" tab="已归还" force-render>
          <!--  已监督信息    -->
          <div class="table returnTable">
            <a-table :columns="columns_certain" :data-source="data" class="column">
              <template slot="operation" slot-scope="text,record,index">
                <div class="oper">
                  <a @click="detail(record)">详情</a>
                </div>
              </template>
            </a-table>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
    <action-modal :modalVisible.sync="isShowModal" :data.sync="modalData" :title="modalTitle"></action-modal>
  </div>
</template>

<script>
  import ActionModal from "../../components/Modal/ActionModal";
  //表格格式
  //未审核
  const columns = [
    {
      title: '设备名称',
      dataIndex: 'equipName',
      width: '11%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'equipName' },
    },
    {
      title: '设备型号',
      dataIndex: 'equipModel',
      width: '11%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'equipModel' },
    },
    {
      title: '借用人员',
      dataIndex: 'borrowPerson',
      width: '11%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowPerson' },
    },
    {
      title: '部门',
      dataIndex: 'part',
      width: '11%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'part' },
    },
    {
      title: '借用日期',
      dataIndex: 'borrowDate',
      width: '16%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowDate' },
    },
    {
      title: '借用地点',
      dataIndex: 'borrowPlace',
      width: '12%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowPlace' },
    },
    {
      title: '预归还日期',
      dataIndex: 'preReturnDate',
      width: '16%',
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
  //使用中
  const columns_using = [
    {
      title: '设备名称',
      dataIndex: 'equipName',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'equipName' },
    },
    {
      title: '设备型号',
      dataIndex: 'equipModel',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'equipModel' },
    },
    {
      title: '借用人员',
      dataIndex: 'borrowPerson',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowPerson' },
    },
    {
      title: '部门',
      dataIndex: 'part',
      width: '9%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'part' },
    },
    {
      title: '借用日期',
      dataIndex: 'borrowDate',
      width: '14%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowDate' },
    },
    {
      title: '借用地点',
      dataIndex: 'borrowPlace',
      width: '11%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowPlace' },
    },
    {
      title: '预归还日期',
      dataIndex: 'preReturnDate',
      width: '14%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'preReturnDate' },
    },
    {
      title: '借用审核人员',
      dataIndex: 'borrowSupPer',
      width: '13%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowSupPer' },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      align: 'center',
      scopedSlots: { customRender: 'operation' },
    },
  ];
  //已归还
  const columns_certain = [
    {
      title: '设备名称',
      dataIndex: 'equipName',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'equipName' },
    },
    {
      title: '设备型号',
      dataIndex: 'equipModel',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'equipModel' },
    },
    {
      title: '借用人员',
      dataIndex: 'borrowPerson',
      width: '10%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowPerson' },
    },
    {
      title: '借用日期',
      dataIndex: 'borrowDate',
      width: '15%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowDate' },
    },
    {
      title: '借用地点',
      dataIndex: 'borrowPlace',
      width: '13%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'borrowPlace' },
    },
    {
      title: '预归还日期',
      dataIndex: 'preReturnDate',
      width: '15%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'preReturnDate' },
    },
    {
      title: '归还日期',
      dataIndex: 'returnDate',
      width: '15%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'returnDate' },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      align: 'center',
      scopedSlots: { customRender: 'operation' },
    },
  ];

  const data = [];
  //表格数据
  for (let i = 0; i < 100; i++) {
    if (i%2 == 0){
      data.push({
        key: i.toString(),
        equipName: `卷筒`,
        equipModel: `型号一`,
        borrowPerson: `Elaine`,
        part: `部门${i}#`,
        borrowDate: `2021-01-06 14:00`,
        borrowPlace: `借用地点`,
        borrowSupPer: `Linda`,
        preReturnDate: `2021-01-10 14:00`,
        returnDate: `2021-01-09 11:00`,
        returnSupPer: `张三`,
        isReturn: true
      });
    } else{
      data.push({
        key: i.toString(),
        equipName: `干粉灭火器`,
        equipModel: `型号二`,
        borrowPerson: `Elaine`,
        part: `部门${i}#`,
        borrowDate: `2021-01-06 14:00`,
        borrowPlace: `借用地点`,
        borrowSupPer: `Linda`,
        preReturnDate: `2021-01-10 14:00`,
        returnDate: `2021-01-09 11:00`,
        returnSupPer: `张三`,
        isReturn: false
      });
    }

  }

  export default {
    name: "BorrowingSupervision.vue",
    data(){
      return{
        isShowModal: false,
        modalTitle: '',
        modalData: [],
        index: '0',
        data,
        columns,
        columns_certain,
        columns_using
      }
    },
    components: {
      ActionModal
    },
    methods: {
      //查看详情
      detail(value){
        let displayData = [
          {
            title: '设备名称',
            key: 'equipName',
            content: value.equipName
          },
          {
            title: '设备型号',
            key: 'equipModel',
            content: value.equipModel
          },
          {
            title: '借用人员',
            key: 'borrowPerson',
            content: value.borrowPerson
          },
          {
            title: '借用日期',
            key: 'borrowDate',
            content: value.borrowDate
          },
          {
            title: '借用地点',
            key: 'borrowPlace',
            content: value.borrowPlace
          },
          {
            title: '预归还日期',
            key: 'preReturnDate',
            content: value.preReturnDate
          },
          {
            title: '归还审核人',
            key: 'returnSupPer',
            content: value.returnSupPer
          },
          {
            title: '借用审核人',
            key: 'borrowSupPer',
            content: value.borrowSupPer
          }
        ]
        this.isShowModal = true
        this.modalTitle = '详情'
        this.modalData.displayData = displayData
      },
      //监督确认操作
      superviseCertain(value){

      },
      //审核
      auditCertain(value){

      }
    },
  }
</script>

<style lang="less" scoped>
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
  .using{
    margin-left: 10px;
  }
  .column{
    background-color: #ffffff;
  }
  .oper{
    /*display: flex;*/
    /*justify-content: space-between;*/
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

  /*覆盖ant默认样式*/
  .table{
    :global(.ant-table-thead > tr > th){
      padding: 15px 6px;
    }
    :global(.ant-table-tbody > tr > td){
      padding: 13px 6px;
    }
  }
  .returnTable{
    :global(.ant-table-thead > tr > th){
      background-color: rgba(230,247,255,0.6);
      color: #333333;
    }
    :global(.ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td){
      background-color: white;
    }
  }

  /* 覆盖默认的ant样式 */
  /*.tag-vedio{*/
  /*  :global(.ant-tabs-nav .ant-tabs-tab){*/
  /*    font-family: MicrosoftYaHei;*/
  /*    font-size: 17px;*/
  /*    padding: 8px 1px;*/
  /*    font-weight: 500;*/
  /*  }*/
  /*  :global(.ant-tabs-ink-bar){*/
  /*    height: 4px;*/
  /*  }*/
  /*}*/
</style>