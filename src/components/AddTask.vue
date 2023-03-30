<template>
 
 <!--Task has text, day & time (input text), reminder(boolean) -->
 <!--Create a form to add a task using tailwind-->

    <div class="border flex flex-col items-center justify-center border-white border-2 w-96 h-fit p-8 mt-10 ml-4">
        <h1 class="text-3xl font-bold mb-5">Add Task</h1>
        <form class="flex flex-col justify-center items-center" @submit.prevent="onSubmit">
            <div class="flex flex-col justify-center items-center mb-5">
                <label class="text-xl font-bold mb-2">Task</label>
                <input type="text" class="border-2 border-gray-400 rounded-md p-2 text-black" v-model="text" placeholder="Add Task">
            </div>
            <div class="flex flex-col justify-center items-center mb-5">
                <label class="text-xl font-bold mb-2">Day & Time</label>
                <input type="text" class="border-2 border-gray-400 rounded-md p-2 text-black" v-model="day" placeholder="Add Day & Time">
            </div>
            <div class="flex flex-col justify-center items-center mb-5">
                <label class="text-xl font-bold mb-2">Set Reminder</label>
                <input type="checkbox" class="border-2 border-gray-400 rounded-md p-2" v-model="reminder">
            </div>
            <input type="submit" class="bg-green-500 text-white rounded-md p-2" value="Save Task">
        </form>
    </div>
</template>

<script>

    export default{
        name: 'AddTask',
        data(){
            return{
                text: '',
                day: '',
                reminder: false,
            }
        },
        methods:{
            onSubmit(e){
                e.preventDefault();
                
                if(!this.text){
                    alert('Please add a task');
                    return;
                }
                const newTask = {
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder,
                }
                this.$emit('add-task', newTask);
                this.text = '';
                this.day = '';
                this.reminder = false;
            }
        }
    }

</script>