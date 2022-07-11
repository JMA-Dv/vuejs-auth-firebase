<template>
<div v-if="isAuthenticated">
  <h1>profui</h1>
  <pre>
    {{user}}
  </pre>

</div>
</template>

<script>
import { useAuth } from "@vueuse/firebase";
export default {

  setup(){
     const { isAuthenticated, user  } = useAuth();
     
     return {isAuthenticated, user}
     }

}
</script>

<style>

</style>