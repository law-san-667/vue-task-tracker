<script setup>
</script>

<template>
  <div class="border flex flex-col items-center justify-center border-white border-2 w-96 py-4 mt-10">
    <Header title="My Task Tracker" @toggle-add-task="showAddTask = !showAddTask"></Header>

      <Tasks :taskList="tasks" @toggle-reminder="toggleReminder" @delete-task="deleteTask"/>
  </div>
  <div class="" v-show="showAddTask" >
        <AddTask @add-task="addTask" />
  </div>

</template>


<script>

  import Header from './components/Header.vue';
  import Tasks from './components/Tasks.vue';
  import AddTask from './components/AddTask.vue';

  export default {
    name: 'App',
    components: {
    Header,
    Tasks,
    AddTask,
    },
    data(){
      return {
        tasks: [],
        showAddTask: false,
      }
    },
    methods:{
      async fetchTasks(){
        const res = await fetch('http://localhost:3300/tasks');
        const data = await res.json();
        return data;
      },

      async fetchTask(taskId){
        const res = await fetch('http://localhost:3300/tasks/'+taskId);
        const data = await res.json();
        return data;
      },

      async addTask(task){
        const res = await fetch('http://localhost:3300/tasks', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(task),
        });
        const data = await res.json();
        this.tasks.push(data);
      },

      async deleteTask(taskId){
        if(confirm('Are you sure you want to delete this task?')){
          const res = await fetch('http://localhost:3300/tasks/'+taskId, {
            method: 'DELETE',
          });
          if(res.status === 200){
            this.tasks = this.tasks.filter((task) => task.id !== taskId);
          }
          else{
            alert('Error deleting task');
          }
        }
      },

      async toggleReminder(taskId){
        const taskToToggle = await this.fetchTask(taskId);
        console.log(taskToToggle);
        const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder};
        console.log(updatedTask);
        const res = await fetch('http://localhost:3300/tasks/'+taskId, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(updatedTask),
        });
        const data = await res.json();
        this.tasks = this.tasks.map((task) => task.id === taskId ? {...task, reminder: data.reminder} : task);
      },
    },
    async created(){
      this.tasks = await this.fetchTasks();
    }
  }

</script>


<style scoped>
</style>
