<template>
    <div class="app">
        {{msg}}
        <Test />
        <Counter/>
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-view/>
    </div>
</template>
<script>
import Test from './components/Test.vue';
import Counter from './components/Counter.vue';
export default {
    name: 'App',
    components: {
        Test,
        Counter
    },
    data(){
        return {
            msg: 'Hello Vue'
        }
    }
}
</script>  