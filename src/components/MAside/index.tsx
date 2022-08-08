import { defineComponent, reactive, ref } from 'vue'
import t from "./index.module.scss";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export const MAside = defineComponent({
    setup(props, context) {
        const router = useRouter();
        const route = useRoute()
        const store = useStore();
        const path = ref(route.path)
        const menus = reactive([
            {
                label: "指南",
                children: [
                    { label: "安装", path: "/doc/install", padding: "8px 12px" },
                ],
            },
            {
                label: "组件",
                icon: "dict",
                slider: false,
                children: [
                    {
                        type: "Basic",
                        children: [
                            { label: "Icon 图标", path: "/doc/icon" },
                            { label: "Button 按钮", path: "/doc/button" },
                        ],
                    },
                    {
                        type: "Form",
                        children: [
                            { label: "Switch 开关", path: "/doc/switch" },
                            { label: "Input 输入框", path: "/doc/input" },
                            { label: "Radio 单选框", path: "/doc/radio" },
                            { label: "Checkbox 多选框", path: "/doc/checkbox" },
                            { label: "Select 下拉框", path: "/doc/select" },
                            { label: "DatePicker 日期选择器", path: "/doc/datePicker" },
                            { label: "TimeSelect 时间选择", path: "/doc/timeSelect" },
                            { label: "TimePicker 时间选择器", path: "/doc/timePicker" },
                        ],
                    },
                    {
                        type: "Feedback",
                        children: [
                            { label: "Dialog 模态框", path: "/doc/dialog" },
                            { label: "Tooltip 文字提示", path: "/doc/tooltip" },
                            { label: "MessageBox 提示弹框", path: "/doc/messageBox" },
                            { label: "Message 消息提示", path: "/doc/message" },
                        ],
                    },
                    {
                        type: "Navigation",
                        children: [{ label: "Tabs 标签页", path: "/doc/tabs" }],
                    },
                ],
            },
        ]);
        const menuClick = (e: any) => {
            if (e.path) {
                path.value = e.path
                router.push(e.path);
                store.commit("menuChange", false);
            } else {
            }
        };
        return () => (
            <div class={t['m-aside']}>
                <ul class={t['m-aside-list']}>
                    {menus.map((m: any, i) => {
                        return <li onClick={() => menuClick(m)} class={[path === m.path ? t.active : '',m.path?'':t.default]}>
                            <div class={[t.label, t['label-flex']]} style="padding: 12px 12px 0">
                                <span class={t["label-bold"]}>
                                    {m.label}
                                </span>
                            </div>
                            <div class={t["menu-child"]}>
                                <ul>
                                    {m.children.map((c: any, n: number) => {
                                        return <li onClick={() => menuClick(c)} class={[c.type ? t.type :'',route.path === c.path ? t.active : '']}>
                                            <span class={t.label} style={{ padding: c.padding }}>
                                                {c.type || c.label}
                                            </span>
                                            <ul>
                                                {c.children && c.children.map((cc: any, nn: number) => {
                                                    return <li key={nn} onClick={() => menuClick(cc)} class={[route.path === cc.path ? t.active : '']}>
                                                        <span class={t.label} style="padding: 8px 12px">{
                                                            cc.label
                                                        }</span>
                                                    </li>
                                                })}
                                            </ul>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </li >
                    })}
                </ul >
            </div >
        )
    }
})