import { defineComponent } from 'vue'
import { useRouter } from "vue-router";
import t from "./home.module.scss";
export const homeIndex = defineComponent({
    setup(props, context) {
        const router = useRouter()
        const jump = () => {
            router.push('/doc')
        };
        return () => (
            <div class={t['home-page']}>
                <div class={t.banner}>
                    <img src="../../../assets/images/logo.svg" alt="" />
                    <span class={t.title}>TG Design</span>
                    <h3>基于 Vue.js 3 的个人级 UI 组件库和前端解决方案，
                        为无数开发者服务</h3>
                    <div class={t.btns}>
                        <a href="javaScrip:;" onClick={jump}>
                            <tg-icon icon="tg-paper-plane" size="21" style="margin-right:4px"></tg-icon>
                            <span>开始使用</span>
                        </a>
                        <a href="https://github.com/wantao9191/default-template" class="default">
                            <tg-icon icon="tg-rocket" size="21" style="margin-right:4px"></tg-icon>
                            <span>GtiHub</span>
                        </a>
                    </div>
                    <div class={t.intros}>
                    <div class={t['intro-item']}>
                        <h3>易用</h3>
                        <p>已经会了Vue？即刻阅读指南开始构建应用！</p>
                    </div>
                    <div class={t["intro-item"]}>
                        <h3>灵活</h3>
                        <p>按需加载，全部加载，由你掌控！</p>
                    </div>
                    <div class={t["intro-item"]}>
                        <h3>高效</h3>
                        <p>样式、功能无需操心，C&V操作，自在自由！</p>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
})