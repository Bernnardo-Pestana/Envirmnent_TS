<template>
  <div class="content is-medium p-6 mx-6  ">
    <p class="title is-1 is-spaced">About this Project</p>
      <p class="has-text-justified is-family-sans-serif ">
          This project was based on the api: <a href="https://emissions-api.org" target="_blank">emissions-api</a> in order to show
          the user the emission rate in a simple and clear way that his country or which he selects emits in the atmosphere per month or by day, acording to user input.
          Being able to choose between  MonoxidoCarbon, Ozone, Hydrogen and Methane.
  
          The data taken from the emission-api are public, that is, anyone can access the api at no cost,
          your <a href="https://emissions-api.org/data.html" target="_blanc"> documentation </a> has an explanation of how the
          data that this application uses.
      </p>
  </div>
</template>
 


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
 name: 'AboutProject',
})
</script>

<style>


</style>
