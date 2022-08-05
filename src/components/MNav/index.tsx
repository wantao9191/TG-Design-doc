import { defineComponent } from 'vue'
import t from "./index.module.scss";
import { nextTick, reactive, ref } from "vue"
export const MNav = defineComponent({
    setup(props, context) {
        let labels = reactive([])
        const active = ref('')
        const activeTop = ref(0)
        const init = () => {
            setTimeout(() => {
                const navs: any = document.querySelectorAll('.desc-title')
                for (let n of navs) {
                    const { y }: { y: number } = n.getBoundingClientRect()
                    labels.push({ label: n.innerText, y })
                }
                active.value = labels[0].label
            }, 100);
            nextTick(() => {
                document.querySelector('.router-main').onscroll = e => {
                    const navs = document.querySelectorAll('.desc-title')
                    for (let i = 0; i < navs.length; i++) {
                        let n = navs[i]
                        const { top } = n.getBoundingClientRect()
                        if (top > 0 && top < 200) {
                            active.value = n.innerText
                            activeTop.value = i * 22
                        }
                    }

                }
            })
        }
        const onClick = (l: any, i: number) => {
            active.value = l.label
            activeTop.value = i * 22
            document.querySelector('.router-main').scrollTo(0, document.querySelectorAll('.desc-title')[i].parentElement.parentElement.offsetTop)
        }
        init()
        return () => (
            <div class={t['m-nav-content']}>
                <nav class={t['m-nav']}>
                    {labels.map((l: any, i: number) => {
                        return <a href="javaScript:;" class={active === l.label ? t.active : ''}
                            onClick={() => onClick(l, i)}>{l.label}</a>
                    })}
                    <span class="border-pos" style={{ top: activeTop + 'px' }}></span>
                </nav >
            </div >
        )
    }
})