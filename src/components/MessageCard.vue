
<template>
  <div>
    <md-list class="md-triple-line">
      <md-list-item >
        <md-avatar>
          <!-- <img src="https://placeimg.com/40/40/people/1" alt="E"> -->
          <p><strong>E</strong></p>
        </md-avatar>

        <div class="md-list-item-text">
          <span :v-for="(item, index) in items">{{items.message}}</span>
          <span>Brunch this weekend?</span>
          <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>
    </md-list>
  </div>
</template>

<script>
import axios from 'axios'
import  Message from '@/data/messages.json'
  // console.log(Message);
export default {
    name: 'MessageCard',

  // name: 'MessageCard',

 data () {
    return {
      items:{},            }
  },
  mounted () {
    axios
      .get(Message)
      .then(response => (this.items = response))
  }
 
  // data(){
  //    return{
  //      items: [Message]
  //   };
    
  // },
  //   async created (){
  //     try {
  //       const response = await Axios.get(Message);
  //       this.items = response.data();
  //     }catch(err) {
  //       console.log(err);
  //     }
  //   }
  // ,mounted () {
  //   console.log(this.items)
  //   Axios
  //     .get( this.items)
  //     .then(response => (this.items = response));
  // },


}
</script>

<style lang="scss" scoped>
  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }

</style>