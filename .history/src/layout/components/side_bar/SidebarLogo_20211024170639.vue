<template>
    <div
    class="side-logo=cotainer"
    :class="[collapse ? 'collapse': 'notitle']"
    >
        <transition name='sidebarLogoFade'>
            <router-link
                v-if="false"
                key="collapse"
                class="sidebar-logo-link"
            >
            <img
            src="favicon.ico"
            class="sidebar-logo"
            >
            </router-link>
            <router-link
            v-else
            key="expand"
            class="sidebar-logo-link"
            >
            <img class="sidebar-logo" :src="Logo" />
                <h1 class="sidebar-tilte">
                    Vue<span style="color:#57CAEB">3</span>管理后台
                </h1>
           
            </router-link>
        </transition>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Logo from '@/assets/images/home/logo.png'
export default defineComponent({
    setup() {
        return {
            Logo
        }
    },
})
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active{
    transform: opacity 1.5s;;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
    opacity: 0;
}
.sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: $menuBg;
    text-align: center;
    overflow: hidden;
    margin-bottom: 30px;
    margin-top: 20px;
}

</style>