import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://149.129.222.12:3000`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
