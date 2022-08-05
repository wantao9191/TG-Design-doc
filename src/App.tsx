import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import {MHeader} from "@/components/MHeader/index.tsx";
import './App.scss'
export const App = defineComponent({
    components: { MHeader },
    setup(props, context) {
        return () => (
            <div id="app-view">
                <m-header></m-header>
                <main>
                    <RouterView class="router-view" />
                </main>
            </div>)
    }
})