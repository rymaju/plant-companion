<template>
  <div>

    <b-row class="" >
      <b-col>
    <h1>
        All Plants
    </h1>
    <ul class="list-unstyled scrollable">
      <b-media tag="li">
        <template v-slot:aside>
          <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
        </template>
        <h5 class="mt-0 mb-1">Beans</h5>
        <p class="mb-1">
          Good with: Maize, Sunflowers, Lavender, Cabbage, Cucumber, Strawberies, Brinjal
        </p>
        <p class="mb-4">
          Bad with: Onion, Garlic, Fennel
        </p>
      </b-media>
<b-media tag="li">
        <template v-slot:aside>
          <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
        </template>
        <h5 class="mt-0 mb-1">Beans</h5>
        <p class="mb-2">
          Good with: Maize, Sunflowers, Lavender, Cabbage, Cucumber, Strawberies, Brinjal
        </p>
        <p class="mb-2">
          Bad with: Onion, Garlic, Fennel
        </p>
      </b-media>

    </ul>
      </b-col>
      <b-col>
        <h1>Selected Plants</h1>
      
      <b-list-group>
          <b-list-group-item v-on:click="f()">Yarrow can be planted near aromatic herbs to enhance essential oil production.</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Morbi leo risus</b-list-group-item>
          <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
      </b-col>

    </b-row>
    
  </div>
</template>

<script>
export default {
  name: 'Companion',
  components: {
  },
  methods: {
    f() {
      alert('hi')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.landing {

}
.svg {
  width: 400px;
  height: 400px;

  padding: 1em;
}
.scrollable {
  max-height: 50vh;
  overflow: auto;
}

.list-element {
  margin-bottom: 1em;
}


</style>
