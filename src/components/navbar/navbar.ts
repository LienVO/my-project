import { Component, Vue, Watch } from 'vue-property-decorator'
import { Link } from './link'
import { Logger } from '../../util/log'

@Component({
  template: require('./navbar.html'),
  components: {
  }
})
export class NavbarComponent extends Vue {

}
