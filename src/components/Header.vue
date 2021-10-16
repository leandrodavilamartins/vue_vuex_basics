<template>
    <div>
        <h2>{{message}}</h2>
        <br>
        <h2>{{loginStatus}}</h2>
    </div>
</template>

<script>
    export default {
        computed:{
            message : function(){
                return this.$store.getters.uppercased_;
            },
            loginStatus: function(){
                return this.$store.state.loggedIn
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>