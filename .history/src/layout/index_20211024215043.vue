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
import { defineComponent, PropType } from 'vue'
import {RouteRecordRaw} from 'vue-router'
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
            type: Boolean,
            require: true
        },
        item: {
            type: Object as PropType<RouteRecordRaw>,
            required: true
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
