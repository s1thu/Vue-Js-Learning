<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
const events = ref(null)

const props = defineProps(['page'])

const page = computed(() => props.page)
onMounted(() => {
  EventService.getEvent(2, page.value)
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <RouterLink :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev" v-if="page != 1">
      Prev Page</RouterLink
    ><RouterLink :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next">
      Next Page</RouterLink
    >
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
