<template>
  <div class="app-container">
    <upload-excel
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
    ></upload-excel>
    <el-table
      :data="tables.tableData"
      border
      highlight-current-row
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
      v-for="item of tables.tableHeader"
      :key="item"
      :prop="item"
      :label="item"
      > </el-table-column>
    </el-table>
  </div>
</template>


<script lang='ts'>
import { defineComponent, reactive } from 'vue'
import UploadExcel from './components/excel/uploadExcel/index.vue'
import { ElMessage } from 'element-plus'
export default defineComponent({
  components: {
    UploadExcel
  },
  setup() {
    const tables = reactive({
      tableData: [],
      tableHeader: Array<String>()
    })
    const beforeUpload = (file: File) => {
      //判断上传文件的大小
      const isLt1M = file.size / 1024 / 1024 < 1
        if (isLt1M) {
          return true
        }
        ElMessage.warning('Please do not upload files larger than 1m in size.')
        return false
    }
    const handleSuccess = ({header,results }: { header: string[], results: any}) => {
        console.log(results)
        tables.tableData = results
        tables.tableHeader = header
    }
    return {
      tables,
      beforeUpload,
      handleSuccess
    }
    
    
  },
})
</script>





<style>

</style>