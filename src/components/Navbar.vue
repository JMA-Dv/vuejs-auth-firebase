<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        {{ userName }}
      </router-link>
      <div>
        <button v-if="!isAuthenticated" class="btn btn-light mx-3" @click="signIn">LogIn</button>
        <div v-else>
          <button class="btn btn-danger mx-1"  @click="signOut">Logout</button>
          <router-link to="" class="btn btn-primary mx-1">CRUD  </router-link>
          <router-link to="" class="btn btn-primary mx-1">Profile  </router-link>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUser } from "./hooks/useUser";
import { useAuth } from "@vueuse/firebase";
import { computed } from '@vue/runtime-core';

export default {
  setup() {
    const { signIn, signOut } = useUser();
    const { isAuthenticated, user  } = useAuth();
    
const userName = computed(()=>{
      return isAuthenticated.value ? user.value.displayName : 'NoAuth'
     })
    return { signIn, signOut, isAuthenticated, user,userName  };
  },
};
</script>