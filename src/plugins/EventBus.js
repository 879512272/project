import {eventBus} from '../utils/eventBus'

const install = (Vue, options) => {
  Vue.prototype.$eventBus = eventBus
}

export default {
  install
}
