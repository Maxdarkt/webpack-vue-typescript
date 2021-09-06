import Vue from 'vue'
import App from './App'

let v = new Vue({
    el: document.querySelector('#app') as Element,
    components: {App},
    render (h) {
        return h('App')
    }
})
