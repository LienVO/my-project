import { Component, Vue } from 'vue-property-decorator'

import './home.scss'

@Component({
  template: require('./home.html'),
  components: {
  }
})
export class HomeComponent extends Vue {
  private message: string = 'Hola Lien'
  private seen: boolean = true
  private newElement: string = ''
  private todos: object[] = [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue' },
    { text: 'Build something awesome' }
  ]

  private mostra(): void {
    this.seen = !this.seen
  }
  private insertElement(): void {
    this.todos.push({text: this.newElement})
  }
}
