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
                const $main = document.querySelector('.router-main') as HTMLDivElement
                $main.onscroll = e => {
                    const navs = document.querySelectorAll('.desc-title')
                    for (let i = 0; i < navs.length; i++) {
                        let n = navs[i] as HTMLSpanElement
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
            const $main = document.querySelector('.router-main') as HTMLDivElement
            const titles = document.querySelectorAll('.desc-title')
            $main.scrollTo(0, titles[i].parentElement.parentElement.offsetTop)
        }
        init()
        return () => (
            <div class={t['m-nav-content']}>
                <nav class={t['m-nav']}>
                    {labels.map((l: any, i: number) => {
                        return <a href="javaScript:;" class={active.value === l.label ? t.active : ''}
                            onClick={() => onClick(l, i)}>{l.label}</a>
                    })}
                    <span class={t["border-pos"]} style={{ top: activeTop.value + 'px' }}></span>
                </nav >
            </div >
        )
    }
})