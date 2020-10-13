<template>
  <div class="counter">
    <button @click="increment">+</button>
    <span>{{counter}}</span>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Counter",
  methods: {
    ...mapActions(["increment", "decrement"])
  },
  computed: mapState(["counter"])
};
</script>