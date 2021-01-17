import Vue from "vue";
import TaskList from "@/components/TaskList.vue";
import { WithPinnedTasks } from "@/components/TaskList.stories.js";

it("renders pinned tasks at the start of the list", () => {
  //Render Tasklist
  const Constructor = Vue.extend(TaskList);
  const vm = new Constructor({
    propsData: WithPinnedTasks.args,
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );
  //  We expect the pinned task to be rendered first, not at the end
  expect(firstTaskPinned).not.toBe(null);
});
