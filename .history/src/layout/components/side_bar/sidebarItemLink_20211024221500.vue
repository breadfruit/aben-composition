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
    <slot />
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { isExternal } from '@/utils/validate'
import { useRouter } from 'vue-router'
export default defineComponent({

    setup() {
        const router = useRouter();
        const push = () => {
            router.push(props.to).catch((err) => {
                console.log(err)
            })
        }
        return {
            push,
            isExternal
        }
    },
})
</script>
