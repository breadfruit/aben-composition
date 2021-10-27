<template>
    <div style="display:inline-block;">
       <label
      class="radio-label"
      style="padding-left:0;"
    >Filename: </label>
        <el-input
        v-model="filename"
        style="width:345px;"
        prefix-icon="el-icon-document"
        >

        </el-input>

    </div>
</template>
<script>
import { defineComponent, reative, computed } from '@vue/composition-api'

export default defineComponent({
    setup(props, ctx) {
        const filename = computed(() => {
            get:() => {
                return props.value
            }
            set:(newvalue) => {
                ctx.emit('input', newvalue)
            }   
        })
        return {
            filename

        }
    },
})
</script>
