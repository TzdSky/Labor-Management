<template>
  <div class="footer flex-column">
    <div class="mt15 mb15 color-fff-size-14 flex-row">
      承办单位：
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .footer{
    width: 100%;
    height: 1.6rem;
    background: #000000;
    ul{
      width: 83.33333%;
      /*padding-bottom: 30px;*/
      /*height: 50px;*/
      padding: .6rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, .4);
    }
  }
  .icon-border{
    width: .64rem;
    height: .64rem;
    border-radius: 50%;
    border: 1px solid #ffffff;
    svg{
      font-size: 16px;
      color: #FFFFFF;
    }
  }
</style>
