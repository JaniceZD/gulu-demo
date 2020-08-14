const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.component('g-popover', Popover)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    it('可以接收 position 属性', done => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-popover position="left" ref="a">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <button>点我</button>
        </g-popover>
        `
        let vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-left')).to.be.true
            done()
        })
    })
    xit('可以设置 trigger', done => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-popover position="left" ref="a">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <button>点我</button>
        </g-popover>
        `
        const vm = new Vue({
            el: div
        })

        console.log(vm.$refs.a.$refs)
        console.log(vm.$el.querySelector('button'))
        console.log(vm.$refs.a)
        setTimeout(() => {
            let event = new Event('mouseenter');
            vm.$el.querySelector('button').dispatchEvent(event)
            vm.$nextTick(() => {
                const {contentWrapper} = vm.$refs.a.$refs
                expect(contentWrapper).to.exist
                done()
            })
        }, 200)
    })
})