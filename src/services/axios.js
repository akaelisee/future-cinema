import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://app-luxback.herokuapp.com'
})

export default instance
