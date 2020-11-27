<template>
  <div id="app" class="has-background-light">
    <Navbar />

    <div class="container pt-5">
      <MyTeamTable />
      <router-vier />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import MyTeamTable from '@/components/MyTeamTable'

export default {
  name: 'App',

  components: {
    Navbar,
    MyTeamTable,
  },

  mounted() {},
}
</script>

<style scoped>
#app {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
}
</style>
