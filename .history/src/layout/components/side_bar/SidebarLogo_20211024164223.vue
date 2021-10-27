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
.sidebar-logo-container {
    position: relative;
    
}
</style>