<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'
import { watchEffect } from 'vue'
import { computed } from 'vue'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['page'])
const events = ref('')
const page = computed(() => props.page)

onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEventsWithPage(2, page.value)
      .then((response) => {
        events.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  })
})
</script>

<template>
  <h1>This is page {{ page }}</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" id="event.id" />
    <RouterLink :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev" v-if="page != 1"
      >Prev Page</RouterLink
    >

    <RouterLink :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next"
      >Next Page</RouterLink
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
