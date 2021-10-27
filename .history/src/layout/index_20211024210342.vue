<template>
    <div
        v-if="!item.meta || !item.meta.hidden"
        :class="[
        isCollapse ? 'simple-mode' : 'full-mode',
        {'first-level': isFirstLevel}
        ]"
        >
    </div>
    <el-submenu
    v-else
    :index = "resolvePath(item.path)"
    >
    </el-submenu>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
