<template>
  <div class="about">
    <h1>Hello About</h1>
    <MessageCard></MessageCard>
  </div>
</template>


<script>
import MessageCard from '@/components/MessageCard.vue'

    export default {
      name: "About",
      components:{
        MessageCard
      }
    }

</script>


