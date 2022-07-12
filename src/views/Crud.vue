<template>
  <div v-if="isAuthenticated">
  <Loading v-if="loading"/>
  <div v-else>
    <Error v-if="printError"/>
    <TodoForm/>
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo"/>


  </div>


  </div>
</template>

<script>
import { useAuth } from '@vueuse/firebase'
import {useDb} from '../components/hooks/useDb'
import Loading from '../components/Loading.vue'
import { ref } from '@vue/reactivity'

import { computed, onMounted, provide } from '@vue/runtime-core'
import Error from '../components/Error.vue'
import TodoForm from '../components/todoForm.vue'
import Todo from '../components/todo.vue'
export default {
  components:{
    Loading,
    Error,
    TodoForm,
    Todo
},
setup(){
  const {isAuthenticated} = useAuth();
  const {getTodos,isLoading} = useDb();
  const todos = ref([]);
  const error = ref(null)
  provide('error',error);
  provide('todos',todos)
  const printError = computed(() => error.value ? true: false)

  onMounted(async()=>{
    todos.value = await getTodos();
    if(todos.value.res){
      console.log(todos.value.error)
      error.value = todos.value.error;
    }
  })
  
  return {isAuthenticated,isLoading,todos,printError}
}
}
</script>

