import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://future-cinema-f230bec91f6c.herokuapp.com/admin/account/'
})

export default instance
