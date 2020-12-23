<template>
  <div>
    <div v-for="item in items" :key="item.id" class="container">
      <div class="item-score">
        <p>{{ item.score }}</p>
      </div>
      <div class="item-info">
        <div class="" style="display: flex">
          <router-link :to="`/new/${item.id}`" :itemId="item.id">
            <h2>
              {{ item.title }}
            </h2>
          </router-link>
          <span style="margin: 30px">{{ item.url.split("/")[2] }}</span>
        </div>
        <div class="info-container" style=" font-size: 0.85em; color: #828282;">
          <p>by: {{ item.by }}</p>
          <p>type: {{ item.type }}</p>
          <p>time: {{ processDate(item.time) }}</p>
          <p>comment: {{ item.kids.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listItem",
  props: ["items"],
  methods: {
    processDate(num) {
      return new Date(num * 1000);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  background-color: #ffff;
  border-bottom: 2px solid #f0f2fa;
}
.item-score {
  margin: auto;
  flex-shrink: 2; /* default 1 */
  color: #f60;
  font-size: 1.1em;
  font-weight: 700;
}
.item-info {
  width: 80%;
  flex-direction: column;
  /* flex-shrink: 6; default 1 */
}
.item-info a {
  color: #34495e;
  font-weight: 600;
  text-decoration: none;
}
.item-info span {
  font-size: 0.85em;
    margin-left: 10px;
    color: #828282;
}
.info-container {
  display: flex;
  flex-direction: row;
}
.info-container p {
  flex-grow: 4;
}
</style>