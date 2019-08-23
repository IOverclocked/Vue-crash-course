<template>
  <div class="add">
    <form class="add__form" @submit="addTodo">
      <input class="add__input" type="text" name="title" placeholder="Add todo..." v-model="title">
      <button class="add__button add__button--submit" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
// import uuid from "uuid";

export default {
  name: "AddTodo",
  date() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        // id: uuid.v4(),
        title: this.title,
        completed: false
      };
      this.title = "";
      this.$emit("add-todo", newTodo);
    }
  }
};
</script>


<style>
.add__form {
  display: flex;
}

.add__input {
  flex: 5;
  padding: 5px;
  border: 1px solid #ccc;
  outline: none;
  color: #111;
}

.add__button {
  margin: 0;
  height: 32px;
  flex: 1;
  background: rgb(49, 49, 49);
  border: none;
  color: #ccc;
  outline: none;
}

.add__button:hover {
  background: rgba(49, 49, 49, 0.9);
  cursor: pointer;
}
</style>

