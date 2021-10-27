<template>
  <div>
  </div>
</template>


<script lang='ts'>

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>