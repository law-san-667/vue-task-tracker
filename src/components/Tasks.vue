<template>

    <div class="">
        <Task @delete="$emit('delete-task', task.id)"  
                @toggle-reminder="$emit('toggle-reminder', task.id)"
        v-for="task in taskList" :key="task.id" :task="task"></Task>
    </div>

</template>

<script>
  import Task from './Task.vue';
    export default{
        name: 'Tasks',
        components:{
            Task,
        },
        props:{
            taskList: Array,
        }, 

    }

</script>