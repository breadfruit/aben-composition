<template>
    <div
        v-if="!item.meta || !item.meta.hidden"
        :class="[
        isCollapse ? 'simple-mode' : 'full-mode',
        {'first-level': isFirstLevel}
        ]"
        >
        <template
        
        >
        </template>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api'
import { isExternal } from '@/utils/validate'
import { useI18n } from 'vue-i18n'
export default defineComponent({
    props:{
        basePath: {
            type: string,
            required: true
        },
        isCollapes: {
            type: Boolean,
            required: true,
        },
        isFirstLevel: {
            type: Boolean，
            require: true
        },
        isCollapse: {
            type: Boolean,
            required: false
        },
    },
    setup(props) {
        const resolvePath = (routePath: string) => {
            if(isExternal(routePath)) {
                return routePath
            }
            if(isExternal(props.basePath)) {
                return props.basePath
            }
            return path.resolve(props.basePath, routePath)
        }

        const { t } = useI18n()
    },
})
</script>
