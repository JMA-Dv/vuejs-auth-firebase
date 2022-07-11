<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>An Error happened!</strong>  {{error}}
  <button type="button" @click="error = null" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
setup(){
    const error = inject('error');
    return {error}
}
}
</script>

<style>

</style>