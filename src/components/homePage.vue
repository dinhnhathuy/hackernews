<template>
  <div>
    <p>Homepage</p>
    <ul>
      <!-- <li v-for="story in stories" :key="story">{{ story.title }}</li> -->
      <listItem :items="stories"></listItem>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import listItem from "./listItem.vue";
export default {
  name: "homepage",
  components: {
    listItem:listItem
  },
  data() {
    return {
      err: "",
      stories: [],
      results: []
    };
  },
  created: function() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => {
        this.results = res.data.slice(0, 10);
        let stories = this.stories;
        this.results.map(function(ele) {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${ele}.json`)
            .then(res => {
              stories.push(res.data);
            })
            .catch(error => console.log(error));
        });
        this.stories = stories;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped></style>>
