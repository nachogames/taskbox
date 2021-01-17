<template>
  <div>
    <pure-task-list
      :tasks="tasks"
      v-on="$listeners"
      @archive-task="archiveTask"
      @pin-task="pinTask"
    />
  </div>
</template>

<script>
import PureTaskList from "./PureTaskList.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { PureTaskList },
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapActions(["archiveTask", "pinTask"]),
  },
};
</script>

<style lang="scss" scoped></style>
