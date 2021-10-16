<template>
  <div class="home">
    <Header></Header>
    <SignButton></SignButton>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SignButton from '../components/SignButton.vue'

export default {
  name: 'Home',
  components: {
    Header, SignButton
  }
}
</script>
