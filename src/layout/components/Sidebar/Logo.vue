<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="bmLogo" :src="bmLogo" class="sidebar-logo">
        <h1 v-else class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="bmLogo" :src="bmLogo" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
// import bmLogo from '../../../assets/common/bms_logo.png'
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '资源开放平台',
      // bmLogo: bmLogo + '?' + +new Date(),
      logo: 'http://www.bmsoft.com.cn/statics/default/skin/img/logo.png'
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebarLogoFade-enter-active {
    transition: opacity 1.5s;
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
    background: #333854;
    text-align: center;
    overflow: hidden;
    box-shadow:0px 2px 0px 0px rgba(245,245,245,1);
    z-index: 99;

    img{
      width: 35px;
      height: 28px;
    }
    & .sidebar-logo-link {
      height: 100%;
      width: 100%;

      & .sidebar-logo {
        width: 32px;
        height: 28px;
        vertical-align: middle;
        margin: 0px 10px 0 14px;
      }

      & .sidebar-title {
        display: inline-block;
        margin: 0;
        font-size:18px;
        font-weight:bold;
        color: #FFFFFF;
        line-height: 50px;
        vertical-align: middle;
      }
    }

    &.collapse {
      .sidebar-logo {
        margin-right: 0px;
        margin-left: 14px;
      }
    }
  }
</style>
