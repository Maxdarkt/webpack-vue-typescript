import { Vue, Component } from 'vue-property-decorator'
import Render from './App.html'

@Render
@Component({})
export default class App extends Vue{
    number: number = 0

    mounted () {
        window.setInterval(() => {
            this.number++
        }, 1000)
    }
}

