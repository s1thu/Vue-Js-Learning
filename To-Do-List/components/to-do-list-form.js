app.component("todolist-form", {
  props: {},
  template: `<form action="" @submit.prevent="onSubmit" class="task-form">
  <div class="task-name">
  <h1>TO DO LIST APP</h1>
    <label for="taskname">Task Name :</label>
    <input
      type="text"
      name="taskname"
      id="taskname"
      placeholder="Enter your task"
      v-model="taskname"
      required
    />
  </div>

  <br />
  <br />
  <div class="description">
    <label for="description">Description :</label>
    <input
      type="text"
      name="description"
      id="description"
      placeholder="Enter your task"
      v-model="description"
      required
    />
  </div>
  <br />
  <button type="submit" @submit="">Save</button>
</form>`,
  data() {
    return {
      taskname: "",
      description: "",
      id: 1,
    };
  },
  methods: {
    onSubmit() {
      let task = {
        id: this.id,
        name: this.taskname,
        description: this.description,
      };

      this.$emit("task-submitted", task);

      this.id += 1;
      this.taskname = "";
      this.description = "";
    },
  },
});
