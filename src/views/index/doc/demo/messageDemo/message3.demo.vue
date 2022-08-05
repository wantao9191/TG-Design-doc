<template>
    <tg-button size="mini" theme="link" @click="open">open center message</tg-button>
</template>
<script setup lang="ts">
import { message } from '@wantao/tgdesign'
const open = () => {
    message({ message: '这是一个居中消息弹窗',align:'center' })
}
</script>