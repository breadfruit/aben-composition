<template>
  <div
  :class="{'has-logo': }"
  >
  </div> 
</template>

<script>
import {computed, defineComponent} from 'vue'
import SidebarItem from './SidebarItem.vue'
import SidebarLogo from './SidebarLogo.vue'

export default  defineComponent({
    components: {
        SidebarItem,
        SidebarLogo
    },
    setup(){
        
    }
})
</script>

<style>

</style>