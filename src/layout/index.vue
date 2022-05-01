<template>
  <div :class="classObj" class="app-wrapper scroll_content">
    <el-scrollbar style="height: 100vh;">
      <div class="main-container">
        <div style="height: 100px;width: 100%; z-index: 10000;" />
        <navbar />
        <!-- <div style="width: 100%; z-index: 10000;">
          <Sidebar class="sidebar-container pl20" :class="activeClass" />
        </div> -->
        <!-- <div class="flex-row" style="background: #F1F2F6">
          <div v-show="activeClass == 'no-home'" class="w83">
            <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
          </div>
        </div> -->
        <app-main />
        <!-- <div class="footer-container">
          <FooterMain />
        </div> -->
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar, FooterMain } from './components'
import Breadcrumb from '@/components/Breadcrumb'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    FooterMain,
    Breadcrumb
  },
  mixins: [ResizeMixin],
  data() {
    return {
      visible: false,
      menuFixed: false,
      activeClass: ''
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        if (val.path === '/index' || val.path === '/') {
          this.activeClass = 'lone-home'
        } else {
          this.activeClass = 'no-home'
        }
      },
      immediate: true
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    /*width: calc(100% - #{$sideBarWidth})!important;*/
    transition: width 0.28s;
  }
/*
  .hideSidebar .fixed-header {
    width: calc(100% - 1.08rem)!important;
  }*/

  .mobile .fixed-header {
    width: 100%;
  }

</style>
