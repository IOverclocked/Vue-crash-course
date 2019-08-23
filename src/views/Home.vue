<template>
  <div class="home">
    <Add v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todo" v-on:delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import Add from "../components/AddTodo";
import Todos from "../components/Todos";
import axios from "axios";

const LIMIT = "?_limit=5";
const URL_JSON_PLACEHOLDER = "https://jsonplaceholder.typicode.com/todos";

export default {
  name: "Home",
  components: {
    Todos,
    Header,
    Add
  },
  data() {
    return {
      todo: []
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`${URL_JSON_PLACEHOLDER}/${id}`)
        .then(res => (this.todo = this.todo.filter(item => item.id !== id)))
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios
        .post(URL_JSON_PLACEHOLDER, {
          title,
          completed
        })
        .then(res => (this.todo = [...this.todo, res.data]))
        .catch(err => console.log(err));
    }
  },
  // lifecycle methods before render
  created() {
    axios
      .get(URL_JSON_PLACEHOLDER + LIMIT)
      .then(res => (this.todo = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>
