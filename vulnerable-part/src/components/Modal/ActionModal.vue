<template>
  <div>
    <!--  新增  -->
    <a-modal v-if="title == '新增'" :visible="modalVisible" :title="title" @ok="handleOk" :okText="title"  @cancel="handleCancel" cancelText="取消">
      <div v-if="data.createData">
        <!--  输入    -->
        <a-row v-for="(item,index) in data.createData" :key="index">
          <a-form :form="form" :label-col="{ span: 4,offset: 1 }" :wrapper-col="{ span: 17,offset: 1 }">
            <a-form-item :label="item.label">
              <template v-if="item.label == '名称'">
                <a-tree-select
                  v-model="nameValue"
                  show-search
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '260px', overflow: 'auto' }"
                  placeholder="请选择"
                  allow-clear
                  tree-default-expand-all
                >
                  <a-tree-select-node key="random1" value="铅封">
                    <div slot="title">铅封</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random2" value="喷嘴">
                    <div slot="title">喷嘴</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="有效期">
                    <div slot="title">有效期</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="压力表">
                    <div slot="title">压力表</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="附件">
                    <div slot="title">附件</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="瓶体">
                    <div slot="title">瓶体</div>
                  </a-tree-select-node>
                </a-tree-select>
              </template>
              <template v-else-if="item.label == '型号'">
                <a-tree-select
                  v-model="modelValue"
                  show-search
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '260px', overflow: 'auto' }"
                  placeholder="请选择"
                  allow-clear
                  tree-default-expand-all
                >
                  <a-tree-select-node key="random1" value="001">
                    <div slot="title">001</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random2" value="002">
                    <div slot="title">002</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="003">
                    <div slot="title">003</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="004">
                    <div slot="title">004</div>
                  </a-tree-select-node>
                </a-tree-select>
              </template>
              <!--     点检内容         -->
              <template v-else-if="item.label == '点检内容'">
                <a-row>
                  <a-col :span="17">
                    <a-input :placeholder="`请输入${item.label}`" :rows="3" @change="editContent(item,index)" :ref="item.name" v-model="checkValue"/>
                  </a-col>
                 <a-col :span="5" :offset="2">
                   <a-button type="primary" @click="addCheck">
                     添加
                   </a-button>
                 </a-col>
                </a-row>
                <!--      点检内容          -->
                <a-card size="small" title="已选的点检内容" class="margin-top" v-if="checkedShow">
                  <template v-for="(item) in checkDev">
                    <div class="checked">
                      <a-icon type="minus-circle" class="delete" @click="deleteDev(item)"/>
                      <span class="text">{{item}}</span>
                    </div>
                  </template>
                </a-card>
              </template>
              <template v-else>
                <a-row>
                  <a-col :span="17">
                    <a-input :placeholder="`请输入${item.label}`" :rows="3" @change="editContent(item,index)" :ref="item.name"/>
                  </a-col>
                  <a-col :span="5" :offset="2">
                    <a-button type="primary" @click="addCheck">
                      添加
                    </a-button>
                  </a-col>
                </a-row>
                <!--      点检内容          -->
                <a-card size="small" title="已选的点检内容" class="margin-top">
                  <a slot="extra" href="#">移除</a>
                  <a :style="{ borderBottom: '1px solid #E9E9E9' }" slot="extra">
                    <a-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange">
                      Check all
                    </a-checkbox>
                  </a>
                  <br />
                  <a-checkbox-group v-model="checkedList" :options="plainOptions" @change="onChange" />
                </a-card>
              </template>
            </a-form-item>
          </a-form>
        </a-row>
      </div>
    </a-modal>
    <!--  编辑  -->
    <a-modal v-if="title == '编辑'" :visible="modalVisible" :title="title" @ok="handleOk" :okText="title"  @cancel="handleCancel" cancelText="取消">
      <div v-if="data.editData">
        <!--  输入    -->
        <a-row v-for="(item,index) in data.editData" :key="index">
          <a-form :form="form" :label-col="{ span: 4,offset: 1 }" :wrapper-col="{ span: 17,offset: 1 }">
            <a-form-item :label="item.title">
              <template v-if="item.title == '名称'">
                <a-tree-select
                  v-model="item.content"
                  show-search
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '260px', overflow: 'auto' }"
                  placeholder="请选择"
                  allow-clear
                  tree-default-expand-all
                >
                  <a-tree-select-node key="random1" value="铅封">
                    <div slot="title">铅封</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random2" value="喷嘴">
                    <div slot="title">喷嘴</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="有效期">
                    <div slot="title">有效期</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="压力表">
                    <div slot="title">压力表</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="附件">
                    <div slot="title">附件</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="瓶体">
                    <div slot="title">瓶体</div>
                  </a-tree-select-node>
                </a-tree-select>
              </template>
              <template v-else-if="item.title == '型号'">
                <a-tree-select
                  v-model="item.content"
                  show-search
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '260px', overflow: 'auto' }"
                  placeholder="请选择"
                  allow-clear
                  tree-default-expand-all
                >
                  <a-tree-select-node key="random1" value="001">
                    <div slot="title">001</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random2" value="002">
                    <div slot="title">002</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="003">
                    <div slot="title">003</div>
                  </a-tree-select-node>
                  <a-tree-select-node key="random3" value="004">
                    <div slot="title">004</div>
                  </a-tree-select-node>
                </a-tree-select>
              </template>
              <template v-else-if="item.title == '点检内容'">
                <a-row>
                  <a-col :span="17">
                    <a-input :placeholder="`请输入${item.title}`" :rows="3" @change="editContent(item,index)" :ref="item.name" v-model="checkValue"/>
                  </a-col>
                  <a-col :span="5" :offset="2">
                    <a-button type="primary" @click="addCheck">
                      添加
                    </a-button>
                  </a-col>
                </a-row>
                <!--      点检内容          -->
                <a-card size="small" title="已选的点检内容" class="margin-top" v-if="checkedShowEdit">
                  <template v-for="(item) in checkedDev">
                    <div class="checked">
                      <a-icon type="minus-circle" class="delete" @click="deleteDev(item)"/>
                      <span class="text">{{item}}</span>
                    </div>
                  </template>
                </a-card>
              </template>
              <template v-else>
                <a-textarea :placeholder="`请输入${item.title}`" :rows="3" :name="item.name" v-model="item.content"/>
              </template>
            </a-form-item>
          </a-form>
        </a-row>
      </div>
    </a-modal>
    <!--  详情  -->
    <a-modal :visible="modalVisible" :title="title" @ok="handleOk" @cancel="handleCancel" cancelText="取消" okText="确定" v-else-if="title == '详情'">
      <div>
        <!--  设备基本信息显示    -->
        <div v-if="data.displayData">
          <a-row type="flex" justify="center">
            <a-col :span="12" v-for="(item,index) in data.displayData" :key="index" class="margin-bottom" >
              <a-col :span="10" class="title">
                {{item.title}}：
              </a-col>
              <a-col :span="14" class="text_center">
                {{item.content}}
              </a-col>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>

  export default {
    name: "ActionModal.vue",
    props: ['data','modalVisible','title'],
    data(){
      return{
        form: this.$form.createForm(this, { name: 'coordinated' }),
        nameValue: '',
        modelValue: '',
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
        plainOptions,
        checkDev: [],
        checkValue: '',
        checkedShow: false,
        checkedDev: ['喷嘴0','喷嘴1','铅封'],
        checkedShowEdit: true
      }
    },
    methods: {
      //添加点检内容
      addCheck(){
        if(this.checkValue){
          this.checkDev.push(this.checkValue)
          this.checkedShow = true
          this.checkValue = ''
        }else {
          this.$message.warning('添加的点检内容不能为空');
        }
      },
      //删除点检内容
      deleteDev(value){
        this.checkDev = this.checkDev.filter(item => {
          if(item !== value) {
            return item
          }
        })
        if(JSON.stringify(this.checkDev) === '[]'){
          this.checkedShow = false
        }
      },
      handleOk(e) {
        console.log(e);
        this.modalVisible = false;
        this.$emit("update:modalVisible",false)
      },
      //取消按钮事件
      handleCancel(e) {
        // this.form.resetFields();
        this.$emit("update:modalVisible",false)
      },
      onChange(checkedList) {
        this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
        this.checkAll = checkedList.length === plainOptions.length;
      },
      onCheckAllChange(e) {
        Object.assign(this, {
          checkedList: e.target.checked ? plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked,
        });
      },
    }
  }
</script>

<style scoped>
  .margin-top{
    margin-top: 10px;
    width: 100%;
  }
  .margin-bottom{
    margin-bottom: 10px;
  }
  .checked{
    font-size: 16px;
    margin-bottom: 6px;
  }
  .delete{
    color: #1890FF;
    cursor: pointer;
  }
  .text{
    margin-left: 8px;
  }
  .title{
    font-weight: 600;
    font-size: 14px;
  }
</style>