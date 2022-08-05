import { defineComponent } from 'vue'
import { RouterView } from "vue-router";
export const index = defineComponent({
    setup(props, context) {
        return ()=>(<RouterView />)
    }
})