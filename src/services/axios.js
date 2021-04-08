import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'http://localhost:4000/admin/account/'
})

export default instance
