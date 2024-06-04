const headLine = "To Do List App";
const product = "Socks";
const app = Vue.createApp({
  data() {
    return {
      headLine,
      product,
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },

    deleteFromTask(taskId) {
      var index = this.tasks
        .map((task) => {
          return task.id;
        })
        .indexOf(taskId);
      this.tasks.splice(index, 1);
      console.log(this.tasks);
    },
  },
  computed: {},
});
