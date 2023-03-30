<template>
    <button :style="{background: color}" @click="onClick()"
    class="hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: {
            type: String,
            default: 'blue',
        },
    },
    methods: {
        onClick() {
            
        }
    }
}

</script>