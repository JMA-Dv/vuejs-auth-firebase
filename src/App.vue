<template>
  <Loading v-if="loading" class="mt-2" />
  <div v-else>
    <Navbar />

    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Loading from "./components/Loading.vue";
import { firebase } from "@/services/firebase";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    Navbar,
    Loading,
  },
  setup() {
    const loading = ref(false);

    onMounted(async () => {
      loading.value = true;
      await firebase.getCurrentUser();
      loading.value = false;
    });

    return { loading };
  },
};
</script>
