<template>
    <a
    v-if="isExternal(to)"
    :href="to"
    target="_blank"
    rel="noopener"
    >
    </a>
    <div
    v-else
    @click="push"
    >
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { isExternal } from '@/utils/validate'
import { useRouter } from 'vue-router'
export default defineComponent({
    setup() {
        
    },
})
</script>
