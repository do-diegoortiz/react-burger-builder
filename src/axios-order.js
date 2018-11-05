import axios from 'axios'

const instance = axios.create({
  baseURL: "https://nuevo-89fd3.firebaseio.com/"
})

export default instance