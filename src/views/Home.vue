<template>
  <div class="home">
    <GoogleMaps />
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleMaps from '@/components/G_Maps.vue'

export default {
  name: 'Home',
  components: {
    GoogleMaps
  }
}
</script>
