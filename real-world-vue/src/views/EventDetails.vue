<script setup>
import { onMounted, ref } from 'vue'
import EventService from '@/services/EventService'
const props = defineProps({
  id: { required: true }
})

const event = ref(null)
onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
      console.log('Error')
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>@{{ event.time }} on {{ event.date }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<style scoped></style>
