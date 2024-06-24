import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
<<<<<<< HEAD
  getEventsWithPage(perPage, page) {
=======
  getEventsPagination(perPage, page) {
>>>>>>> f9c806a96a3fca92bd17a4a176782d28b9d38470
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  }
}
