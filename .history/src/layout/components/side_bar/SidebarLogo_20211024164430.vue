<template>
    <div
    class="side-logo=cotainer"
    :class="[collapse ? 'collapse': 'notitle']"
    >
        <transition name='sidebarLogoFade'>
        </transition>
    </div>
</template>


<style lang="scss" scoped>
.sidebarLogoFade-enter-active{
    transform: opacity:  1.5s;;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
    opacity: 0;
}
.sidebar-logo-container {
    position: relative;
    
}

</style>