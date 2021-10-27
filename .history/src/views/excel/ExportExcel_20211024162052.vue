<template>
    <el-table
       v-loading="listLoading"
      :data="list"
      element-loading-text="Loading..."
      border
      fit
      highlight-current-row
    >
    <el-table-column>
        <template>
        </template>
    </el-table-column>

    </el-table>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>


<style scoped>

</style>