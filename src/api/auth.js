import axios from 'axios'
import * as Constants from '../constants'
import store from '../store'

const login = async (formData) => {
  const data = await axios.post(Constants.URL_PREFIX + '/pub/login', formData)
  store.commit('loginIn', data.data)
}
// const loginOut = async () => {
//   await axios.post(Constants.URL_PREFIX + '/pub/logout')
//   store.commit('loginOut')
// }
export default {
  login
}
