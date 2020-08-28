<template>
  <b-container>
    <b-navbar toggleable="md"  variant="faded" type="light">
      <b-navbar-brand tag="h1" to="/">Plant Companion</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
      

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/companion">Companion</b-nav-item>
          <b-nav-item to="faq">FAQ</b-nav-item>

        </b-navbar-nav>
      </b-collapse>
      
    </b-navbar>
    <router-view class="view"></router-view>
    <footer class="mt-5 mb-5">
      <p class="m-0">Illustrations provided by <b-link href="undraw.co">undraw.co</b-link></p>
      
      <p class="m-0">This project is free and open source. <b-link href="github.com/rymaju">Check out the code on Github.</b-link></p>

      <p class="m-0">Created by Ryan Jung @ Northeastern University.</p>
    </footer>
  </b-container>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>

.view {
  min-height: 80vh;
}
</style>>
