<template>
    <!--Create a footer using tailwind, add a link to an about page '/about'-->
    <footer class="flex mt-10 fixed left-0 right-0 justify-center items-center h-20 bg-gray-800 text-white">
        <p>Copyright &copy; 2023 <a href="#" class="text-blue-500">LAW</a></p>
        <!--About link-->
        <router-link to="/about" class="text-blue-500 ml-4">About</router-link>
    </footer>
</template>

<style>

    footer{
        position: absolute;
        bottom: 0;
    }

</style>