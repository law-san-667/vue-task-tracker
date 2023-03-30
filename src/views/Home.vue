<template>
        
    <Tasks :taskList="tasks" @toggle-reminder="toggleReminder" @delete-task="deleteTask"/>
    <div class="" v-show="showAddTask" >
      <AddTask @add-task="addTask" />
    </div>
</template>

<script>
    import Tasks from '../components/Tasks.vue';
    import AddTask from '../components/AddTask.vue';

    export default{
        name: 'Home',
        components:{
            Tasks,
            AddTask,
        },
        data(){
            return{
                tasks: [],
                showAddTask: false,
            }
        },
        async created(){
            this.tasks = await this.fetchTasks();
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
                console.log(JSON.stringify(task));
                const data = await res.json();
                this.tasks.push(data);
            },
            async deleteTask(taskId){
                if(confirm('Are you sure you want to delete this task?')){
                    const res = await fetch('http://localhost:3300/tasks/'+taskId, {
                        method: 'DELETE',
                    });
                    this.tasks = this.tasks.filter((task) => task.id !== taskId);
                }
            },
            async toggleReminder(taskId){
                const taskToToggle = await this.fetchTask(taskId);
                const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder};
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
        }
    }
</script>