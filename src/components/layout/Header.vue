<template>
  <header class="header">
    <h2 class="header__title">TodoList</h2>
    <nav class="header__nav">
      <router-link to="/">Home</router-link>&nbsp; |&nbsp;
      <router-link to="/above">Above</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  padding: 5px 0;
  background: rgb(49, 49, 49);
  color: #ddd;
  width: 100%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header__title {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
}

.header__nav a {
  color: #fff;
  text-decoration: none;
}
</style>
