<template>
  <div class="demo button-demo">
    <h2>安装</h2>
    <h3>代码演示</h3>
    <p>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <pre><code>npm i @wantao/tgdesgin</code></pre>
    <h3>引入TG-Design</h3>
    <p>
      你可以引入整个
      TG-Design，或是根据需要仅引入部分组件。我们先介绍如何引入完整的
      TG-Design。
    </p>
    <h5>完整引入</h5>
    <p>在 main.js / main.ts 中写入以下内容：</p>
    <pre v-html="demo1"></pre>
    <p>以上代码便完成了 TG-Design 的引入。</p>
    <h5>按需引入</h5>
    <p>
      接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在
      main.js/main.ts 中写入以下内容：
    </p>
    <pre v-html="demo2"></pre>
    <p>以上便是TG-Design的两种使用方式。</p>
  </div>
</template>
<script setup lang="ts">
const Prism = (window as any).Prism;
const demo1 = Prism.highlight(
  `import { createApp } from '' 
import { App } from './App.tsx'
import tgdesign from "@wantao/tgdesign"
const app = createApp(App)
app.use(tgdesign)
app.mount("#app")`,
  Prism.languages.html,
  "html"
);
const demo2 = Prism.highlight(
  `import { createApp } from '' 
import { App } from './App.tsx'
import {tgButton} from "@wantao/tgdesign"
const app = createApp(App)
app.use(tgButton)
app.mount("#app")`,
  Prism.languages.html,
  "html"
);
</script>
<style lang="scss" scoped>
.demo {
  > h3 {
    margin-top: 20px;
  }
  > p {
    font-size: 13px;
  }
  > pre {
    background: #fafafa;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
    font-size: 12px;
  }
}
</style>