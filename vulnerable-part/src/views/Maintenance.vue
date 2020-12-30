<template>
  <div class="contain">
    <div>
      <!--  查询    -->
      <a-form class="form" :form="form" @submit="handleSearch">
        <a-row :gutter="24">
          <a-col
            v-for="(item,index) in label"
            :key="index"
            :span="10"
            class="margin-bottom"
          >
            <div class="flex-center">
              <a-col :span="5">
                {{item.title}}：
              </a-col>
              <a-col :span="15">
                <a-tree-select
                  v-model="value"
                  show-search
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '260px', overflow: 'auto' }"
                  placeholder="请选择"
                  allow-clear
                  tree-default-expand-all
                >
                  <a-tree-select-node key="random1" value="车间0">
                    <div slot="title">车间0</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random2" value="sss">
                    <div slot="title">车间1</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="sss">
                    <div slot="title">车间2</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="sss">
                    <div slot="title">车间4</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="sss">
                    <div slot="title">车间0</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="sss">
                    <div slot="title">车间0</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="sss">
                    <div slot="title">车间0</div>
                  </a-tree-select-node>  <a-tree-select-node key="random3" value="sss">
                  <div slot="title">车间0</div>
                </a-tree-select-node>  <a-tree-select-node key="random3" value="sss">
                  <div slot="title">车间0</div>
                </a-tree-select-node>  <a-tree-select-node key="random3" value="车间0">
                  <div slot="title">车间0</div>
                </a-tree-select-node>  <a-tree-select-node key="random3" value="车间8">
                  <div slot="title">车间8</div>
                </a-tree-select-node>
                </a-tree-select>
              </a-col>

            </div>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24" :style="{ textAlign: 'right' }">
            <a-button @click="search" type="primary">
              筛选
            </a-button>
            <a-button :style="{ marginLeft: '8px' }" @click="createInfo" type="primary">
              新增
            </a-button>
          </a-col>
        </a-row>
      </a-form>
      <!--  表格列表信息    -->
      <div class="table">
        <a-table :columns="columns" :data-source="data" bordered class="column">
          <template slot="operation" slot-scope="text,record,index">
            <div v-if="record.children" class="editable-row-operations">
              <span class="oper">
                  <a @click="() => editInfo(record,text)"><a-icon type="edit" />编辑</a>
                  <a-popconfirm title="是否确定删除?" cancelText="取消" okText="确定" @confirm="() => deleteDev(record)">
                    <a><a-icon type="delete" />删除</a>
                  </a-popconfirm>
                </span>
            </div>
          </template>
        </a-table>
      </div>

      <!--  新增、编辑弹窗    -->
      <action-modal :modalVisible.sync="isShowModal" :data.sync="modalData" :title="modalTitle"></action-modal>
    </div>
  </div>
</template>

<script>
  import ActionModal from "../components/Modal/ActionModal";
  //表格格式
  const columns = [
    {
      title: '',
      dataIndex: 'index',
      width: '8%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'index' },
    },
    {
      title: '名称',
      dataIndex: 'name',
      width: '24%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'name' },
    },
    {
      title: '型号',
      dataIndex: 'model',
      width: '24%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'model' },
    },
    {
      title: '点检内容',
      dataIndex: 'checkContent',
      width: '26%',
      ellipsis: true,
      align: 'center',
      scopedSlots: { customRender: 'checkContent' },
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
  for (let i = 0; i < 25; i++) {
    data.push({
      name: `干粉${i}`,
      model: `00${i}#`,
      checkContent: `喷嘴${i}`,
      children: [
        {
          name: `干粉${i}`,
          model: `00${i}#`,
          checkContent: `喷嘴${i}`,
        },
        {
          name: `干粉${i}`,
          model: `00${i}#`,
          checkContent: `铅封${i}`,
        }
      ]
    });
  }
  export default {
    name: "Maintenance.vue",
    components: {
      ActionModal
    },
    data(){
      this.cacheData = data.map(item => ({ ...item }));
      return{
        label: [
          {
            title: '型号',
            placeholder: '请输入型号',
            name: 'c_name'
          },
          {
            title: '名称',
            placeholder: '请输入名称',
            name: 'c_name'
          }
        ],
        isShowModal: false,
        modalTitle: '',
        modalData: [],
        index: '0',
        form: this.$form.createForm(this, { name: 'advanced_search' }),
        data,
        columns,
        editingKey: '',
        treeExpandedKeys: [],
        value: undefined,
      }
    },
    methods: {
      //新增点检设备信息
      createInfo(){
        this.isShowModal = true
        this.modalTitle = '新增'
        let data = [
          {
            label: '名称',
            name: 'name'
          },
          {
            label: '型号',
            name: 'model'
          },
          {
            label: '点检内容',
            name: 'eName'
          }
        ]
        this.modalData.createData = data
      },
      //编辑点检信息
      //编辑
      editInfo(value,text) {
        let editData = [
          {
            title: '名称',
            key: 'name',
            content: value.name,
            name: 'name'
          },
          {
            title: '型号',
            key: 'model',
            content: value.model,
            name: 'model'
          },
          {
            title: '点检内容',
            key: 'checkContent',
            content: value.checkContent,
            name: 'checkContent'
          }
        ]
        this.isShowModal = true
        this.modalTitle = '编辑'
       // this.modalData.actionText = '编辑设备'
        this.modalData.editData = editData
      //  this.modalData.value = value
       // this.modalData.displayData = ""
        //this.modalData.pageNum = this.pageNum
      },
      //表单查询
      handleSearch(e) {
        this.form.validateFields((error, values) => {
          console.log('error', error);
          console.log('Received values of form: ', values);
        });
      },

    },
  }
</script>

<style scoped>
  .contain{
    color: #ffffff;
  }
  .form {
    padding: 24px;
    background: #ffffff;
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
  .oper{
    display: flex;
    justify-content: space-between;
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