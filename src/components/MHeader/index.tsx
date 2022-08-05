import { defineComponent } from 'vue'
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import t from "./index.module.scss";
import logo from "@/assets/images/logo.svg";
export const MHeader = defineComponent({
    setup(props, context) {
        const router = useRouter()
        const store = useStore()
        const onClick = () => {
            router.replace('/home')
        }
        const menuClick = () => {
            store.commit('menuChange', true)
        }
        return () => (
            <div class={[t["m-header"], 'shadow']}>
                <div class={t.logo} onClick={onClick}>
                    <img src={logo} />
                    <span>TG Design</span>
                </div>
                <div class={t.nav}>
                    <tg-button theme="text" type="default" onClick={menuClick}>组件</tg-button>
                </div>
            </div>
        )
    }
})