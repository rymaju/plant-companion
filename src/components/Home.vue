<template>
  <div>
    <b-row class="landing" no-gutters>
      <b-col class="d-flex flex-column justify-content-center">
        <h1 class="display-4">Pick plants that grow well together.</h1>
        <p class="lead">
          PlantCompanion is an inuitive guide to selecting plants that benefit each other, and avoiding plants that hinder growth.
        </p>

        <b-button class="w-50 mt-2" squared variant="primary" to="/companion">Find my plant companions!</b-button>

      </b-col>
      <b-col class="d-flex justify-content-center align-items-center">
        <GardeningSVG class="svg"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2>Column Title</h2>
        <p>Column text.</p>
      </b-col>
      <b-col>
        <h2>Column Title</h2>
        <p>Column text.</p>
      </b-col>
      <b-col>
        <h2>Column Title</h2>
        <p>Column text.</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import GardeningSVG from './GardeningSVG.vue'
export default {
  name: 'Home',
  components: {
    GardeningSVG
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.landing {
  min-height: 75vh;
  padding: 2em;
}
.svg {
  width: 400px;
  height: 400px;

  padding: 1em;
}

</style>
