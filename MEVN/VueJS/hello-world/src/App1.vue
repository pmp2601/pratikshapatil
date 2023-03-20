<script setup>
import { RouterLink, RouterView} from 'vue-router'
import HelloWorld1 from './components/HelloWorld1.vue'
import AboutYou from './components/AboutYou.vue'
import Practice from './components/Practice.vue'
</script>

<template>
    <header>
        <div class="wrapper">
            <br>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/test">Test</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
                <RouterLink to="/aboutyou">AboutYou</RouterLink>
                <RouterLink to="/products">Products</RouterLink>
            </nav>
            <br>
        </div>
    </header>
    <RouterView/>
</template>
    
    <style scoped>
    header{

    }
    </style>
    