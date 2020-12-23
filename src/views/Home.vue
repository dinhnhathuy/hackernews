<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="show"/>
    <HelloWorld msg="Welcome hackernews app" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  create(){
    console.log(this.$store.state.article);
  },
  methods: {
    show(){
      return this.$store.article
    }
  },
};
</script>
