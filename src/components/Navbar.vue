<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <router-link  to="/">
        Firestore
      </router-link>
      <div>
        <button class="btn btn-light mx-3" @click="signIn">
          LogIn
        </button>
        <button class="btn btn-danger" @click="signOut">
          Logout
        </button>
      </div>
    </div>
    
  </nav>
</template>

<script>
import { useUser } from './hooks/useUser'

export default {
setup()
{
 const {signIn,signOut} = useUser();

 return{signIn,signOut}

}
}
</script>