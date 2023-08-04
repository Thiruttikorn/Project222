<template>
  <div class="home">
    <HomeButton msg="INT222 INFORMATION TECHNOLOGY INTEGRATED PROJECT II" />
    <button @click="fetchEvents">Fetch Events</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeButton from '@/components/HomeButton.vue'
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    HomeButton
  },
  methods: {
    async fetchEvents() {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get('/events', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Handle the response and display the events
        console.log(response.data); // Example: Log the response data to the console
      } catch (error) {
        if (error.response.status === 401) {
          // Handle unauthorized access (invalid token)
          console.log('Unauthorized');
        } else {
          // Handle other errors
          console.log('Error:', error.message);
        }
      }
    }
  }
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
