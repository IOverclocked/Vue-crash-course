<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>


<style>
*,
*::befor,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  box-sizing: border-box;
}
</style>
