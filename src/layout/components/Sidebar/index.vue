<template>
  <div>
    <el-menu
      :default-active="activeMenu"
      background-color="transparent"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="horizontal"
      class="flex"
    >
      <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
// :background-color="variables.menuBg"

export default {
  components: {
    SidebarItem
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // console.log(route)
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>
<style lang="scss">
  .scrollbar-wrapper{
    // background:rgba(255,255,255,1);
    // border-right:1px solid rgba(250, 250, 250, 1);
    box-shadow:0px 0px 5px 0px rgba(174,174,174,0.14);
    /*z-index: 99;*/
    margin-bottom: .3rem;
  }
  .hamburger-container {
    line-height: 1.1rem;
    height: 1.1rem;
    width: 100%;
    border-top: 1px solid #E6E6E6;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
    padding: 0 .4rem;
    .hamburger-content{
      margin-top: -5px;
      background: #ffffff;
      padding: .2rem;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background: #F4F4F4;
      }
    }
  }
  .is-active1 {
    padding: 0 .2rem;
  }

</style>
