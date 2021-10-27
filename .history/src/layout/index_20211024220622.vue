<template>
    <div
        v-if="!item.meta || !item.meta.hidden"
        :class="[
        isCollapse ? 'simple-mode' : 'full-mode',
        {'first-level': isFirstLevel}
        ]"
        >
        <template
            v-if='!alwaysShowRootMenu'
        >
        </template>
    </div>
</template>

<script lang='ts'>
import path from 'path'
import { computed, defineComponent, PropType } from 'vue'
import {RouteRecordRaw} from 'vue-router'
import { isExternal } from '@/utils/validate'
import { useI18n } from 'vue-i18n'
export default defineComponent({
    props:{
        basePath: {
            type: String,
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

        const alwaysShowRootMenu = computed(() => {
            if(props.item.meta && props.item.meta.alwaysShowRootMenu) {
                return true
            }else {
                return false;
            }
        })
        const showingChildNumber  = computed(() => {
            if(props.item.children) {
                const showingChildren = props.item.children.filter((item) => {
                    if(item.meta && item.meta.hidden) {
                        return false;
                    }else {
                        return true
                    }
                })
                return showingChildren.length
            }
            return 0
        })

        const theOnlyOneChild = computed(() => {
            if(showingChildNumber.value > 1) {
                return null
            }
            if(props.item.children) {
                for(const child of props.item.children) {
                    if(!child.meta || !child.meta.hidden) {
                        return child
                    }
                }
            }
        })
        return {
            t,
            alwaysShowRootMenu,
            showingChildNumber,
            theOnlyOneChild,
            resolvePath
        }
    }   
})
</script>
