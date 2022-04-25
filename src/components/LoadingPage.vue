<template>
<progress class="progress" max="100">15%</progress>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
 name:'LoadingPage',

 props: {
  value: Number
 }

})
</script>

<style>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-left:45%;
  animation: spin 2s linear infinite;
  padding: 75px
 
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>