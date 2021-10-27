<template>
    <div style="display:inline-block;">
       <label
      class="radio-label"
      style="padding-left:0;"
    >Filename: </label>
        <el-input
        v-model="">

        </el-input>

    </div>
</template>
<script>
import { defineComponent, reative, computed } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const Filename = reative('')
    },
})
</script>
