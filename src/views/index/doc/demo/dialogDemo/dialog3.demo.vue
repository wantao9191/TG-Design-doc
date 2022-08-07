<template>
    <tg-button @click="visible = true" theme="text" type="primary">点击打开Dialog</tg-button>
    <tg-dialog v-model:visible="visible" center>
        <template #title>标题</template>
        <span>异步关闭</span>
        <template v-slot:footer>
            <tg-button @click="visible = false">关闭</tg-button>
            <tg-button @click="visible = false" type="primary">确定</tg-button>
        </template>
    </tg-dialog>
</template>
<script setup lang='ts'>
import { ref } from "vue";
const visible = ref(false);
</script>