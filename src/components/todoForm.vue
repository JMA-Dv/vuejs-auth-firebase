<template>
  <form @submit.prevent="processForm">
    <input
      type="text"
      placeholder="Enter todo"
      v-model.trim="text"
      class="form-control my-3"
    />
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useDb } from "./hooks/useDb";
import { inject } from "@vue/runtime-core";
export default {
  setup() {
    const { addTodo } = useDb();
    const text = ref("");
    const todos = inject("todos");
    console.log(typeof(todos));
    const processForm = async () => {
      if (!text.value.trim()) {
        return;
      }
      const todo = await addTodo(text.value);
      todos.value = [...todos.value, todo];
      text.value = "";
    };

    return {processForm,text};
  },
};
</script>

<style>
</style>