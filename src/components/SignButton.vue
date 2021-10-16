<template>
    <div>
        <button @click="sign">Sign button</button>
    </div>
</template>

<script>
    export default {
        methods: {
            sign: function(){
                return this.$store.commit('SET_LOGIN')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>