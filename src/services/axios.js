import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://futurecineback.akaelisee.fr/admin/account/'
})

export default instance
