<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'
import { ref, onMounted, computed, watchEffect } from 'vue'

const events = ref(null)
const loading = ref(true)

const props = defineProps(['page'])
const page = computed(() => props.page)

const totalEvents = ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    events.value = null
    loading.value = true
    EventService.getEventsPagination(2, page.value)
      .then((response) => {
        events.value = response.data
        console.log(response)
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        loading.value = false
      })
  })
})
</script>

<template>
  <h4>Current Page {{ page }}</h4>
  <div class="events">
    <div v-if="loading" class="loader"></div>
    <EventCard v-else v-for="event in events" :key="event.id" :event="event" :id="event.id" />
    <RouterLink :to="{ name: 'event-list', query: { page: page - 1 } }" v-if="page != 1"
      >Prev Page</RouterLink
    ><RouterLink :to="{ name: 'event-list', query: { page: page + 1 } }" v-if="hasNextPage"
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
/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  aspect-ratio: 1;
  --_c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
  background:
    var(--_c) top,
    var(--_c) left,
    var(--_c) right,
    var(--_c) bottom;
  background-size: 12px 12px;
  animation: l7 1s infinite;
}
@keyframes l7 {
  to {
    transform: rotate(0.5turn);
  }
}
</style>
