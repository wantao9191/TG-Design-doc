<template>
  <main class="doc-main">
    <m-aside class="m-aside" :class="{ 'mobile-aside': menuVisible }"></m-aside>
    <main class="router-main">
      <router-view
        class="router-view"
        :class="{ wrap: visible || !reload }"
      ></router-view>
      <m-nav v-if="reload && !visible" class="m-nav"></m-nav>
    </main>
  </main>
</template>
<script setup>
import { MAside } from "@/components/MAside/index.tsx";
import { MNav } from "@/components/MNav/index.tsx";
import { computed, nextTick, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const route = useRoute();
console.log(MAside);
const menuVisible = computed(() => store.getters.menuVisible);
const reload = ref(true);
const visible = ref(["/doc/install", "/doc/start"].includes(route.path));
onBeforeRouteUpdate((to) => {
  reload.value = false;
  nextTick(() => {
    if (!["/doc/install", "/doc/start"].includes(to.path)) reload.value = true;
  });
  document.title = to.meta ? to.meta.title + " | TG-Design" : "TG-Design";
  document.querySelector(".router-main").scrollTop = 0;
});
document.title = route.meta ? route.meta.title + " | TG-Design" : "TG-Design";
</script>
<style lang="scss">
@import "./demo/demo.scss";
</style>
<style lang="scss" scoped>
.doc-main {
  height: 100%;
  display: flex;

  > .router-main {
    width: calc(100vw - 240px);
    overflow-y: auto;
    border-radius: 4px;
    padding: 12px;
    &::-webkit-scrollbar {
      /*高宽分别对应横竖滚动条的尺寸*/
      width: 6px;
      height: 8px;
    }

    /*滚动条里面小方块*/
    &::-webkit-scrollbar-thumb {
      border-radius: 10px !important;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
      /* 颜色 */
      /* background:#b6b6b6!important; */
      /* 线性渐变背景 */
      background: #d2d6dd;
    }

    > .router-view {
      background: #fff;
      // margin: 12px;
      padding: 12px;
      width: calc(100% - 180px);
      &.wrap {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 680px) {
    .m-nav {
      display: none;
    }

    > .router-main {
      width: 100%;

      > .router-view {
        width: 100%;
        margin: 0;
      }
    }

    .m-aside {
      display: none;
      position: absolute;
      width: 100%;
      height: calc(100vh - 50px);
      z-index: 999;
    }
    .mobile-aside {
      display: block;
    }
  }
}
</style>
