import Vue from "vue";
import PureTaskList from "@/components/PureTaskList.vue";
import { WithPinnedTasks } from "@/components/PureTaskList.stories.js";

it("renders pinned tasks at the start of the list", () => {
  //Render PureTaskList
  const Constructor = Vue.extend(PureTaskList);
  const vm = new Constructor({
    propsData: WithPinnedTasks.args,
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );
  //  We expect the pinned task to be rendered first, not at the end
  expect(firstTaskPinned).not.toBe(null);
});
