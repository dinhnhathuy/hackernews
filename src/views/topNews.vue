<template>
  <div>
    <ul>
      <listItem :items="stories"></listItem>
    </ul>
  </div>
</template>

<script>
import listItem from "../components/listItem.vue";

export default {
  name:'topNews',
  components:{
    listItem
  },
  data(){
    return{
      err:'',
      stories: this.$store.state.topStories,
    }
  },
  created: function(){
    if (this.$store.state.topStories.length === 0) this.$store.dispatch('fetch_top_stories')
  }
}
</script>