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

<script lang='ts'>
import { defineComponent } from '@vue/composition-api'
import { isExternal } from '@/utils/validate'
import { useI18n } from 'vue-i18n'
export default defineComponent({
    props:{
        basePath: {
            type: string,
            required: true
        }
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
