<template>
  <div class="demo dialog-demo">
    <h2>Dialog 对话框</h2>
    <p>模态对话框，在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <h3>何时使用</h3>
    <ul>
      <li>
        需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Dialog
        在当前页面正中打开一个浮层，承载相应的操作。
      </li>
    </ul>
    <h3>代码演示</h3>
    <!-- 基础用法 -->
    <div class="demo-block">
      <div class="demo-component">
        <component :is="dialogDemo1" />
      </div>
      <div class="demo-desc">
        <span class="desc-title">基本用法</span>
        <div class="desc-text">
          Dialog 弹出一个对话框，适合需要定制性更大的场景。
        </div>
      </div>
      <div class="demo-code" v-show="demo1Visible">
        <code class="code-bg">
          <div class="code-text">
            通过
            <code>visible</code>
            属性
            <code>Boolean</code> 类型的变量，打开/关闭
            <code>tg-dialog</code>
            对话框。
          </div>
        </code>
        <pre class="language-html" v-html="demo1"></pre>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">
          <tg-icon icon="tg-copy"></tg-icon>
        </a>
        <a href="javaScript:;" @click="demo1Visible = !demo1Visible">
          <tg-icon icon="tg-code" size="21"></tg-icon>
        </a>
      </div>
    </div>
    <!-- 自定义内容 -->
    <div class="demo-block">
      <div class="demo-component">
        <component :is="dialogDemo2" />
      </div>
      <div class="demo-desc">
        <span class="desc-title">自定义内容</span>
        <div class="desc-text">Dialog 组件的内容可以是任意的</div>
      </div>
      <div class="demo-code" v-show="demo1Visible2">
        <code class="code-bg">
          <div class="code-text">
            通过 <code>slot</code> <code>header</code> 可以自定义标题内容
          </div>
        </code>
        <pre class="language-html" v-html="demo2"></pre>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">
          <tg-icon icon="tg-copy"></tg-icon>
        </a>
        <a href="javaScript:;" @click="demo1Visible2 = !demo1Visible2">
          <tg-icon icon="tg-code" size="21"></tg-icon>
        </a>
      </div>
    </div>
    <!-- 居中布局 -->
    <div class="demo-block">
      <div class="demo-component">
        <component :is="dialogDemo3" />
      </div>
      <div class="demo-desc">
        <span class="desc-title">居中布局</span>
        <div class="desc-text">Dialog 组件的内容可以居中</div>
      </div>
      <div class="demo-code" v-show="demo1Visible3">
        <code class="code-bg">
          <div class="code-text">
            通过 <code>center</code> 为 <code>true</code> 可以居中布局
          </div>
        </code>
        <pre class="language-html" v-html="demo3"></pre>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">
          <tg-icon icon="tg-copy"></tg-icon>
        </a>
        <a href="javaScript:;" @click="demo1Visible3 = !demo1Visible3">
          <tg-icon icon="tg-code" size="21"></tg-icon>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import dialogDemoRaw from "./dialog1.demo.vue?raw";
import dialogDemo1 from "./dialog1.demo.vue";
import dialogDemoRaw2 from "./dialog2.demo.vue?raw";
import dialogDemo2 from "./dialog2.demo.vue";
import dialogDemoRaw3 from "./dialog3.demo.vue?raw";
import dialogDemo3 from "./dialog3.demo.vue";
import { ref } from "vue";
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(dialogDemoRaw, Prism.languages.html, "html");
const demo2 = Prism.highlight(dialogDemoRaw2, Prism.languages.html, "html");
const demo3 = Prism.highlight(dialogDemoRaw3, Prism.languages.html, "html");
const demo1Visible = ref(false);
const demo1Visible2 = ref(false);
const demo1Visible3 = ref(false);
</script>