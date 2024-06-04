app.component("todolists", {
  props: {
    tasks: {
      type: Object,
      required: true,
    },
  },
  template: `<div class="tasklists">
  <table class="table-style" border="1">
    <thead>
      <th>No.</th>
      <th>Task Name</th>
      <th>Description</th>
      <th>Action</th>
    </thead>
    <tbody>
      <tr v-for="(task,index) in tasks" :key="index">
        <td>{{index+1}}</td>
        <td>{{task.name}}</td>
        <td>{{task.description}}</td>
        <td><button v-on:click="deleteFromTasks(task.id)">Delete</button></td>
      </tr>
    </tbody>
  </table>
</div>`,
  data() {},
  methods: {
    deleteFromTasks(taskId) {
      this.$emit("task-deleted", taskId);
    },
  },
});
