<template>
  <div class="card shadow-sm mb-2">
    <div class="card-body">
        <p class="m-0"
            :class="{'text-decoration-line-through':todo.state}"
        >
            {{todo.text}}

        </p>
        <div class="mt-2">
            <button class="btn btn-warning mx-2" @click="update(todo)">
                {{!todo.state ? 'Finalize': 'Pending'}}
            </button>
            <button class="btn btn-danger" @click="deleteTodo(todo.id)">
                Delete
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core';
import {useDb} from '../components/hooks/useDb'
export default {
props:{
    todo:Object
},
setup(){

    const {deleteTodoAsync, updateTodo} = useDb();
    const error = inject('error')
    const todos = inject('todos')
    const update = async(todo)=>{
         const response = await updateTodo(todo);
         if(response.res){
            error.value = response.error;
            return;
         }

         todos.value = todos.value.map(item=>(
            item.id === todo.id ? {...item,state:!todo.state} : item
         ))
    }
    const deleteTodo = async(id)=>{
        const response = await deleteTodoAsync(id)

        if(response.res){
            error.value = response.error;
            return;
        }

        todos.value = todos.value.filter(i=> i.id !== id);

    }
    return {deleteTodo,update}
}
}
</script>

<style>

</style>