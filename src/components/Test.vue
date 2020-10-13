<template>
    <div class="test">
        <div class="test__item">
            {{msg}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'Test',
    data(){
        return {
            msg: 'Hello Test'
        }
    }
}
</script>  
<style lang="scss">
    .test{
        border: 1px solid red;
        &__item{
            font-size: 40px;
        }
    }
</style>