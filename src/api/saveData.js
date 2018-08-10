import api from './api'

export default {
  saveData (params) {
    return api().post('/infinity', params).then((response) => {
      console.log(response)
      return response
    })
  }
}
