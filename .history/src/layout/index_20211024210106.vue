<template>
    <div
    v-if="!item.meta || !item.meta.hidden"
    :class="[
    isCollapse ? 'simple-mode' : 'full-mode',
    {'first-level': isFirstLevel}
    ]"
    >
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
