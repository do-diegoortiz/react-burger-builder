import axios from 'axios'

const instance = axios.create({
  baseUrl: "https://nuevo-89fd3.firebaseio.com/"
})

export default instance