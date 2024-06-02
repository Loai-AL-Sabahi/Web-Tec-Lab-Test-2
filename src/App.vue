<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script>



export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%), url(./assets/images/Background-clouds.jpg);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
}
</style>