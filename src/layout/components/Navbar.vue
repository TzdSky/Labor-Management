<template>
  <div class="navbar" :class="activeClass">
    <div class="flex-between align-item pl30 pr30" :style="{ width: navbarWidth }">
      <img :src="avatar" class="logo">
      <h1 class="title pl10">{{ title }} </h1>
      <div />
      <div class="color-fff-size-14  flex-end align-item nav-content pr10">
        <span style="color:white;font-size:16px">实名制</span>
      </div>
      <div class="color-fff-size-14  flex-end align-item nav-content pr10">
        <!-- <ul class="nav-tab color-fff-size-12 flex-end">
          <li class="pointer" :class="{ 'nav-active-tab': 0 === tabIndex }">共享门户</li>
        </ul> -->

        <div>
          <el-dropdown trigger="click" style="display: flex">
            <div>
              <span style="color:white;font-size:16px">劳务公司</span>
              <i class="el-icon-caret-bottom" />
            </div>
            <el-dropdown-menu slot="dropdown" class="navbar-dropdown">
              <el-dropdown-item>
                <span class="flex flex1" @click="gotoCenter">分包商务</span>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <span style="display:block;" @click="logout">班组管理</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="color-fff-size-14  flex-end align-item nav-content pr10"><span style="color:white;font-size:16px">考勤统计</span> </div>
      <div class="color-fff-size-14  flex-end align-item nav-content pr10"><span style="color:white;font-size:16px">合同管理</span></div>
      <div class="color-fff-size-14  flex-end align-item nav-content pr10"><span style="color:white;font-size:16px">系统管理</span> </div>
      <!-- 个人中心 -->
      <div class="right-menu" style="z-index: 2000">
        <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click" style="display: flex">
          <div class="avatar-wrapper flex align-item">
            <img :src="avatar" class="user-avatar" @error="defImg()">
            <span class="user-name">{{ name }}</span>
            <i class="el-icon-caret-bottom" />
          </div>
        </el-dropdown></div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    // ErrorLog,
    // Search
  },
  directives: {
    // Clickoutside
  },
  data() {
    return {
      tabIndex: 0,
      title: '核心高铁项目',
      current: 0,
      provinceName: [],
      localName: [],
      activeIndex: '1',
      activeClass: '',
      navbarWidth: '100%'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device',
      'name'
    ]),
    systemMenu() {
      return this.$store.getters.systemMenu
    }
  },
  watch: {
    $route: {
      // handler: function(val) {
      //   if (val.path === '/index' || val.path === '/') {
      //     this.activeClass = 'lone-home'
      //   } else {
      //     this.activeClass = 'no-home'
      //   }
      // },
      immediate: true
    }
  },
  created() {
    this.isIE()
  },
  methods: {
    defImg() {
      const img = event.srcElement
      img.src = this.defAvatar
      img.onerror = null // 防止闪图
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      // SmartCitySSO.logout()
    },
    handleSelect() {

    },
    gotoCenter() {
      this.$router.push({
        name: 'userCenter'
      })
    },
    isIE() {
      if (window.navigator.userAgent.indexOf('MSIE') >= 1) {
        // console.log('ie')
        this.navbarWidth = '94%'
        // return true
      } else {
        // console.log('no ie')
        this.navbarWidth = '100%'
        // return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    /*width: calc(100% - 200px)!important;*/
    width: 100%;
    height: 1.4rem;
    overflow: hidden;
    /*position: fixed;*/
    display: flex;
    white-space: nowrap;
    background: #2A313B;
    color: #DEE4F2;
    box-shadow: 2px 5px 10px 0 rgba(174, 174, 174, 0.05);
    // z-index: 99;

    /* logo */
    .logo{
      width: .8rem;
      height: .8rem;
    }
    .title{
      font-size:18px;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }

    .right-menu {
      height: 100%;
      line-height: 1.3rem;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        /*padding: 0 8px;*/
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        /*vertical-align: text-bottom;*/

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;
          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }
      /* .navbar-dropdown{
        width: 2rem!important;
        top: 1.2rem;
      } */
      .el-popper[x-placement^="bottom"]{
        margin-top: 0!important;
      }

      .avatar-container {

        .avatar-wrapper {
          /*position: relative;*/
          /* 用户头像 */
          .user-avatar {
            cursor: pointer;
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          /* 用户名 */
          .user-name{
            display: inline-block;
            font-size: 14px;
            color: #8A8E99;
            margin: 0 10px 0 5px;
          }
          .el-icon-caret-bottom {
            /*cursor: pointer;*/
            /*position: absolute;*/
            color: #8A8E99;
            font-size: 16px;
            /*top: 8px;*/
          }
        }
      }

      /* 注册 */
      .avatar-login{
        font-size:12px;
        padding: 0 30px 0 0;
        font-weight:400;
        color:rgba(255,255,255,1);
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
  .navbar-dropdown{
    width: 2.4rem;

    right: 0!important;
  }
  .select-like{
    margin-left: .6rem;
    padding: 0 .3rem;
    min-width: 3.2rem;
    height: .9rem;
    line-height: .8rem;
    background:rgba(56,62,77,1);
    position: relative;
    z-index: 98;
    .place-name{
      font-size: .24rem;
      margin-left: 5px;
      font-weight: 400;
      color:rgba(138,142,153,1);
    }
    .el-icon-caret-bottom{
      color: #8A8E99;
      font-size: 16px;
    }
    [class^="el-icon-"], [class*=" el-icon-"]{
      line-height: .8rem;
    }
    &:hover{
      cursor: pointer;
    }
  }
  .select-like-down{
    position: absolute;
    width: 75%;
    height: auto;
    /*height: 100px;*/
    margin-top: -2px;
    z-index: 20000;
    margin-left: .6rem;
    padding: 11px;
    background:rgba(56,62,77,1);
    border-top: 1px solid #2B303B;
    &>ul li{
      &:first-child{
        font-size: 12px;
        font-weight:400;
        color:rgba(138,142,153,1);
        padding: 12px 25px;
        white-space: nowrap;
      }
    }
    .place-list-name li{
      font-size: 12px;
      font-weight:400;
      color:rgba(138,142,153,1);
      padding: 12px 25px;
      &:hover{
        cursor: pointer;
        color: #ffffff;
      }
    }
  }
  .btn-25{
    .el-button--medium{
      padding: 0px .3rem;
    }
    .btn-size-12-color-397DFA{
      height: .5rem;
      background: rgba(57, 125, 250, 1);
      border: none;
      border-radius: 2px;
      text-align: center;
      vertical-align: middle;
      line-height: .5rem;
      font-size: .24rem;
      font-weight: 400;
      color: #ffffff;

      &:hover {
        background-color: rgba(57, 125, 250, .8);
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
  .navbar-dropdown{
    z-index: 30000!important;
  }

 /* 顶部导航菜单 */
.nav-tab {
  li {
    border: 1px solid transparent;
    border-radius:2px;
    padding: .1rem .2rem;
    margin: 0 .5rem 0 0;
  }
  .nav-active-tab {
    color: #00A4FF;
    border-color: #00A4FF;
  }
}
    // .btn-25 /deep/.btn-size-12-color-397DFA{
    //   height: .5rem;
    //   background: rgba(57, 125, 250, 1);
    //   border: none;
    //   border-radius: 2px;
    //   text-align: center;
    //   vertical-align: middle;
    //   line-height: .5rem;
    //   font-size: .24rem;
    //   font-weight: 400;
    //   color: #ffffff;

    //   &:hover {
    //     background-color: rgba(57, 125, 250, .8);
    //     color: #ffffff;
    //     cursor: pointer;
    //   }
    // }
</style>
