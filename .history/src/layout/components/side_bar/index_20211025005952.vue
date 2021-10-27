<template>
  <div
  :class="{'has-logo': }"
  >
  <SidebarLogo>
  </SidebarLogo>
  </div> 
</template>

<script>
import {computed, defineComponent} from 'vue'
import SidebarItem from './SidebarItem.vue'
import SidebarLogo from './SidebarLogo.vue'
simport variables from '@/styles/_variables.scss'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default  defineComponent({
    components: {
        SidebarItem,
        SidebarLogo
    },
    setup(){
        const showLogo = computed(() => {
            
        })
    }
})
</script>

<style>

</style>