<template>
    <header class="flex flex-col justify-between items-center mb-5 text-xl font-bold ">
        <h1>{{ title }}</h1>
        <ButtonVue @click="toggleAddTask" 
        :text="showAddTask? 'Close' : 'Add Task'" :color="showAddTask? 'red': 'green'"/>
    </header>
</template>


<script>

import ButtonVue from './Button.vue';

export default {
    name: 'Header',
    data(){
        return{
            showAddTask: false,
        }
    },
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    components: {
        ButtonVue,
    },
    methods: {
        toggleAddTask(){
            this.showAddTask = !this.showAddTask;
            this.$emit('toggle-add-task', this.showAddTask);
        }
    }
}
</script>


<style scoped>

</style>