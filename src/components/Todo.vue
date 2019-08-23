<template>
  <div class="todo" v-bind:class="{'todo--completed':todo.completed}">
    <div class="todo__content">
      <input type="checkbox" v-bind:checked="todo.completed" v-on:change="markComplete">
      {{todo.title}}
    </div>
    <div class="todo__actions">
      <button @click="$emit('delete-todo', todo.id)" class="todo__button todo__button--delete">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>


<style scoped>
.todo {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo--completed {
  text-decoration: line-through;
}

.todo__button--delete {
  border-radius: 50%;
  padding: 10px;
  border: none;
  background: rgb(255, 86, 86);
  color: #fff;
  cursor: pointer;
  outline: none;
}
</style>

