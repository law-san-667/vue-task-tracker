<template>

    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'border-l-4 border-green-500' : '']"
    class=" border-gray-400 bg-black rounded-md w-80 p-4 mb-4"
    >
        <h3 class="font-medium flex justify-between items-center" >{{ task.text }}
            <b @click="onDelete(task.id)"
            class="text-xl hover:cursor-pointer"  style="color: #ff0000;"
            >x</b>
        </h3>
        <p class="italic" >{{ task.day }}</p>
    </div>

</template>

<script>
  
    export default{
        name: 'Task',
        props:{
            task: Object ,
        }, 
        methods:{
            onDelete(taskId){
                this.$emit('delete', this.task.id);
            }
        }

    }

</script>

<style scoped>

.reminder{
    border-left: 2px solid #00ff00;
}

</style>